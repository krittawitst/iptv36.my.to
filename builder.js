const fs = require('fs');
const streaming = require('./streaming.js');
const getEpgData = require('./epg.js');
const allPlaylist = require('./playlist.js');

const currentEpochDatetime = new Date().getTime();
const currentDatetimePlus7Hrs = new Date(currentEpochDatetime + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const main = async () => {
  // prefetch epg data
  let epgDataPromise;

  if (true /*!process.env.NETLIFY*/) {
    epgDataPromise = getEpgData();
  }

  // dynamically add streaming url
  const current = new Date().valueOf();
  const isActive = current < (1687178845 - 3 * 60 * 60) * 1000;
  if (isActive) await streaming.dynamicallyAddStreamingUrlFromAisPlay();
  await streaming.dynamicallyAddStreamingUrlFromDailyMotion();

  // remember all active channel key to build epg
  let allActiveChannelKey = [];

  // generate M3U PLAYLIST file
  for (let playlist of allPlaylist) {
    let textStr = `#EXTM3U url-tvg="https://iptv36.netlify.app/epg.xml" refresh="3600"\n#\n`;
    textStr += `#   Homepage: https://iptv36.my.to/ (Find another version of IPTV playlists here)\n`;
    textStr += `#   Automatically update at: ${currentBkkDatetimeStr} ICT\n\n`;

    // test all streaming simultaneously
    console.log(`\nChecking streaming url for playlist '${playlist.filename}'...`);

    let uniqueChannelKeyForThisPlaylist = playlist.channelList.reduce((channelList, [channelKey, skip = 0]) => {
      if (!channelList.includes(channelKey)) {
        channelList.push(channelKey);
      }
      return channelList;
    }, []);

    allActiveChannelKey = [...allActiveChannelKey, ...uniqueChannelKeyForThisPlaylist];

    await Promise.all(
      uniqueChannelKeyForThisPlaylist.map(async (channelKey) => {
        await streaming.getStreamingInfo(channelKey);
      })
    );

    // generate playlist file
    for (let i = 0; i < playlist.channelList.length; i++) {
      let [channelKey, skip = 0] = playlist.channelList[i];
      let streamingInfo = await streaming.getStreamingInfo(channelKey, skip);
      let channelName = streamingInfo.channelName;
      let tvgId = streamingInfo.tvgId ? streamingInfo.tvgId : `${channelKey}.iptv36.my.to`;
      let channelStr = `#EXTINF:-1 tvg-chno="${i + 1}" tvg-id="${tvgId}" group-title="${
        streamingInfo.groupName
      }" tvg-logo="${streamingInfo.logo}",${channelName}`;

      // added option #EXTVLCOPT
      if (streamingInfo.options) {
        if (streamingInfo.options.referer) {
          channelStr += `\n#EXTVLCOPT:http-referrer=${streamingInfo.options.referer}`;
        }
        if (streamingInfo.options.userAgent) {
          channelStr += `\n#EXTVLCOPT:http-user-agent=${streamingInfo.options.userAgent}`;
        }
      }

      channelStr += `\n${streamingInfo.url}\n\n`;

      textStr = textStr + `${channelStr}`;
    }

    let versionInfo = `#EXTINF:-1 tvg-chno="${playlist.channelList.length + 1}" group-title="Thai Free TV" `;
    versionInfo += `tvg-logo="https://iptv36.my.to/logo/info.png",${currentBkkDatetimeStr}\nhttps://iptv36.my.to/logo/info.png\n\n`;
    textStr = textStr + `${versionInfo}`;

    fs.writeFileSync(`${playlist.filename}`, textStr, 'utf8');

    console.log(`==> Created playlist '${playlist.filename}'`);
  }

  // generate XMLTV EPG file
  if (true /* !process.env.NETLIFY */) {
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
      xmlChannelBody += `  <channel id="${tvgId}">\n`;
      xmlChannelBody += `    <display-name>${tvgId}</display-name>\n`;
      xmlChannelBody += `  </channel>\n`;
    }

    fs.writeFileSync('epg.xml', xmlHead + xmlChannelBody + xmlProgramBody + xmlTail, 'utf8');
    console.log(`\n==> Created EPG 'epg.xml'`);
  }
};

main();
