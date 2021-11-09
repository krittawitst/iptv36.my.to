const basicPlaylist = {
  filename: 'BASIC36.m3u',
  removeNoHWPlusDecoderWarning: false,
  channelList: [
    // 1-10
    ['workpoint', 1],
    ['nbt'],
    ['thaipbs'],
    ['altv'],
    ['tv5'],
    ['pptv', 1],
    ['ch7', 1],
    ['ch8', 1],
    ['mono29', 1],
    ['tptv'],

    // 11-20
    ['one', 1],
    ['thairath', 1],
    ['ch3', 1],
    ['amarin', 1],
    ['gmm25', 1],
    ['tnn16'],
    ['topnews'],
    ['jkn18'],
    ['psi'],
    ['cartoonclub'],

    // 21-30
    ['voice'],
    ['nation'],
    ['workpoint'],
    ['true4u'],
    ['gmm25'],
    ['tvb'],
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

const proPlaylist = {
  filename: 'PRO36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-36
    ...basicPlaylist.channelList,

    // 37-40
    ['ctb'],
    ['fwmov'],
    ['fwsov'],
    ['warnertv'],

    // 41-50
    ['fwtoon'],
    ['toonee'],
    ['boomerang'],
    ['truesporthd'],
    ['truesporthd2'],
  ],
};

const iptvPlaylist = {
  filename: 'IPTV36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-60
    ...proPlaylist.channelList,

    // ['ipcam'],
    // ['ipcam', 1],
    // ['ipcam', 2],
    // ['ipcam', 3],
    // ['ipcam', 4],
    // ['ipcam', 5],
    // ['ipcam', 6],
    // ['ipcam', 7],
  ],
};

const allPlaylist = [basicPlaylist, proPlaylist, iptvPlaylist];

module.exports = allPlaylist;
