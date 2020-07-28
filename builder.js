const fs = require("fs");
const getStreamingInfo = require("./streaming.js");

const basicPlaylist = {
  filename: "BASIC36.m3u",
  channelList: [
    getStreamingInfo("tv5"),
    getStreamingInfo("nbt"),
    getStreamingInfo("thaipbs"),
    getStreamingInfo("altv"),
    getStreamingInfo("nation", 1, {
      channelName: "Nation TV (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("pptv", 1, {
      channelName: "PPTV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch7", 1, {
      channelName: "CH7 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch8", 1, {
      channelName: "CH8 RS (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("mono29", 1, {
      channelName: "MONO29 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("tptv"),
    getStreamingInfo("one", 1, {
      channelName: "ONE HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("thairath", 1, {
      channelName: "Thairath TV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch3", 1, {
      channelName: "CH3 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("amarin", 1, {
      channelName: "Amarin TV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("workpoint", 1, {
      channelName: "Workpoint TV (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("tnn16"),
    getStreamingInfo("news1"),
    getStreamingInfo("new18"),
    getStreamingInfo("psi"),
    getStreamingInfo("ch2"),
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
    getStreamingInfo("truefilm"),
    getStreamingInfo("hbo"),
    getStreamingInfo("foxmovies"),
    getStreamingInfo("foxactionmovies"),
    getStreamingInfo("foxthai"),
    ...basicPlaylist.channelList.slice(9, 10),
    getStreamingInfo("premier1"),
    getStreamingInfo("premier2"),
    getStreamingInfo("premier3"),
    getStreamingInfo("premier4"),
    getStreamingInfo("premier5"),
    ...basicPlaylist.channelList.slice(15, 36),
    getStreamingInfo("bein1"),
    getStreamingInfo("bein2"),
    getStreamingInfo("truesporthd"),
    getStreamingInfo("truesporthd2"),
    getStreamingInfo("livesky", 4, { channelName: "Live SKY 1 HD" }),
    getStreamingInfo("livesky", 1, { channelName: "Live SKY 2 HD" }),
    getStreamingInfo("livesky", 2, { channelName: "Live SKY 3 HD" }),
    getStreamingInfo("livesky", 3, { channelName: "Live SKY 4 HD" }),
    getStreamingInfo("warner"),
    getStreamingInfo("axn"),
    getStreamingInfo("blueantent"),
    getStreamingInfo("natgeo"),
    getStreamingInfo("bbcearth"),
    getStreamingInfo("history"),
    getStreamingInfo("one", 1, {
      channelName: "ONE HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("thairath", 1, {
      channelName: "Thairath TV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch3", 1, {
      channelName: "CH3 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("amarin", 1, {
      channelName: "Amarin TV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch7", 1, {
      channelName: "CH7 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("pptv", 1, {
      channelName: "PPTV HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("workpoint", 1, {
      channelName: "Workpoint TV (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("ch8", 1, {
      channelName: "CH8 RS (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("mono29", 1, {
      channelName: "MONO29 HD (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
    getStreamingInfo("nation", 1, {
      channelName: "Nation TV (Alt)",
      groupName: "THAI DIGITAL TV 2",
    }),
  ],
};

const iptvPlaylist = {
  filename: "IPTV36.m3u",
  channelList: [
    ...proPlaylist.channelList.slice(0, 50),
    getStreamingInfo("ipcam", 1, { channelName: "CAM1 | Park-164" }),
    getStreamingInfo("ipcam", 2, { channelName: "CAM2 | Park-163" }),
    getStreamingInfo("ipcam", 3, { channelName: "CAM3 | Toilet-163" }),
    getStreamingInfo("ipcam", 4, { channelName: "CAM4 | Door-163" }),
    getStreamingInfo("ipcam", 5, { channelName: "CAM5 | Kitchen" }),
    getStreamingInfo("ipcam", 6, { channelName: "CAM6 | Floor-2" }),
    getStreamingInfo("ipcam", 7, { channelName: "CAM7 | Com-TV" }),
    getStreamingInfo("ipcam", 7, { channelName: "CAM8 | Com-Ying" }),
    getStreamingInfo("ctb"),
    getStreamingInfo("up1"),
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
