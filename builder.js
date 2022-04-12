const fs = require('fs');
const streaming = require('./streaming.js');
const getEpgData = require('./epg.js');
const allPlaylist = require('./playlist.js');

const channelLogoRevision = 8;
const currentEpochDatetime = new Date().getTime();
const currentDatetimePlus7Hrs = new Date(currentEpochDatetime + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

// const getTvgIdFromChannelKey = (channelKey) => {
//   switch (channelKey) {
//     case 'thairath':
//       return 'ThairathTV32.th';
//     case 'mono29soundtrack':
//       return 'mono29.iptv36.my.to';
//     default:
//       return `${channelKey}.iptv36.my.to`;
//   }
// };

const main = async () => {
  // prefetch epg data
  let epgDataPromise;

  if (!process.env.NETLIFY) {
    epgDataPromise = getEpgData();
  }

  // dynamically add streaming url
  // await streaming.dynamicallyAddStreamingUrlFromFwIptv();
  await streaming.dynamicallyAddStreamingUrlFromDailyMotion();
  // await streaming.dynamicallyAddStreamingUrlByDetectM3U8Url();

  // remember all active channel key to build epg
  let allActiveChannelKey = [];

  // generate M3U PLAYLIST file
  for (let playlist of allPlaylist) {
    let textStr = `#EXTM3U url-tvg="https://iptv-org.github.io/epg/guides/th/tv.trueid.net.epg.xml" refresh="3600"\n`;
    textStr += `#       homepage="https://iptv36.my.to/" last-update="${currentBkkDatetimeStr}"\n\n`;

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

    // for (let i = 0; i < uniqueChannelKeyForThisPlaylist.length; i++) {
    //   let channelKey = uniqueChannelKeyForThisPlaylist[i];
    //   await streaming.getStreamingInfo(channelKey);
    // }

    // generate playlist file
    for (let i = 0; i < playlist.channelList.length; i++) {
      let [channelKey, skip = 0] = playlist.channelList[i];
      let streamingInfo = await streaming.getStreamingInfo(channelKey, skip);
      let channelName = playlist.removeNoHWPlusDecoderWarning
        ? streamingInfo.channelName.replace(' [NO HW+]', '*')
        : streamingInfo.channelName;
      let tvgId = streamingInfo.tvgId || `${channelKey}.iptv36.my.to`;
      let channelStr = `#EXTINF:-1 tvg-chno="${i + 1}" tvg-id="${tvgId}" group-title="${
        streamingInfo.groupName
      }" tvg-logo="${streamingInfo.logo}?rev=${channelLogoRevision}",${channelName}`;

      // if (streamingInfo.EXTVLCOPT) {
      //   channelStr += `\n${streamingInfo.EXTVLCOPT}`;
      //   channelStr += `\n#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74`;
      // }

      channelStr += `\n${streamingInfo.url}\n\n`;

      textStr = textStr + `${channelStr}`;
    }

    fs.writeFileSync(`${playlist.filename}`, textStr, 'utf8');

    console.log(`==> Created playlist '${playlist.filename}'`);
  }

  // generate XMLTV EPG file
  if (!process.env.NETLIFY) {
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
  }
};

main();
