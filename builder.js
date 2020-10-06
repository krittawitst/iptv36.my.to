const fs = require("fs");
const axios = require("axios");
const format = require("date-format");
const getStreamingInfo = require("./streaming.js");

const basicPlaylist = {
  filename: "BASIC36.m3u",
  channelList: [
    // 1-10
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
    // 11-20
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
    getStreamingInfo("psi"),
    getStreamingInfo("new18"),
    getStreamingInfo("mono29soundtrack"),
    getStreamingInfo("cartoonclub"),
    // 21-30
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
    // 31-36
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
    ...basicPlaylist.channelList,

    // 37-40
    getStreamingInfo("foxmovies"),
    getStreamingInfo("foxactionmovies"),
    getStreamingInfo("foxfamilymovies"),
    getStreamingInfo("foxthai"),

    // 41-50
    getStreamingInfo("hbo"),
    getStreamingInfo("paramount"),
    getStreamingInfo("warner"),
    getStreamingInfo("axn"),
    getStreamingInfo("hitsmovie"),
    getStreamingInfo("ctb"),
    getStreamingInfo("history"),
    getStreamingInfo("history2"),
    getStreamingInfo("discoveryasia"),
    getStreamingInfo("trueplookpanya"),

    // 51-60
    getStreamingInfo("premier1"),
    getStreamingInfo("premier2"),
    getStreamingInfo("premier3"),
    getStreamingInfo("premier4"),
    getStreamingInfo("premier5"),
    getStreamingInfo("bein1"),
    getStreamingInfo("bein2"),
    getStreamingInfo("truesporthd"),
    getStreamingInfo("truesporthd2"),
    getStreamingInfo("truesport2"),

    // 61-70
    getStreamingInfo("premier1", 1, {
      channelName: "Premier HD1 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier2", 1, {
      channelName: "Premier HD2 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier3", 1, {
      channelName: "Premier HD3 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier1", 2, {
      channelName: "Premier HD1 Backup2",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier3", 2, {
      channelName: "Premier HD3 Backup2",
      groupName: "BACKUP",
    }),
    getStreamingInfo("bein1", 1, {
      channelName: "beIN Sports HD1 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("bein2", 1, {
      channelName: "beIN Sports HD2 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("cartoonnetwork"),
    getStreamingInfo("disneyxd"),
    getStreamingInfo("nickelodeon"),

    // 71-72
    getStreamingInfo("idstation"),
    getStreamingInfo("truexzyte"),
  ],
};

const iptvPlaylist = {
  filename: "IPTV36.m3u",
  channelList: [
    ...proPlaylist.channelList,

    // 73-80
    getStreamingInfo("ipcam", 0, { channelName: "CAM1 | Park-164" }),
    getStreamingInfo("ipcam", 1, { channelName: "CAM2 | Park-163" }),
    getStreamingInfo("ipcam", 2, { channelName: "CAM3 | Toilet-163" }),
    getStreamingInfo("ipcam", 3, { channelName: "CAM4 | Door-163" }),
    getStreamingInfo("ipcam", 4, { channelName: "CAM5 | Kitchen" }),
    getStreamingInfo("ipcam", 5, { channelName: "CAM6 | Floor-2" }),
    getStreamingInfo("ipcam", 6, { channelName: "CAM7 | Com-TV" }),
    getStreamingInfo("ipcam", 7, { channelName: "CAM8 | Com-Ying" }),
  ],
};

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
  for (let playlist of [basicPlaylist, proPlaylist, iptvPlaylist]) {
    let textStr = `#EXTM3U : IPTV Playlist from https://iptv36.my.to/ - Last Update ${format()}\n\n`;

    playlist.channelList.forEach((channel, index) => {
      let channelStr = `#EXTINF:-1 tvg-chno="${index + 1}" tvg-id="${
        channel.tvgId
      }" group-title="${channel.groupName}" tvg-logo-small="${
        channel.logo
      }" tvg-logo="${channel.logo}", ${channel.channelName}\n${
        channel.url
      }\n\n`;
      textStr = textStr + `${channelStr}`;
    });

    fs.writeFileSync(playlist.filename, textStr, "utf8");

    console.log(`Created playlist '${playlist.filename}'`);
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
  console.log(`Created EPG 'EPG.xml'`);
};

main();
