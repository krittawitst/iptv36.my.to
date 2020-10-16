const fs = require('fs');
const getStreamingInfo = require('./streaming.js');
const getEpgData = require('./epg.js');
const allPlaylist = require('./playlist.js');

const channelLogoRevision = 2;
const currentEpochDatetime = new Date().getTime();
const currentDatetimePlus7Hrs = new Date(currentEpochDatetime + 7 * 60 * 60 * 1000);
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
      }" group-title="${streamingInfo.groupName}" tvg-logo="${
        streamingInfo.logo
      }?rev=${channelLogoRevision}", ${streamingInfo.channelName}\n${streamingInfo.url}\n\n`;
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

  let allTvgId = [];

  let xmlProgramBody = '';
  for (let epg of epgData) {
    xmlProgramBody += `  <programme start="${epg.programStartStr}" `;
    xmlProgramBody += epg.programEndStr ? `stop="${epg.programEndStr}" ` : '';
    xmlProgramBody += `channel="${epg.tvgId}">\n`;
    xmlProgramBody += `    <title><![CDATA[${epg.programTitle}]]></title>\n`;
    if (epg.programSubtitle) {
      xmlProgramBody += `    <sub-title><![CDATA[${epg.programSubtitle}]]></sub-title>\n`;
    }
    if (epg.programDescription) {
      xmlProgramBody += `    <desc><![CDATA[${epg.programDescription}]]></desc>\n`;
    }
    xmlProgramBody += `  </programme>\n`;

    allTvgId.push(epg.tvgId);
  }

  let xmlChannelBody = '';
  for (let tvgId of new Set(allTvgId)) {
    xmlChannelBody += `  <channel id="${tvgId}">
    <display-name>${tvgId}</display-name>
  </channel>
`;
  }

  fs.writeFileSync('EPG.xml', xmlHead + xmlChannelBody + xmlProgramBody + xmlTail, 'utf8');
  console.log(`==> Created EPG 'EPG.xml'`);
};

main();
