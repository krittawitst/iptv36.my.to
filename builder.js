const fs = require("fs");
const axios = require("axios");
const format = require("date-format");
const getStreamingInfo = require("./streaming.js");
const allPlaylist = require("./playlist.js");

const getEpgJsonDataFromNbtc = async () => {
  try {
    const epgUrl =
      "http://dtvguide.nbtc.go.th/NbtcMobileWebService/nbtc.mobile.service/epgservice/getAllChannelTemp";
    const response = await axios.post(epgUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEpgJsonDataFromAis = async () => {
  try {
    // let startDate =
    const epgUrl = `https://aisplay.ais.co.th/epg/?start_date=${format()}&end_date=2020-10-05&start_time=13:45:00&end_time=15:55:00&items=597e004b7ed5a24e46f6725a`;
    const response = await axios.post();
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

    fs.writeFileSync(playlist.filename, textStr, "utf8");

    console.log(`==> Created playlist '${playlist.filename}'\n`);
  }

  // EPG
  const epgJsonDataFromNbtc = await getEpgJsonDataFromNbtc();

  let xmlHead = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">
<tv>
`;
  for (let i = 1; i <= 36; i++) {
    xmlHead += `  <channel id="th-dtv${i}.iptv36.my.to">
    <display-name>Thai digital tv channel ${i}</display-name>
  </channel>
`;
  }
  let xmlBody = "";
  let xmlTail = "</tv>";
  let currentDatetime = new Date();
  let currentDatetimePlusTwoDay = new Date(
    currentDatetime.getTime() + 86400 * 2 * 1000
  );

  for (let result of epgJsonDataFromNbtc.results) {
    let channelId = `${parseInt(result.channelNo)}`;
    for (let program of result.programOfChannel) {
      let programStart = new Date(program.pgBeginTimeLong * 1000);
      let programEnd = new Date(program.pgEndTimeLong * 1000);
      if (
        programEnd < currentDatetime ||
        programStart > currentDatetimePlusTwoDay
      ) {
        continue;
      }
      let programStartStr = programStart
        .toISOString()
        .replace(/-|:|T/g, "")
        .replace(".000Z", "");
      let programEndStr = programEnd
        .toISOString()
        .replace(/-|:|T/g, "")
        .replace(".000Z", "");
      let programDescription = undefined;
      if (program.pgDesc && program.pgDesc.trim()) {
        programDescription = program.pgDesc.trim();
      }
      // console.log(
      //   `${program.pgDate} ${program.pgBeginTime} ${program.pgTitle}`
      // );
      xmlBody += `  <programme start="${programStartStr} -0000" stop="${programEndStr} -0000" channel="th-dtv${channelId}.iptv36.my.to">\n`;
      xmlBody += `    <title><![CDATA[${
        program.pgTitle || "No Program Name"
      }]]></title>\n`;
      if (programDescription) {
        xmlBody += `    <desc><![CDATA[${programDescription}]]></desc>\n`;
      }
      xmlBody += `  </programme>\n`;
    }
  }

  // const epgJsonDataFromAis = await epgJsonDataFromAis();

  fs.writeFileSync("EPG.xml", xmlHead + xmlBody + xmlTail, "utf8");
  console.log(`==> Created EPG 'EPG.xml'`);
};

main();
