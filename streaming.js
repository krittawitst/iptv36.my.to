const axios = require('axios');

const defaultUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78';
const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);

const streamingInfo = {
  nbt: {
    channelName: 'NBT',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    // tvgId: 'NBT2.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chnbt3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/nbt/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  thaipbs: {
    channelName: 'Thai PBS',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    // tvgId: 'ThaiPBS3.th',
    sources: [
      { url: 'https://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', suffix: 'FHD', priority: 35 },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chthaipbs3/index.m3u8',
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
        url: 'https://cdn6.goprimetime.info/feed/202306140918/ALTV/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  tv5: {
    channelName: 'TV5',
    logo: 'https://iptv36.my.to/logo/tv5.png',
    // tvgId: 'ThaiTV5HD1.th',
    sources: [
      {
        url: 'https://639bc5877c5fe.streamlock.net/tv5hdlive/tv5hdlive/playlist.m3u8',
        suffix: 'FHD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/ch5hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/5hd/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  tsports: {
    channelName: 'T-Sports',
    logo: 'https://iptv36.my.to/logo/tsports.png',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chtsport/index.m3u8',
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
      // {
      //   url: 'https://cdn-live.tpchannel.org/v1/0180e10a4a7809df73070d7d8760/0180e10adac40b8ed59433d5f3ce/TV_720p.m3u8',
      //   suffix: 'HD',
      // },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/TPTV/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  tnn16: {
    channelName: 'TNN16',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    // tvgId: 'TNN16.th',
    sources: [
      // { url: 'https://iptv36.netlify.app/api/true?channel=tnn16hd', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chtnn/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/tnn16/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  jkn18: {
    channelName: 'JKN18',
    logo: 'https://iptv36.my.to/logo/jkn18.png',
    // tvgId: 'JKN18.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/newtv/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      // {
      //   url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/jkn18/playlist.m3u8',
      //   options: { referer: 'https://www.livestream88.com/' },
      // },
    ],
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    // tvgId: 'NationTV.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chnation/index.m3u8',
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
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chworkpoint/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/workpoint/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
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
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chtrue4u3/index.m3u8',
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
        url: 'https://bcovlive-a.akamaihd.net/fb7ac9cc4e1140238e3077ffd29337fe/ap-southeast-1/6415628290001/profile_0/chunklist.m3u8',
        suffix: 'HD',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chgmm3/index.m3u8',
        options: { userAgent: defaultUserAgent },
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
        url: 'https://cdn6.goprimetime.info/feed/202306140918/ch8/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/ch8/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    // tvgId: 'Mono29.th',
    sources: [
      { url: 'https://live-3.monomax.me/tv/mono29_1440p.m3u8', suffix: 'FHD' },
      {
        url: 'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080TH.stream/playlist.m3u8',
        suffix: 'FHD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chmono29/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  mono29soundtrack: {
    channelName: 'MONO29 Soundtrack',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    tvgId: 'mono29.iptv36.my.to',
    sources: [
      {
        url: 'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080EN.stream/playlist.m3u8',
        suffix: 'FHD',
      },
    ],
  },

  mono29plus: {
    channelName: 'MONO29 PLUS',
    logo: 'https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/Mono29Plus_new.png',
    sources: [],
  },

  mcot: {
    channelName: 'MCOT',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    // tvgId: 'MCOTHD.th',
    sources: [
      {
        url: 'https://live-org-01-cdn.mcot.net/mcothd1080p_edge/smil:mcothd1080p.smil/playlist.m3u8',
        suffix: 'FHD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chmcothd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/mcothd/digitaltv/mcothd/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  one: {
    channelName: 'ONE',
    logo: 'https://iptv36.my.to/logo/one.png',
    // tvgId: 'One31.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chonehd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/one31/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  thairath: {
    channelName: 'Thairath TV',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    // tvgId: 'ThairathTV32.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chthairath/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
        priority: 25,
      },
      {
        url: 'https://streaming-web.thairath.co.th/hls/playlist_hi.m3u8',
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/thairathtv/digitaltv/thairath/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  ch3: {
    channelName: 'CH3',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    // tvgId: 'Channel3.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/ch3hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/3hd/digitaltv/3hd/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  amarin: {
    channelName: 'Amarin TV',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    // tvgId: 'Amarin34HD.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chamarin/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/amarin/digitaltv/amarin/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    // tvgId: 'BBTVChannel7.th',
    sources: [
      {
        url: 'https://live-cdn-hwc.ch7.com/livech7hd/HD_1080p.m3u8?vhost=streaming-hwc.ch7.com',
        suffix: 'FHD',
        priority: 25,
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/ch7hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
    ],
  },

  pptv: {
    channelName: 'PPTV',
    logo: 'https://iptv36.my.to/logo/pptv.png',
    // tvgId: 'PPTVHD36.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202306140918/chpptvhd3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/pptv/digitaltv/pptv/chunks.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  cartoonclub: {
    channelName: 'Cartoon Club',
    logo: 'https://iptv36.my.to/logo/cartoonclub.png',
    sources: [
      {
        url: 'https://edge1-bkk.3bb.co.th:9443/cartoonLiveApp/cartoonLiveApp.stream/chunklist_w859044783.m3u8',
      },
    ],
  },

  boomerang: {
    channelName: 'Boomerang',
    logo: 'https://iptv36.my.to/logo/boomerang.png',
    sources: [],
  },

  toonee: {
    channelName: 'Toonee',
    logo: 'https://iptv36.my.to/logo/toonee.png',
    sources: [],
  },

  mangkorn: {
    channelName: 'Mangkorn',
    logo: 'https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0159.png',
    sources: [],
  },

  tvb: {
    channelName: 'TVB Thai FHD',
    logo: 'https://iptv36.my.to/logo/tvb.png',
    sources: [
      {
        url: 'https://edge6a.v2h-cdn.com/tvb_thai/tvb_thai.stream/playlist.m3u8',
      },
    ],
  },

  news1: {
    channelName: 'NEWS1 FHD',
    logo: 'https://iptv36.my.to/logo/news1.png',
    sources: [
      {
        url: 'http://news1.live14.com/stream/news1_hi.m3u8',
      },
      { url: 'http://server1.streamssl.com/stream/news1_hi.m3u8' },
    ],
  },

  topnews: {
    channelName: 'Top News',
    logo: 'https://images.topnews.co.th/2021/04/cropped-topnews-logo.png',
    sources: [
      {
        url: 'https://live.topnews.co.th/hls/topnews_b_720.m3u8',
        suffix: 'HD',
      },
    ],
  },

  ctb: {
    channelName: 'CTB FHD',
    logo: 'https://sv1.picz.in.th/images/2022/10/11/pHGfHP.png',
    groupName: 'Movie',
    sources: [
      {
        url: 'http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8',
      },
    ],
  },

  hitsmovies: {
    channelName: 'HITS Movies',
    logo: 'https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/HitsMovie.png',
    groupName: 'Movie',
    sources: [],
  },

  // warnertv: {
  //   channelName: 'Warner TV',
  //   logo: 'https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0105.png',
  //   groupName: 'Movie',
  //   sources: [],
  // },

  paramount: {
    channelName: 'Paramount',
    logo: 'https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon//ParamountNetwork.png',
    groupName: 'Movie',
    sources: [],
  },

  truefilm1: {
    channelName: 'True Film 1',
    logo: 'https://cms.dmpcdn.com/livetv/2022/01/12/26308f80-7374-11ec-91d2-797a50c5a656_webp_320.png',
    tvgId: 'TrueFilm1.th',
    groupName: 'Movie',
    sources: [
      {
        url: 'https://rr5---sn-w5nuxa-c33lk-37.googleuservideo.com/doofootball_r7/true-filmhd/playlist.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  truefilm2: {
    channelName: 'True Film 2',
    logo: 'https://cms.dmpcdn.com/livetv/2022/01/12/26725370-7374-11ec-91d2-797a50c5a656_webp_320.png',
    tvgId: 'TrueFilm2.th',
    groupName: 'Movie',
    sources: [
      {
        url: 'https://rr5---sn-w5nuxa-c33lk-37.googleuservideo.com/doofootball_r7/true-filmhd2/playlist.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  bein1: {
    channelName: 'beIN Sports 1',
    logo: 'https://i.imgur.com/Vtk2cGI.png',
    // tvgId: 'beINSports1Thailand.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/dooball2you/bein1/playlist.m3u8',
        options: { referer: 'https://dooball2you.com/' },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/bein1/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  bein2: {
    channelName: 'beIN Sports 2',
    logo: 'https://i.imgur.com/vUJZSvs.png',
    // tvgId: 'beINSports2Thailand.th',
    groupName: 'Sport',
    sources: [],
  },

  bein3: {
    channelName: 'beIN Sports 3',
    logo: 'https://i.imgur.com/UYSMao3.png',
    // tvgId: 'beINSports3Thailand.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/dooball2you/bein2/playlist.m3u8',
        options: { referer: 'https://dooball2you.com/' },
        suffix: 'HD',
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/bein2/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
        suffix: 'HD',
      },
    ],
  },

  premier1: {
    channelName: 'Premier HD1',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    // tvgId: 'TruePremierFootball1.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD1_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com/' },
      },
      {
        url: 'https://rr3-ic3d-ndjcs.huaweicdncloud.com/livestream88/tpf1/playlist.m3u8',
        options: { referer: 'https://www.livestream88.com/' },
      },
    ],
  },

  premier2: {
    channelName: 'Premier HD2',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    // tvgId: 'TruePremierFootball2.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD2_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com/' },
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
    // tvgId: 'TruePremierFootball3.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD3_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com/' },
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
    // tvgId: 'TruePremierFootball4.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD4_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com/' },
      },
    ],
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    // tvgId: 'TruePremierFootball5.th',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD5_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com/' },
      },
    ],
  },

  truesportshd1: {
    channelName: 'True Sports 1',
    logo: 'https://iptv36.my.to/logo/true_sports_hd.png',
    // tvgId: 'TrueSports1.th',
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
    // tvgId: 'TrueSports2.th',
    groupName: 'Sport',
    sources: [
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

const generateAutoPriorityByFullChannelName = (channelName) => {
  if (channelName.endsWith('FHD')) {
    return 30;
  } else if (channelName.endsWith('HD')) {
    return 20;
  } else {
    return 10;
  }
};

const dynamicallyAddStreamingUrlFromAisPlay = async () => {
  console.log('Getting dynamic streaming url from AIS PLAY...');

  // config
  let config = [
    // [channelKey, channelNameSuffix, priority, code ]
    ['nbt', 'FHD', undefined, 'B0001'],
    ['thaipbs', 'FHD', undefined, 'B0014'],
    ['tv5', 'FHD', undefined, 'B0007'],
    ['tsports', '', undefined, 'B0129'],
    ['tnn16', '', undefined, 'V0053'],
    ['jkn18', '', undefined, 'B0010'],
    ['nation', '', undefined, 'B0021'],
    ['gmm25', '', undefined, 'B0019'],
    ['mcot', 'FHD', undefined, 'B0008'],
    ['one', 'FHD', undefined, 'B0012'],
    ['thairath', 'FHD', undefined, 'B0013'],
    ['ch3', 'FHD', undefined, 'B0003'],
    ['amarin', 'FHD', undefined, 'B0017'],
    ['ch7', 'FHD', undefined, 'B0018'],
    ['pptv', 'FHD', undefined, 'B0022'],
    ['topnews', 'FHD', undefined, 'V0033'],
    ['boomerang', 'FHD', undefined, 'V0104'],
    ['toonee', 'FHD', undefined, 'V0176'],
    ['cartoonclub', '', undefined, 'V0100'],
    ['mangkorn', 'FHD', undefined, 'V0159'],
  ];

  let kokowatvData;
  try {
    // const response = await axios.get('https://m.kokowatv.com/t.m3u', { headers: { 'User-Agent': 'Televizo' } });
    // kokowatvData = response.data;

    // const regExp = /^https:\/\/(?<ip>.+?)-rewriter.ais-vidnt.+\.m3u8\?(?<params>.+?)$/m;
    // const regExpExecArray = regExp.exec(kokowatvData);

    // if (regExpExecArray === null) {
    //   throw new Error('regExpExecArray is null');
    // }

    for (const [channelKey, channelNameSuffix, priority, code] of config) {
      // const url = `https://${regExpExecArray.groups.ip}-rewriter.ais-vidnt.com/ais/play/anevia/live/eds/${code}/HLS/${code}.m3u8?${regExpExecArray.groups.params}`;
      const url = `https://iptv36.netlify.app/api/aisplay/${channelKey}`;
      streamingInfo[channelKey].sources.unshift({
        url,
        suffix: channelNameSuffix,
        options: { referer: 'https://ais-vidnt.com/' },
        priority,
      });
      console.log(`  / added ${channelKey}`);
    }
  } catch (error) {
    console.log(`Cannot get data from kokowatv`);
    console.log(error);
  }
};

const dynamicallyAddStreamingUrlFromDailyMotion = async () => {
  console.log('Getting dynamic streaming url from DailyMotion...');

  const config = [
    // [channelKey, priority, metaUrl]
    ['nation', undefined, 'https://www.dailymotion.com/player/metadata/video/x6eoldf'],
  ];

  const suffixMapping = {
    4: 'FHD',
    3: 'HD',
    2: '',
    1: '',
    0: '',
  };

  await Promise.all(
    config.map(async ([channelKey, priority, metaUrl]) => {
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
              streamingInfo[channelKey].sources.unshift({ url, suffix: suffixMapping[i], priority });
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

const dynamicallyAddStreamingUrlFromByteArkNextData = async () => {
  console.log('Getting dynamic streaming url from ByteArk NextData...');

  const config = [
    // [channelKey, suffix, pageUrl, regExp]
    [
      'amarin',
      'FHD',
      'https://www.amarintv.com/live',
      /https:\/\/amarin-ks7jcc\.cdn\.byteark\.com\/fleetstream\/amarin-live\/index\.m3u8[^"]+/,
    ],
  ];

  await Promise.all(
    config.map(async ([channelKey, suffix, pageUrl, regExp]) => {
      let pageHtml = '';
      try {
        const response = await axios.get(pageUrl);
        pageHtml = response.data;
      } catch (error) {
        console.error(`Cannot extract pageHtml from ${channelKey}`);
        console.error(error);
      }

      let regExpMatchArray = pageHtml.match(regExp);
      if (regExpMatchArray) {
        let url = regExpMatchArray[0].replace(/\\u0026/g, '&');
        streamingInfo[channelKey].sources.unshift({ url, suffix });
        console.log(`  / added ${channelKey}`);
      } else {
        console.log(pageHtml);
      }
    })
  );
};

const dynamicallyAddStreamingUrlFromPPTV = async () => {
  console.log('Getting dynamic streaming url from PPTV...');

  let pageHtml = '';
  try {
    const response = await axios.get('https://www-live.pptvhd36.com/api/live_player/program/1');
    pageHtml = response.data;
  } catch (error) {
    console.error(`Cannot extract pageHtml from PPTV`);
    console.error(error);
  }

  let regExp = /https:\/\/pptv36-1tsjfj\.cdn\.byteark\.com\/live\/playlist\.m3u8[^']+/;
  let regExpMatchArray = pageHtml.match(regExp);

  if (regExpMatchArray) {
    let url = regExpMatchArray[0];
    streamingInfo.pptv.sources.unshift({ url, suffix: 'FHD' });
    console.log(`  / added PPTV`);
  }
};

const testUrl = async (url, options = {}) => {
  // list of url that we will always not check
  if (url.includes('rtsp://') || url.includes('livedoomovies.com') || url.includes('/api/aisplay')) {
    return true;
  }

  // list of url that always not check on Vercel
  if (
    process.env.VERCEL &&
    (url.includes('huaweicdncloud.com') || // Geo Restrict
      url.includes('ch7.com') || // Geo Restrict
      url.includes('rewriter.ais-vidnt.com') || // X-Base-Request-Check-Status: INCORRECT
      url.includes('vip-streaming.com') || // ECONNABORTED
      url.includes('cdn.mcot.net') || // Geo Restrict
      url.includes('pptv36-1tsjfj.cdn.byteark.com') || // Geo Restrict
      url.includes('3bb.co.th') ||
      url.includes('prsmedia') ||
      url.includes('dailymotion.com'))
  ) {
    return true;
  }

  const maximumRetry = 2;
  let attempt = 0;
  let errorMessageArray = [];

  while (attempt < maximumRetry) {
    let response;
    try {
      const headers = {};
      if (options.referer) headers.Referer = options.referer;
      if (options.userAgent) headers['User-Agent'] = options.userAgent;
      response = await axios.get(url, {
        timeout: 5000,
        headers,
      });

      return true;
    } catch (error) {
      let errorMsg = error.code || error.response.status;
      errorMessageArray.push(errorMsg);
      await new Promise((resolve) => setTimeout(resolve, 300));
      attempt += 1;
    }
  }

  return Array.from(new Set(errorMessageArray)).join(' / ');
};

const generateValidSources = async (streamingData) => {
  streamingData.validSources = [];

  await Promise.all(
    streamingData.sources.map(async (source) => {
      let result = await testUrl(source.url, source.options);
      if (result !== true) {
        // broken stream
        console.log(`  X ${streamingData.channelName} - ${result}\n    ${source.url}`);
      } else {
        if (source.priority === undefined) {
          // generate auto priority
          const channelNameComponent = [streamingData.channelName];
          if (source.suffix) {
            channelNameComponent.push(source.suffix);
          }
          const fullChannelName = channelNameComponent.join(' ');
          source.priority = generateAutoPriorityByFullChannelName(fullChannelName);
        }
        streamingData.validSources.push(source);
      }
    })
  );

  // sort by priority
  streamingData.validSources.sort((sourceA, sourceB) => sourceB.priority - sourceA.priority);
};

const getStreamingInfo = async (channelKey, skip = 0) => {
  let streamingData = streamingInfo[channelKey] || {};

  // check validSources available or not
  if (streamingData.validSources === undefined) {
    await generateValidSources(streamingData);
    // console.log(streamingData.validSources);
  }

  let channelNameComponent = [streamingData.channelName];
  let sources = streamingData.validSources || [];

  let source;
  if (sources.length > 0) {
    source = skip < sources.length ? sources[skip] : sources[0];
  } else {
    channelNameComponent.unshift('[เสีย]');
    source = skip < streamingData.sources.length ? streamingData.sources[skip] : streamingData.sources[0];
  }

  if (source === undefined) {
    console.log({ msg: 'error when getStreamingInfo', channelKey, skip, streamingData });
  }

  if (source.suffix) {
    channelNameComponent.push(source.suffix);
  }

  return {
    channelName: channelNameComponent.join(' '),
    logo: streamingData.logo,
    groupName: streamingData.groupName || 'Thai Free TV',
    tvgId: streamingData.tvgId || '',
    url: source.url,
    options: source.options,
  };
};

module.exports = {
  getStreamingInfo,
  dynamicallyAddStreamingUrlFromAisPlay,
  dynamicallyAddStreamingUrlFromDailyMotion,
  dynamicallyAddStreamingUrlFromPPTV,
  dynamicallyAddStreamingUrlFromByteArkNextData,
};
