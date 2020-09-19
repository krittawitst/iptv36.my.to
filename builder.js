const fs = require("fs");
const getStreamingInfo = require("./streaming.js");

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
      channelName: "MONO29 HD Soundtrack",
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
    getStreamingInfo("m"),
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
    getStreamingInfo("warner"),
    getStreamingInfo("truefilm"),
    getStreamingInfo("foxmovies"),
    getStreamingInfo("foxactionmovies"),
    getStreamingInfo("foxthai"),
    ...basicPlaylist.channelList.slice(9, 10),
    getStreamingInfo("premier1"),
    getStreamingInfo("premier2", 2),
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
    getStreamingInfo("premier1", 1, {
      channelName: "Premier HD1 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier2", 1, {
      channelName: "Premier HD2 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("premier3", 2, {
      channelName: "Premier HD3 Backup",
      groupName: "BACKUP",
    }),
    getStreamingInfo("axn"),
    getStreamingInfo("blueantent"),
    getStreamingInfo("ctb"),
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
      channelName: "MONO29 HD Soundtrack",
      groupName: "BACKUP",
    }),
    getStreamingInfo("new18", 1, {
      channelName: "NEW 18 HD Backup",
      groupName: "BACKUP",
    }),
  ],
};

const iptvPlaylist = {
  filename: "IPTV36.m3u",
  channelList: [
    ...proPlaylist.channelList,
    getStreamingInfo("ipcam", 0, { channelName: "CAM1 | Park-164" }),
    getStreamingInfo("ipcam", 1, { channelName: "CAM2 | Park-163" }),
    getStreamingInfo("ipcam", 2, { channelName: "CAM3 | Toilet-163" }),
    getStreamingInfo("ipcam", 3, { channelName: "CAM4 | Door-163" }),
    getStreamingInfo("ipcam", 4, { channelName: "CAM5 | Kitchen" }),
    getStreamingInfo("ipcam", 5, { channelName: "CAM6 | Floor-2" }),
    getStreamingInfo("ipcam", 6, { channelName: "CAM7 | Com-TV" }),
    getStreamingInfo("ipcam", 7, { channelName: "CAM8 | Com-Ying" }),
    getStreamingInfo("cartoonnetwork"),
    getStreamingInfo("hbo"),
    getStreamingInfo("tvb"),
  ],
};

for (let playlist of [basicPlaylist, proPlaylist, iptvPlaylist]) {
  let textStr = `#EXTM3U : iptv36.my.to/${
    playlist.filename
  } - Last Update ${new Date().toISOString()}\n\n`;

  playlist.channelList.forEach((channel, index) => {
    let channelStr = `#EXTINF:-1 tvg-logo="${channel.logo}" group-title="${
      channel.groupName
    }", ${index + 1}. ${channel.channelName}\n${channel.url}\n\n`;
    textStr = textStr + `${channelStr}`;
  });

  fs.writeFileSync(playlist.filename, textStr, "utf8");
}

console.log("Exported");
