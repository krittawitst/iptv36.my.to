const axios = require('axios');

const defaultUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';
const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const streamingInfo = {
  nbt: {
    channelName: 'NBT',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    // tvgId: 'NBT2.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/nbt/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chnbt3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  thaipbs: {
    channelName: 'Thai PBS',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    // tvgId: 'ThaiPBS3.th',
    sources: [
      { url: 'https://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', suffix: 'FHD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chthaipbs3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  altv: {
    channelName: 'ALTV',
    logo: 'https://iptv36.my.to/logo/altv.png',
    sources: [
      { url: 'https://thaipbs-ujxrch.cdn.byteark.com/live/playlist.m3u8', suffix: 'FHD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ALTV/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  tv5: {
    channelName: 'TV5',
    logo: 'https://iptv36.my.to/logo/tv5.png',
    // tvgId: 'ThaiTV5HD1.th',
    sources: [
      { url: 'http://110.170.117.27:1935/apptv5hd1live/vdo-tv5hd1/playlist.m3u8', suffix: 'FHD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch5hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  tsports: {
    channelName: 'T-Sports',
    logo: 'https://iptv36.my.to/logo/tsports.png',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chtsport/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr5---sn-w5nuxa-c33lk-36.googleuservideo.com/doofootball_r2/tsports_480p/chunks.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  tptv: {
    channelName: 'TPTV',
    logo: 'https://iptv36.my.to/logo/tptv.png',
    sources: [
      {
        url: 'https://cdn-live.tpchannel.org/v1/0180e10a4a7809df73070d7d8760/0180e10adac40b8ed59433d5f3ce/TV_1080p.m3u8',
        suffix: 'FHD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/TPTV/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  tnn16: {
    channelName: 'TNN16',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    // tvgId: 'TNN16.th',
    sources: [
      { url: 'https://iptv36.netlify.app/api/true?channel=tnn16hd', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chtnn/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  jkn18: {
    channelName: 'JKN18',
    logo: 'https://iptv36.my.to/logo/jkn18.png',
    // tvgId: 'JKN18.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/newtv/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/jkn18/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    // tvgId: 'NationTV.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chnation/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/nation/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  workpoint: {
    channelName: 'Workpoint TV',
    logo: 'https://iptv36.my.to/logo/workpoint.png',
    // tvgId: 'Workpoint23.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chworkpoint/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  true4u: {
    channelName: 'True4U',
    logo: 'https://iptv36.my.to/logo/true4u.png',
    // tvgId: 'True4U.th',
    sources: [
      { url: 'https://iptv36.netlify.app/api/true?channel=true4uhd', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chtrue4u3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  gmm25: {
    channelName: 'GMM25',
    logo: 'https://iptv36.my.to/logo/gmm25.png',
    // tvgId: 'GMM25.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chgmm3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://streaming.livescorethai.net/iptv/hd-tsport2.stream/playlist.m3u8',
        options: { referer: 'https://freetvdd.com/' },
      },
    ],
  },

  ch8: {
    channelName: 'CH8',
    logo: 'https://iptv36.my.to/logo/ch8.png',
    // tvgId: 'ThaiChannel8.th',
    sources: [
      { url: 'https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch8/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    // tvgId: 'Mono29.th',
    sources: [
      { url: 'https://live-3.monomax.me/tv/mono29_1080p.m3u8', suffix: 'FHD' },
      {
        url: 'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080EN.stream/playlist.m3u8',
        suffix: 'Soundtrack FHD',
      },
      {
        url: 'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080TH.stream/playlist.m3u8',
        suffix: 'FHD',
      },
      { url: 'https://live-3.monomax.me/tv/mono29_720p.m3u8', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chmono29/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  mono29soundtrack: {
    channelName: 'MONO29 Soundtrack FHD',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    // tvgId: 'Mono29.th',
    sources: [
      'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080EN.stream/playlist.m3u8', // 720p
    ],
  },

  mcot: {
    channelName: 'MCOT',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    // tvgId: 'MCOTHD.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/mcothd/digitaltv/mcothd/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chmcothd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  one: {
    channelName: 'ONE HD',
    logo: 'https://iptv36.my.to/logo/one.png',
    // tvgId: 'One31.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/one31/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chonehd/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  thairath: {
    channelName: 'Thairath TV',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    // tvgId: 'ThairathTV32.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chthairath/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/thairathtv/digitaltv/thairath/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },

      { url: 'https://live.thairath.co.th/trtv2/playlist_720p/index.m3u8', suffix: 'HD' },
    ],
  },

  ch3: {
    channelName: 'CH3 HD',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    // tvgId: 'Channel3.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/3hd/digitaltv/3hd/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch3hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  amarin: {
    channelName: 'Amarin TV',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    // tvgId: 'Amarin34HD.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/amarin/digitaltv/amarin/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chamarin/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    // tvgId: 'BBTVChannel7.th',
    sources: [
      { url: 'https://live-cdn-hwc.ch7.com/livech7hd/HD_1080p.m3u8?vhost=streaming-hwc.ch7.com', suffix: 'FHD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch7hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  pptv: {
    channelName: 'PPTV HD',
    logo: 'https://iptv36.my.to/logo/pptv.png',
    // tvgId: 'PPTVHD36.th',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/pptv/digitaltv/pptv/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chpptvhd3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  cartoonclub: {
    channelName: 'Cartoon Club',
    logo: 'https://iptv36.my.to/logo/cartoonclub.png',
    sources: ['https://edge1-bkk.3bb.co.th:9443/cartoonLiveApp/cartoonLiveApp.stream/chunklist_w859044783.m3u8'],
  },

  tvb: {
    channelName: 'TVB Thai FHD',
    logo: 'https://iptv36.my.to/logo/tvb.png',
    sources: ['https://edge6a.v2h-cdn.com/tvb_thai/tvb_thai.stream/playlist.m3u8'],
  },

  news1: {
    channelName: 'NEWS1 FHD',
    logo: 'https://iptv36.my.to/logo/news1.png',
    sources: ['http://news1.live14.com/stream/news1_hi.m3u8', 'http://server1.streamssl.com/stream/news1_hi.m3u8'],
  },

  topnews: {
    channelName: 'Top News FHD',
    logo: 'https://images.topnews.co.th/2021/04/cropped-topnews-logo.png',
    sources: ['https://live.topnews.co.th/hls/topnews_b_720.m3u8'],
  },

  ctb: {
    channelName: 'CTB FHD',
    logo: 'https://sv1.picz.in.th/images/2022/10/11/pHGfHP.png',
    groupName: 'Movie',
    sources: ['http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8'],
  },

  truefilm1: {
    channelName: 'True Film 1',
    logo: 'https://cms.dmpcdn.com/livetv/2022/01/12/26308f80-7374-11ec-91d2-797a50c5a656_webp_320.png',
    tvgId: 'TrueFilm1.th',
    groupName: 'Movie',
    sources: [{ url: 'https://rr5---sn-w5nuxa-c33lk-37.googleuservideo.com/doofootball_r7/true-filmhd/playlist.m3u8' }],
  },

  truefilm2: {
    channelName: 'True Film 2',
    logo: 'https://cms.dmpcdn.com/livetv/2022/01/12/26725370-7374-11ec-91d2-797a50c5a656_webp_320.png',
    tvgId: 'TrueFilm2.th',
    groupName: 'Movie',
    sources: [
      { url: 'https://rr5---sn-w5nuxa-c33lk-37.googleuservideo.com/doofootball_r7/true-filmhd2/playlist.m3u8' },
    ],
  },

  bein1: {
    channelName: 'beIN Sports HD1',
    logo: 'https://iptv36.my.to/logo/bein1.png',
    tvgId: 'beINSports1Thailand.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/dooball2you/bein1/playlist.m3u8',
        options: { referer: 'https://dooball2you.com/' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/bein1/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  bein2: {
    channelName: 'beIN Sports HD2',
    logo: 'https://iptv36.my.to/logo/bein2.png',
    tvgId: 'beINSports2Thailand.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/dooball2you/bein2/playlist.m3u8',
        options: { referer: 'https://dooball2you.com/' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/bein2/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  premier1: {
    channelName: 'Premier HD1',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    tvgId: 'TruePremierFootball1.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD1_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/tpf1/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD1_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  premier2: {
    channelName: 'Premier HD2',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    tvgId: 'TruePremierFootball2.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD2_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/tpf2/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  premier3: {
    channelName: 'Premier HD3',
    logo: 'https://iptv36.my.to/logo/premier_hd3.png',
    tvgId: 'TruePremierFootball3.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD3_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/dooball2you/tpf3/playlist.m3u8',
        options: { referer: 'https://dooball2you.com/' },
      },
    ],
  },

  premier4: {
    channelName: 'Premier HD4',
    logo: 'https://iptv36.my.to/logo/premier_hd4.png',
    tvgId: 'TruePremierFootball4.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD4_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    tvgId: 'TruePremierFootball5.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD5_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  truesportshd1: {
    channelName: 'True Sports 1',
    logo: 'https://iptv36.my.to/logo/true_sports_hd.png',
    tvgId: 'TrueSports1.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/truesporthd1/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  truesportshd2: {
    channelName: 'True Sports 2',
    logo: 'https://iptv36.my.to/logo/true_sports_hd2.png',
    tvgId: 'TrueSports2.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/truesporthd2/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
      {
        url: 'https://streaming.livescorethai.net/iptv/hd-tsport2.stream/playlist.m3u8',
        options: { referer: 'https://freetvdd.com/' },
      },
      {
        url: 'https://sport.livedoomovie.com:4431/02_2sporthd2_720p/chunklist.m3u8',
        options: { referer: 'https://www.siammovie-hd.com/' },
      },
      {
        url: 'https://live.vip-streaming.com:30443/cloudstreaming/true-sport-2/playlist.m3u8',
        options: { referer: 'https://ufabetcompany.com' },
      },
    ],
  },

  ipcam: {
    channelName: 'CAM',
    logo: 'https://iptv36.my.to/logo/ipcam.png',
    groupName: 'IP Camera',
    sources: [
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=1&stream=1.sdp?', suffix: '01 Park-164' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=2&stream=1.sdp?', suffix: '02 Park-163' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=3&stream=1.sdp?', suffix: '03 Toilet-163' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=4&stream=1.sdp?', suffix: '04 Door-163' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=5&stream=1.sdp?', suffix: '05 Cat' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=6&stream=1.sdp?', suffix: '06 Kitchen' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=7&stream=1.sdp?', suffix: '07 Floor-2' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=8&stream=1.sdp?', suffix: '08 Electricity' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=9&stream=1.sdp?', suffix: '09 Com-TV' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=10&stream=1.sdp?', suffix: '10 Com-Ying' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=11&stream=1.sdp?', suffix: '11 Bed-1' },
      { url: 'rtsp://admin@192.168.1.200/user=admin&password=&channel=12&stream=1.sdp?', suffix: '12 Bed-2' },
    ],
  },
};

const dynamicallyAddStreamingUrlFromDailyMotion = async () => {
  console.log('Getting dynamic streaming url from dailymotion...');

  // config
  let config = [
    // [channelKey, channelNameSuffix, metaUrl]
    ['mcot', 'HD', 'https://www.dailymotion.com/player/metadata/video/x74wlgj'],
    ['workpoint', 'FHD', 'https://www.dailymotion.com/player/metadata/video/x6g9qjj'],
    ['nation', 'HD', 'https://www.dailymotion.com/player/metadata/video/x6eoldf'],
    ['topnews', '', 'https://www.dailymotion.com/player/metadata/video/x8aopdx'],
  ];

  let result = {};
  await Promise.all(
    config.map(async ([channelKey, channelNameSuffix, metaUrl]) => {
      let videoMetaData = {};
      try {
        const response = await axios.get(metaUrl);
        videoMetaData = response.data;
      } catch (error) {
        console.error(`Cannot extract videoMetaData for channel ${channelKey}`);
      }

      let livePlayListUrl = '';
      try {
        livePlayListUrl = videoMetaData.qualities.auto[0].url;
      } catch (error) {
        console.error(`Cannot get live playlist url for channel ${channelKey}`);
      }

      if (livePlayListUrl) {
        try {
          const response = await axios.get(livePlayListUrl);
          let rawPlayList = response.data;

          for (let i = 4; i >= 0; i--) {
            let regExp = new RegExp(`https:\/\/.*?\/live-[${i}]\.m3u8`);
            let regExpMatchArray = rawPlayList.match(regExp);

            if (regExpMatchArray) {
              if (!(channelKey in streamingInfo)) {
                console.error(`Not recognize channel ${channelKey}`);
                return;
              }
              let url = regExpMatchArray[0].replace('.nyc.', '.sg1.');
              streamingInfo[channelKey].sources.unshift({ url, suffix: channelNameSuffix });
              console.log(`  / added ${channelKey}`);
              break;
            }
          }
        } catch (error) {
          console.error(`Cannot extract playlist for channel ${channelKey}`);
          console.error(error);
        }
      }
    })
  );
};

const testUrl = async (url) => {
  // list of url that we will always not check
  if (
    url.includes('rtsp://') ||
    url.includes('livedoomovie') ||
    url.includes('livescorethai.net') ||
    url.includes('vip-streaming.com') ||
    url.includes('live-cdn-hwc.ch7.com') || // ch7
    url.includes('/api/true') || // tnn
    url.includes('huaweicdncloud.com') || // temporary
    url.includes('googleuservideo.com')
  ) {
    return true;
  }

  const maximumRetry = 2;
  let attempt = 0;
  let errorMessageArray = [];

  while (attempt < maximumRetry) {
    try {
      const response = await axios.get(url, { timeout: 5000 });
      return true;
    } catch (error) {
      let errorMsg = error.code || error.response.status;

      if (
        process.env.NETLIFY &&
        (url.includes('3bb.co.th') || url.includes('prsmedia') || url.includes('login.in.th'))
      ) {
        return true;
      }

      // if (errorMsg === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' && url.includes('inwstream.com')) {
      //   return true;
      // }

      if (process.env.NETLIFY && errorMsg === 451 && url.includes('byteark.com')) {
        return true;
      }

      errorMessageArray.push(errorMsg);
      await new Promise((resolve) => setTimeout(resolve, 300));
      attempt += 1;
    }
  }

  return Array.from(new Set(errorMessageArray)).join(' / ');
};

const generateValidUrl = async (streamingData) => {
  // find invalidUrlList
  let invalidUrlList = [];
  await Promise.all(
    streamingData.sources.map(async (url) => {
      let urlForTest = url;
      if (Array.isArray(url)) {
        urlForTest = url[1];
        console.log(urlForTest);
      } else if (typeof url === 'object') {
        urlForTest = url.url;
      }

      if (urlForTest === undefined) {
        console.log(url);
      }

      let result = await testUrl(urlForTest);
      if (result !== true) {
        console.log(`  X ${streamingData.channelName} - ${result}\n    ${urlForTest}`);
        invalidUrlList.push(urlForTest);
      }
    })
  );

  // create validUrlList
  streamingData.validUrlList = [];
  for (let i = 0; i < streamingData.sources.length; i++) {
    let url = streamingData.sources[i];
    let urlForTest = url;
    if (Array.isArray(url)) {
      urlForTest = url[1];
    } else if (typeof url === 'object') {
      urlForTest = url.url;
    }

    if (invalidUrlList.includes(urlForTest)) {
      continue;
    }
    streamingData.validUrlList.push(url);
  }
};

const getStreamingInfo = async (channelKey, skip = 0) => {
  let streamingData = streamingInfo[channelKey] || {};

  // check validUrlList available or not
  if (streamingData.validUrlList === undefined) {
    await generateValidUrl(streamingData);
  }

  let channelNameComponent = [streamingData.channelName];
  let logo = streamingData.logo;
  let groupName = streamingData.groupName || 'Thai Free TV';
  let tvgId = streamingData.tvgId || '';
  let sources = streamingData.validUrlList || [];

  let url = '';
  let options = '';
  if (sources.length > 0) {
    url = skip < sources.length ? sources[skip] : sources[0];
  } else {
    channelNameComponent.unshift('[เสีย]');
    url = skip < streamingData.sources.length ? streamingData.sources[skip] : streamingData.sources[0];
  }

  if (Array.isArray(url)) {
    channelNameComponent.push(url[0]);
    url = url[1];
  } else if (typeof url === 'object') {
    if (url.options) {
      options = url.options;
    }
    if (url.suffix) {
      channelNameComponent.push(url.suffix);
    }
    url = url.url;
  }

  // if (channelKey !== 'ipcam' && skip > 0) {
  //   channelNameComponent.push(`Backup${skip > 1 ? skip : ''}`);
  //   groupName = 'Backup';
  // }
  let channelName = channelNameComponent.join(' ');

  return { channelName, logo, groupName, tvgId, url, options };
};

module.exports = {
  getStreamingInfo,
  dynamicallyAddStreamingUrlFromDailyMotion,
};
