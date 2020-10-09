const basicPlaylist = {
  filename: "BASIC36.m3u",
  channelList: [
    // 1-10
    ["tv5"],
    ["nbt"],
    ["thaipbs"],
    ["altv"],
    ["workpoint", 1],
    ["pptv", 1],
    ["ch7", 1],
    ["ch8", 1],
    ["mono29", 1],
    ["tptv"],

    // 11-20
    ["one", 1],
    ["thairath", 1],
    ["ch3", 1],
    ["amarin", 1],
    ["gmm25", 1],
    ["tnn16"],
    ["psi"],
    ["new18"],
    ["mono29soundtrack"],
    ["cartoonclub"],

    // 21-30
    ["voice"],
    ["nation"],
    ["workpoint"],
    ["true4u"],
    ["gmm25"],
    ["tvb"],
    ["ch8"],
    ["monoplus"],
    ["mono29"],
    ["mcot"],

    // 31-36
    ["one"],
    ["thairath"],
    ["ch3"],
    ["amarin"],
    ["ch7"],
    ["pptv"],
  ],
};

const proPlaylist = {
  filename: "PRO36.m3u",
  channelList: [
    // 1-36
    ...basicPlaylist.channelList,

    // 37-40
    ["foxmovies"],
    ["foxactionmovies"],
    ["foxfamilymovies"],
    ["foxthai"],

    // 41-50
    ["hbo"],
    ["paramount"],
    ["warnertv"],
    ["axn"],
    ["hitsmovies"],
    ["ctb"],
    ["history"],
    ["history2"],
    ["discoveryasia"],
    ["trueplookpanya"],

    // 51-60
    ["premier1"],
    ["premier2"],
    ["premier3"],
    ["premier4"],
    ["premier5"],
    ["bein1"],
    ["bein2"],
    ["truesporthd"],
    ["truesporthd2"],
    ["truesport2"],

    // 61-70
    ["premier1", 1],
    ["premier2", 1],
    ["premier3", 1],
    ["premier1", 2],
    ["premier3", 2],
    ["bein1", 1],
    ["bein2", 1],
    ["cartoonnetwork"],
    ["disneyxd"],
    ["nickelodeon"],

    // 71-72
    ["idstation"],
    ["truexzyte"],
  ],
};

const iptvPlaylist = {
  filename: "IPTV36.m3u",
  channelList: [
    // 1-72
    ...proPlaylist.channelList,

    // // 73-80
    // ["ipcam", 0], // { channelName: "CAM1 | Park-164" }],
    // ["ipcam", 1], // { channelName: "CAM2 | Park-163" }],
    // ["ipcam", 2], // { channelName: "CAM3 | Toilet-163" }],
    // ["ipcam", 3], // { channelName: "CAM4 | Door-163" }],
    // ["ipcam", 4], // { channelName: "CAM5 | Kitchen" }],
    // ["ipcam", 5], // { channelName: "CAM6 | Floor-2" }],
    // ["ipcam", 6], // { channelName: "CAM7 | Com-TV" }],
    // ["ipcam", 7], // { channelName: "CAM8 | Com-Ying" }],
  ],
};

const allPlaylist = [basicPlaylist, proPlaylist, iptvPlaylist];

module.exports = allPlaylist;
