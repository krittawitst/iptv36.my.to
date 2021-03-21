const basicPlaylist = {
  filename: 'BASIC36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-10
    ['tv5'],
    ['nbt'],
    ['thaipbs'],
    ['altv'],
    ['workpoint', 1],
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
    ['psi'],
    ['new18'],
    ['m'],
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
    ['foxmovies'],
    ['foxactionmovies'],
    ['foxthai'],
    ['truefilm'],

    // 41-50
    ['andflix'],
    ['ctb'],
    ['warnertv'],
    ['axn'],
    ['history'],
    ['history2'],
    ['discoveryasia'],
    ['bbcearth'],
    ['natgeo'],
    ['disney'],

    // 51-60
    ['premier1'],
    ['premier1', 1],
    ['premier2'],
    ['premier2', 1],
    ['premier3'],
    ['premier3', 1],
    ['premier4'],
    ['premier4', 1],
    ['premier5'],
    ['premier5', 1],
  ],
};

const iptvPlaylist = {
  filename: 'IPTV36.m3u',
  removeNoHWPlusDecoderWarning: true,
  channelList: [
    // 1-72
    ...proPlaylist.channelList,

    // 73-80
    ['ipcam'],
    ['ipcam', 1],
    ['ipcam', 2],
    ['ipcam', 3],
    ['ipcam', 4],
    ['ipcam', 5],
    ['ipcam', 6],
    ['ipcam', 7],
  ],
};

const allPlaylist = [basicPlaylist, proPlaylist];

module.exports = allPlaylist;
