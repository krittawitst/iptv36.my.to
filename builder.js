const fs = require('fs');
const streaming = require('./streaming.js');
const getEpgData = require('./epg.js');
const allPlaylist = require('./playlist.js');

const channelLogoRevision = 7;
const currentEpochDatetime = new Date().getTime();
const currentDatetimePlus7Hrs = new Date(currentEpochDatetime + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const main = async () => {
  // prefetch epg data
  const epgDataPromise = getEpgData();

  // dynamically add streaming url
  // await streaming.dynamicallyAddStreamingUrlFromFwIptv();
  await streaming.dynamicallyAddStreamingUrlFromDailyMotion();
  // await streaming.dynamicallyAddStreamingUrlFromWePlay();

  // remember all active channel key to build epg
  let allActiveChannelKey = [];

  // generate M3U PLAYLIST file
  for (let playlist of allPlaylist) {
    let textStr = `#EXTM3U : Thai IPTV Playlist from https://iptv36.my.to/ - Last Update ${currentBkkDatetimeStr}\n\n`;

    // test all streaming simultaneously
    console.log(`\nChecking streaming url for playlist '${playlist.filename}'...`);

    let uniqueChannelKeyForThisPlaylist = playlist.channelList.reduce(
      (channelList, [channelKey, skip = 0]) => {
        if (!channelList.includes(channelKey)) {
          channelList.push(channelKey);
        }
        return channelList;
      },
      []
    );

    allActiveChannelKey = [...allActiveChannelKey, ...uniqueChannelKeyForThisPlaylist];

    await Promise.all(
      uniqueChannelKeyForThisPlaylist.map(async (channelKey) => {
        await streaming.getStreamingInfo(channelKey);
      })
    );

    // generate playlist file
    for (let i = 0; i < playlist.channelList.length; i++) {
      let [channelKey, skip = 0] = playlist.channelList[i];
      let tvgId =
        channelKey === 'mono29soundtrack' ? `mono29.iptv36.my.to` : `${channelKey}.iptv36.my.to`;
      let streamingInfo = await streaming.getStreamingInfo(channelKey, skip);
      let channelStr = `#EXTINF:-1 tvg-chno="${i + 1}" tvg-id="${tvgId}" group-title="${
        streamingInfo.groupName
      }" tvg-logo="${streamingInfo.logo}?rev=${channelLogoRevision}",${
        streamingInfo.channelName
      }\n${streamingInfo.url}\n\n`;
      textStr = textStr + `${channelStr}`;
    }

    fs.writeFileSync(`${playlist.filename}`, textStr, 'utf8');

    console.log(`==> Created playlist '${playlist.filename}'`);
  }

  // generate XMLTV EPG file
  allActiveChannelKey = Array.from(new Set(allActiveChannelKey));
  const epgData = await epgDataPromise;

  let xmlHead = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">
<tv>
`;
  let xmlTail = '</tv>';

  let availableTvgId = [];

  let xmlProgramBody = '';
  for (let epg of epgData) {
    if (!allActiveChannelKey.includes(epg.channelKey)) {
      continue;
    }

    let tvgId = `${epg.channelKey}.iptv36.my.to`;
    xmlProgramBody += `  <programme start="${epg.programStartStr}" `;
    xmlProgramBody += epg.programEndStr ? `stop="${epg.programEndStr}" ` : '';
    xmlProgramBody += `channel="${tvgId}">\n`;
    xmlProgramBody += `    <title><![CDATA[${epg.programTitle}]]></title>\n`;
    if (epg.programSubtitle) {
      xmlProgramBody += `    <sub-title><![CDATA[${epg.programSubtitle}]]></sub-title>\n`;
    }
    if (epg.programDescription) {
      xmlProgramBody += `    <desc><![CDATA[${epg.programDescription}]]></desc>\n`;
    }
    xmlProgramBody += `  </programme>\n`;

    availableTvgId.push(tvgId);
  }

  let xmlChannelBody = '';
  for (let tvgId of new Set(availableTvgId)) {
    xmlChannelBody += `  <channel id="${tvgId}">
    <display-name>${tvgId}</display-name>
  </channel>
`;
  }

  fs.writeFileSync('EPG.xml', xmlHead + xmlChannelBody + xmlProgramBody + xmlTail, 'utf8');
  console.log(`\n==> Created EPG 'EPG.xml'`);
};

main();
