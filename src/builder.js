const fs = require("fs");
const axios = require("axios");
const format = require("date-format");

const getStreamingInfo = require("./streaming.js");
const getEpgData = require("./epg.js");
const allPlaylist = require("./playlist.js");

const main = async () => {
  // M3U PLAYLIST
  for (let playlist of allPlaylist) {
    let textStr = `#EXTM3U : Thai IPTV Playlist from https://iptv36.my.to/ - Last Update ${format()}\n\n`;

    for (let i = 0; i < playlist.channelList.length; i++) {
      let [channelKey, skip = 0] = playlist.channelList[i];
      let streamingInfo = await getStreamingInfo(channelKey, skip);
      let channelStr = `#EXTINF:-1 tvg-chno="${i + 1}" tvg-id="${
        streamingInfo.tvgId
      }" group-title="${streamingInfo.groupName}" tvg-logo-small="${
        streamingInfo.logo
      }" tvg-logo="${streamingInfo.logo}", ${streamingInfo.channelName}\n${
        streamingInfo.url
      }\n\n`;
      textStr = textStr + `${channelStr}`;
    }

    fs.writeFileSync(`${playlist.filename}`, textStr, "utf8");

    console.log(`==> Created playlist '${playlist.filename}'\n`);
  }

  // XMLTV EPG
  const epgData = await getEpgData();

  let xmlHead = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">
<tv>
`;
  //   for (let i = 1; i <= 36; i++) {
  //     xmlHead += `  <channel id="th-dtv${i}.iptv36.my.to">
  //     <display-name>Thai digital tv channel ${i}</display-name>
  //   </channel>
  // `;
  //   }
  let xmlBody = "";
  let xmlTail = "</tv>";

  for (let epg of epgData) {
    xmlBody += `  <programme start="${epg.programStartStr}" stop="${epg.programEndStr}" channel="${epg.tvgTagId}">\n`;
    xmlBody += `    <title><![CDATA[${epg.programTitle}]]></title>\n`;
    if (epg.programDescription) {
      xmlBody += `    <desc><![CDATA[${epg.programDescription}]]></desc>\n`;
    }
    xmlBody += `  </programme>\n`;
  }

  fs.writeFileSync("EPG.xml", xmlHead + xmlBody + xmlTail, "utf8");
  console.log(`==> Created EPG 'EPG.xml'`);
};

main();
