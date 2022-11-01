const playlistV1 = {
  filename: 'playlist-v1.m3u',
  removeNoHWPlusDecoderWarning: false,
  channelList: [
    // 1-10
    ['workpoint', 1],
    ['nbt'],
    ['thaipbs'],
    ['altv'],
    ['tv5'],
    ['pptv', 1],
    ['tsports'],
    ['ch8', 1],
    ['cartoonclub'],
    ['tptv'],

    // 11-20
    ['one', 1],
    ['thairath', 1],
    ['ch3', 1],
    ['amarin', 1],
    ['ch7', 1],
    ['tnn16'],
    ['tnn16', 1],
    ['jkn18'],
    ['tvb'],
    ['news1'],

    // 21-30
    ['topnews'],
    ['nation'],
    ['workpoint'],
    ['true4u'],
    ['gmm25'],
    ['gmm25', 1],
    ['ch8'],
    ['mono29soundtrack'],
    ['mono29'],
    ['mcot'],

    // 31-36
    ['one'],
    ['thairath'],
    ['ch3'],
    ['amarin'],
    ['ch7'],
    ['pptv'],
  ],
};

const playlistV2 = {
  filename: 'playlist-v2.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-10
    ['nbt'],
    ['nbt', 1],
    ['thaipbs'],
    ['thaipbs', 1],
    ['altv'],
    ['altv', 1],
    ['tv5'],
    ['tv5', 1],
    ['tsports'],
    ['tsports', 1],

    // 11-20
    ['tptv'],
    ['tptv', 1],
    ['tnn16'],
    ['tnn16', 1],
    ['jkn18'],
    ['jkn18', 1],
    ['nation'],
    ['nation', 1],
    ['workpoint'],
    ['workpoint', 1],

    // 21-30
    ['true4u'],
    ['true4u', 1],
    ['gmm25'],
    ['gmm25', 1],
    ['ch8'],
    ['ch8', 1],
    ['mono29'],
    ['mono29', 1],
    ['mono29', 2],
    ['mono29soundtrack'],

    // 31-40
    ['mcot'],
    ['mcot', 1],
    ['one'],
    ['one', 1],
    ['thairath'],
    ['thairath', 1],
    ['ch3'],
    ['ch3', 1],
    ['amarin'],
    ['amarin', 1],

    // 41-47
    ['ch7'],
    ['ch7', 1],
    ['pptv'],
    ['pptv', 1],
    ['tvb'],
    ['news1'],
    ['topnews'],
  ],
};

const proPlaylist = {
  filename: 'PRO36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-45
    ...playlistV2.channelList,

    // 46-4
    ['ctb'],
    ['fwmov'],
    ['fwsov'],
    ['fwtoon'],
    ['toonee'],

    ['bein1'],
    ['bein1', 1],
    ['bein2'],
    ['bein2', 1],

    ['premier1'],
    ['premier1', 1],
    ['premier2'],
    ['premier2', 1],
    ['premier3'],
    ['premier3', 1],
    ['premier4'],
    ['premier4', 1],

    // 51-60
    ['premier5'],
    ['premier5', 1],
  ],
};

const iptvPlaylist = {
  filename: 'IPTV36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-60
    ...proPlaylist.channelList,

    ['ipcam'],
    ['ipcam', 1],
    ['ipcam', 2],
    ['ipcam', 3],
    ['ipcam', 4],
    ['ipcam', 5],
    ['ipcam', 6],
    ['ipcam', 7],
    ['ipcam', 8],
    ['ipcam', 9],
    ['ipcam', 10],
    ['ipcam', 11],
  ],
};

const allPlaylist = [playlistV1, playlistV2, proPlaylist, iptvPlaylist];

module.exports = allPlaylist;
