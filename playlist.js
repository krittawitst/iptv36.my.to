const basicPlaylist = {
  filename: 'BASIC36.m3u',
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
    ['mono29soundtrack'],
    ['cartoonclub'],

    // 21-30
    ['voice'],
    ['nation'],
    ['workpoint'],
    ['true4u'],
    ['gmm25'],
    ['tvb'],
    ['ch8'],
    ['monoplus'],
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
  channelList: [
    // 1-36
    ...basicPlaylist.channelList,

    // 37-40
    ['foxmovies'],
    ['foxactionmovies'],
    ['foxfamilymovies'],
    ['foxlife'],

    // 41-50
    ['foxthai'],
    ['warnertv'],
    ['paramount'],
    ['hbo'],
    ['axn'],
    ['blueantent'],
    ['natgeo'],
    ['history'],
    ['history2'],
    ['discoveryasia'],

    // 51-60
    ['premier1'],
    ['premier2'],
    ['premier3'],
    ['premier4'],
    ['premier5'],
    ['bein1'],
    ['bein2'],
    ['premier1', 2],
    ['premier3', 2],
    ['truesport2'],

    // 61-70
    ['premier1', 1],
    ['premier2', 1],
    ['premier3', 1],
    ['truesporthd'],
    ['truesporthd2'],
    ['bein1', 1],
    ['bein2', 1],
    ['cartoonnetwork'],
    ['disneyxd'],
    ['nickelodeon'],

    // 71-72
    ['truesparkplay'],
    ['truesparkjump'],
  ],
};

const iptvPlaylist = {
  filename: 'IPTV36.m3u',
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

const allPlaylist = [basicPlaylist, proPlaylist, iptvPlaylist];

module.exports = allPlaylist;
