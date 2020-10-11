const fs = require('fs');
const getStreamingInfo = require('./streaming.js');
const getEpgData = require('./epg.js');
const allPlaylist = require('./playlist.js');

const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const main = async () => {
  // M3U PLAYLIST
  for (let playlist of allPlaylist) {
    let textStr = `#EXTM3U : Thai IPTV Playlist from https://iptv36.my.to/ - Last Update ${currentBkkDatetimeStr}\n\n`;

    for (let i = 0; i < playlist.channelList.length; i++) {
      let [channelKey, skip = 0] = playlist.channelList[i];
      let streamingInfo = await getStreamingInfo(channelKey, skip);
      let channelStr = `#EXTINF:-1 tvg-chno="${i + 1}" tvg-id="${
        streamingInfo.tvgId
      }" group-title="${streamingInfo.groupName}" tvg-logo-small="${
        streamingInfo.logo
      }" tvg-logo="${streamingInfo.logo}", ${streamingInfo.channelName}\n${streamingInfo.url}\n\n`;
      textStr = textStr + `${channelStr}`;
    }

    fs.writeFileSync(`${playlist.filename}`, textStr, 'utf8');

    console.log(`==> Created playlist '${playlist.filename}'\n`);
  }

  // XMLTV EPG
  const epgData = await getEpgData();

  let xmlHead = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">
<tv>
`;
  let xmlTail = '</tv>';

  let allTvgTagId = [];

  let xmlProgramBody = '';
  for (let epg of epgData) {
    xmlProgramBody += `  <programme start="${epg.programStartStr}" stop="${epg.programEndStr}" channel="${epg.tvgTagId}">\n`;
    xmlProgramBody += `    <title><![CDATA[${epg.programTitle}]]></title>\n`;
    if (epg.programDescription) {
      xmlProgramBody += `    <desc><![CDATA[${epg.programDescription}]]></desc>\n`;
    }
    xmlProgramBody += `  </programme>\n`;

    allTvgTagId.push(epg.tvgTagId);
  }

  let xmlChannelBody = '';
  for (let tvgTagId of new Set(allTvgTagId)) {
    xmlChannelBody += `  <channel id="${tvgTagId}">
    <display-name>${tvgTagId}</display-name>
  </channel>
`;
  }

  fs.writeFileSync('EPG.xml', xmlHead + xmlChannelBody + xmlProgramBody + xmlTail, 'utf8');
  console.log(`==> Created EPG 'EPG.xml'`);
};

main();
