const playlistV1 = {
  filename: 'playlist-v1.m3u',
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
    ['mono29, 1'],
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
    ['mcot'],
    ['mcot', 1],

    // 31-40
    ['one'],
    ['one', 1],
    ['thairath'],
    ['thairath', 1],
    ['ch3'],
    ['ch3', 1],
    ['amarin'],
    ['amarin', 1],
    ['ch7'],
    ['ch7', 1],

    // 41-45
    ['pptv'],
    ['pptv', 1],
    ['tvb'],
    ['news1'],
    ['topnews'],
  ],
};

const playlistV3 = {
  filename: 'playlist-v3.m3u',
  channelList: [
    // 1-47
    ...playlistV2.channelList,

    // 48-50
    ['ctb'],
    ['fwmov'],
    ['fwtoon'],

    // 51
    ['bein1'],
    ['bein1', 1],
    ['bein2'],
    ['bein2', 1],

    ['premier1'],
    ['premier1', 1],
    ['premier2'],
    ['premier2', 1],
    ['premier3'],
    ['premier4'],
    ['premier5'],
    ['truesportshd1'],
    ['truesportshd2'],
  ],
};

const allPlaylist = [playlistV1, playlistV2, playlistV3];

module.exports = allPlaylist;
