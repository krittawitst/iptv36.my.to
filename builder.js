const fs = require("fs");
const axios = require("axios");
const format = require("date-format");
const getStreamingInfo = require("./streaming.js");
const epgUrl =
  "http://dtvguide.nbtc.go.th/NbtcMobileWebService/nbtc.mobile.service/epgservice/getAllChannelTemp";

const basicPlaylist = {
  filename: "BASIC36.m3u",
  channelList: [
    getStreamingInfo("tv5"),
    getStreamingInfo("nbt"),
    getStreamingInfo("thaipbs"),
    getStreamingInfo("altv"),
    getStreamingInfo("workpoint", 1, {
      channelName: "Workpoint TV Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("pptv", 1, {
      channelName: "PPTV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch7", 1, {
      channelName: "CH7 HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch8", 1, {
      channelName: "CH8 RS Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("mono29", 1, {
      channelName: "MONO29 HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("tptv"),
    getStreamingInfo("one", 1, {
      channelName: "ONE HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("thairath", 1, {
      channelName: "Thairath TV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch3", 1, {
      channelName: "CH3 HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("amarin", 1, {
      channelName: "Amarin TV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("gmm25", 1, {
      channelName: "GMM25 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("tnn16"),
    getStreamingInfo("news1"),
    getStreamingInfo("new18"),
    getStreamingInfo("psi"),
    getStreamingInfo("cartoonclub"),
    getStreamingInfo("voice"),
    getStreamingInfo("nation"),
    getStreamingInfo("workpoint"),
    getStreamingInfo("true4u"),
    getStreamingInfo("gmm25"),
    getStreamingInfo("tvb"),
    getStreamingInfo("ch8"),
    getStreamingInfo("monoplus"),
    getStreamingInfo("mono29"),
    getStreamingInfo("mcot"),
    getStreamingInfo("one"),
    getStreamingInfo("thairath"),
    getStreamingInfo("ch3"),
    getStreamingInfo("amarin"),
    getStreamingInfo("ch7"),
    getStreamingInfo("pptv"),
  ],
};

const proPlaylist = {
  filename: "PRO36.m3u",
  channelList: [
    ...basicPlaylist.channelList.slice(0, 4),
    getStreamingInfo("hitsmovie"),
    getStreamingInfo("foxmovies"),
    getStreamingInfo("foxactionmovies"),
    getStreamingInfo("foxfamilymovies"),
    getStreamingInfo("foxthai"),
    ...basicPlaylist.channelList.slice(9, 10),
    getStreamingInfo("premier1", 1),
    getStreamingInfo("premier2", 1),
    getStreamingInfo("premier3"),
    getStreamingInfo("premier4"),
    getStreamingInfo("premier5"),
    ...basicPlaylist.channelList.slice(15, 36),
    getStreamingInfo("bein1"),
    getStreamingInfo("bein2"),
    getStreamingInfo("idstation"),
    getStreamingInfo("bein1", 1, {
      channelName: "beIN Sports HD1 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier1", 3, {
      channelName: "Premier HD1 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("truesport2"),
    getStreamingInfo("premier3", 4, {
      channelName: "Premier HD3 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("warner"),
    getStreamingInfo("axn"),
    getStreamingInfo("cartoonnetwork"),
    getStreamingInfo("history"),
    getStreamingInfo("history2"),
    getStreamingInfo("discoveryasia"),
    getStreamingInfo("gmm25", 1, {
      channelName: "GMM25 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("one", 1, {
      channelName: "ONE HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("thairath", 1, {
      channelName: "Thairath TV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch3", 1, {
      channelName: "CH3 HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("amarin", 1, {
      channelName: "Amarin TV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch7", 1, {
      channelName: "CH7 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("pptv", 1, {
      channelName: "PPTV HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("workpoint", 1, {
      channelName: "Workpoint TV Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("ch8", 1, {
      channelName: "CH8 RS Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("mono29", 1, {
      channelName: "MONO29 HD Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("mono29", 2, {
      channelName: "MONO29 HD Soundtrack",
      groupName: "BACKUP",
    }),
    getStreamingInfo("hbo"),
    getStreamingInfo("ctb"),
  ],
};

const iptvPlaylist = {
  filename: "IPTV36.m3u",
  channelList: [
    ...proPlaylist.channelList.slice(0, 60),
    getStreamingInfo("ipcam", 0, { channelName: "CAM1 | Park-164" }),
    getStreamingInfo("ipcam", 1, { channelName: "CAM2 | Park-163" }),
    getStreamingInfo("ipcam", 2, { channelName: "CAM3 | Toilet-163" }),
    getStreamingInfo("ipcam", 3, { channelName: "CAM4 | Door-163" }),
    getStreamingInfo("ipcam", 4, { channelName: "CAM5 | Kitchen" }),
    getStreamingInfo("ipcam", 5, { channelName: "CAM6 | Floor-2" }),
    getStreamingInfo("ipcam", 6, { channelName: "CAM7 | Com-TV" }),
    getStreamingInfo("ipcam", 7, { channelName: "CAM8 | Com-Ying" }),
    ...proPlaylist.channelList.slice(60),
  ],
};

const getEpgJsonDataData = async (url) => {
  try {
    const response = await axios.post(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  // M3U PLAYLIST
  for (let playlist of [basicPlaylist, proPlaylist, iptvPlaylist]) {
    let textStr = `#EXTM3U : iptv36.my.to/${
      playlist.filename
    } - Last Update ${format()}\n\n`;

    playlist.channelList.forEach((channel, index) => {
      let channelStr = `#EXTINF:-1 tvg-id="th-dtv${
        index + 1
      }.iptv36.my.to" tvg-logo-small="${channel.logo}" tvg-logo="${
        channel.logo
      }" tvg-chno="${index + 1}" group-title="${channel.groupName}", ${
        channel.channelName
      }\n${channel.url}\n\n`;
      textStr = textStr + `${channelStr}`;
    });

    fs.writeFileSync(playlist.filename, textStr, "utf8");

    console.log(`Created playlist '${playlist.filename}'`);
  }

  // EPG
  const epgJsonData = await getEpgJsonDataData(epgUrl);
  fs.writeFileSync("EPG.json", JSON.stringify(epgJsonData), "utf8");
  console.log(`Created EPG 'EPG.json'`);

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

  for (let result of epgJsonData.results) {
    let channelId = `${parseInt(result.channelNo)}`;
    for (let program of result.programOfChannel) {
      let programStart = new Date(program.pgBeginTimeLong * 1000);
      let programEnd = new Date(program.pgEndTimeLong * 1000);
      if (
        programEnd < currentDatetime ||
        programStart > currentDatetimePlusTwoDay // ||
        // channelId != 31
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
      xmlBody += `    <title><![CDATA[${program.pgTitle || "No Program Name"} ${
        program.pgBeginTime
      }]]></title>\n`;
      if (programDescription) {
        xmlBody += `    <desc><![CDATA[${programDescription}]]></desc>\n`;
      }
      xmlBody += `  </programme>\n`;
    }
  }

  fs.writeFileSync("EPG.xml", xmlHead + xmlBody + xmlTail, "utf8");
  console.log(`Created EPG 'EPG.xml'`);
};

main();
