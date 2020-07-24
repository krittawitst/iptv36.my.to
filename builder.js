const fs = require("fs");
const getStreamingInfo = require("./streaming.js");

const basicPlaylist = {
  filename: "BASIC36.m3u",
  channelList: [
    getStreamingInfo("tv5"),
    getStreamingInfo("nbt"),
    getStreamingInfo("thaipbs"),
    getStreamingInfo("altv"),
    getStreamingInfo("nation", 1, { channelName: "Nation TV (Alt)" }),
    getStreamingInfo("pptv", 1, { channelName: "PPTV HD (Alt)" }),
    getStreamingInfo("ch7", 1, { channelName: "CH7 HD (Alt)" }),
    getStreamingInfo("ch8", 1, { channelName: "CH8 RS (Alt)" }),
    getStreamingInfo("mono29", 1, { channelName: "MONO29 HD (Alt)" }),
    getStreamingInfo("tptv"),
    getStreamingInfo("one", 1, { channelName: "ONE HD (Alt)" }),
    getStreamingInfo("thairath", 1, { channelName: "Thairath TV HD (Alt)" }),
    getStreamingInfo("ch3", 1, { channelName: "CH3 HD (Alt)" }),
    getStreamingInfo("amarin", 1, { channelName: "Amarin TV HD (Alt)" }),
    getStreamingInfo("workpoint", 1, { channelName: "Workpoint TV (Alt)" }),
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
    ...basicPlaylist.channelList,
    getStreamingInfo("bein1"),
    getStreamingInfo("bein2"),
  ],
};

for (let playlist of [basicPlaylist, proPlaylist]) {
  let textStr = `#EXTM3U : iptv36.my.to/${
    playlist.filename
  } - Last Update ${new Date().toLocaleString()}\n\n`;

  playlist.channelList.forEach((channel, index) => {
    let channelStr = `#EXTINF:-1 tvg-logo="${channel.logo}" group-title="${
      channel.groupName
    }", ${index + 1}. ${channel.channelName}\n${channel.url}\n\n`;
    textStr = textStr + `${channelStr}`;
  });

  fs.writeFileSync(playlist.filename, textStr, "utf8");
}
