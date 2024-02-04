const playlistV1 = {
  filename: 'playlist-v1.m3u',
  channelList: [
    // 1-10
    ['boomerang'],
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
    ['ctb'],
    ['amarin', 1],
    ['ch7', 1],
    ['tnn16'],
    ['tnn16', 1],
    ['jkn18'],
    ['tvb'],
    ['true4u', 1],

    // 21-30
    ['nation'],
    ['nation', 1],
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
  channelList: [
    // 1-10
    ['nbt'],
    ['nbt', 1],
    ['thaipbs'],
    ['thaipbs', 1],
    ['altv'],
    ['altv', 1],
    ['tv5'],
    ['tsports'],
    ['tptv'],
    ['tptv', 1],

    // 11-20
    ['tnn16'],
    ['tnn16', 1],
    ['jkn18'],
    ['nation'],
    ['nation', 1],
    ['workpoint'],
    ['true4u'],
    ['true4u', 1],
    ['gmm25'],
    ['gmm25', 1],

    // 21-30
    ['ch8'],
    ['ch8', 1],
    ['mono29'],
    ['mono29', 1],
    ['mono29', 2],
    ['mono29soundtrack'],
    ['mcot'],
    ['mcot', 1],
    ['one'],
    ['one', 1],

    // 31-40
    ['thairath'],
    ['thairath', 1],
    ['ch3'],
    ['amarin'],
    ['amarin', 1],
    ['ch7'],
    ['ch7', 1],
    ['pptv'],
    ['pptv', 1],
    ['tvb'],

    // 41-43
    ['ctb'],
    ['cartoonclub'],
    ['boomerang'],
  ],
};

const playlistV3 = {
  filename: 'playlist-v3.m3u',
  channelList: [
    ...playlistV2.channelList,

    ['samrujlok'],
    ['lovenature'],
    ['truexzyte'],
    ['hbo'],

    ['bein1'],
    ['bein1', 1],
    ['bein2'],
    ['bein3'],

    ['premier1'],
    ['premier2'],
    ['premier2', 1],
    ['premier3'],
    ['premier4'],
    ['premier5'],
    ['truesportshd1'],
    ['truesportshd1', 1],
    ['truesportshd2'],
    ['truesportshd2', 1],
  ],
};

const playlistV4 = {
  filename: 'playlist-v4.m3u',
  channelList: [['pptv']],
};

const allPlaylist = [playlistV1, playlistV2, playlistV3];
// const allPlaylist = [playlistV4];

module.exports = allPlaylist;
