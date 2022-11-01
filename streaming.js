const axios = require('axios');

const defaultUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';
const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const streamingInfo = {
  nbt: {
    channelName: 'NBT',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    tvgId: 'NBT2.th',
    sources: [
      { url: 'https://freelive.inwstream.com:1936/freelive-edge/nbt/playlist.m3u8', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chnbt3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/nbt/playlist.m3u8', suffix: 'HD' },
    ],
  },

  thaipbs: {
    channelName: 'Thai PBS',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    tvgId: 'ThaiPBS3.th',
    sources: [
      { url: 'https://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', suffix: 'FHD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chthaipbs3/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      { url: 'https://freelive.inwstream.com:1936/freelive-edge/thaipbs/playlist.m3u8', suffix: 'HD' },
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
    tvgId: 'ThaiTV5HD1.th',
    sources: [
      { url: 'http://110.170.117.27:1935/apptv5hd1live/vdo-tv5hd1/playlist.m3u8', suffix: 'FHD' },
      { url: 'https://freelive.inwstream.com:1936/freelive-edge/5hd/playlist.m3u8', suffix: 'HD' },
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
      'https://rr5---sn-w5nuxa-c33lk-34.googleuservideo.com/doofootball_r2/tsports_480p/playlist.m3u8',
    ],
  },

  tptv: {
    channelName: 'TPTV',
    logo: 'https://iptv36.my.to/logo/tptv.png',
    sources: [
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/tptv/playlist.m3u8' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/TPTV/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      { url: 'https://freelive.inwstream.com:1936/freelive-edge/tptv/playlist.m3u8' },
    ],
  },

  tnn16: {
    channelName: 'TNN16',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    tvgId: 'TNN16.th',
    sources: [
      { url: 'https://iptv36.netlify.app/api/true?channel=tnn16hd', suffix: 'HD' },
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/tnn24/playlist.m3u8', suffix: 'SD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chtnn/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'SD',
      },
    ],
  },

  jkn18: {
    channelName: 'JKN18',
    logo: 'https://iptv36.my.to/logo/jkn18.png',
    tvgId: 'JKN18.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/newtv/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      { url: 'https://iptv36.netlify.app/api/trueid' },
    ],
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    tvgId: 'NationTV.th',
    sources: [
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/nation/playlist.m3u8', suffix: 'SD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chnation/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'SD',
      },
    ],
  },

  workpoint: {
    channelName: 'Workpoint TV',
    logo: 'https://iptv36.my.to/logo/workpoint.png',
    tvgId: 'Workpoint23.th',
    sources: [
      'https://freelive.inwstream.com:1936/freelive-edge/workpointtv/playlist.m3u8',
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chworkpoint/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  true4u: {
    channelName: 'True4U',
    logo: 'https://iptv36.my.to/logo/true4u.png',
    tvgId: 'True4U.th',
    sources: [
      { url: 'https://iptv36.netlify.app/api/true?channel=true4uhd', suffix: 'HD' },
      { url: 'http://freelive.inwstream.com:1935/freelive-edge/true4u/playlist.m3u8' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chtrue4u3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
    ],
  },

  gmm25: {
    channelName: 'GMM25',
    logo: 'https://iptv36.my.to/logo/gmm25.png',
    tvgId: 'GMM25.th',
    sources: [
      {
        url: 'https://stream-01.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_YoaNL1MfayYXHyeysO1Q5uCVC98PeOyiqAHVmcGIz3k)/dm/3/x6rz4t7/s/live-4.m3u8',
        suffix: 'FHD',
      },
      'https://freelive.inwstream.com:1936/freelive-edge/gmmchannel/playlist.m3u8',
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chgmm3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'http://freelive2.inwstream.com:1935/freelive-edge/gmmchannel/playlist.m3u8',
    ],
  },

  ch8: {
    channelName: 'CH8',
    logo: 'https://iptv36.my.to/logo/ch8.png',
    tvgId: 'ThaiChannel8.th',
    sources: [
      { url: 'https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8', suffix: 'HD' },
      { url: 'http://freelive.inwstream.com:1935/freelive-edge/ch8/playlist.m3u8' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch8/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'SD',
      },
    ],
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    tvgId: 'Mono29.th',
    sources: [
      { url: 'https://live-3.monomax.me/tv/mono29_1080p.m3u8', suffix: 'FHD' },
      { url: 'https://live-3.monomax.me/tv/mono29_720p.m3u8', suffix: 'HD' },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chmono29/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080TH.stream/playlist.m3u8',
      'http://freelive.inwstream.com:1935/freelive-edge/mono29/playlist.m3u8',
    ],
  },

  mono29soundtrack: {
    channelName: 'MONO29 Soundtrack',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    tvgId: 'Mono29.th',
    sources: [
      'https://edge4-bkk.3bb.co.th:9443/Stream_HLSMONO29_1080P/mono29hls_1080EN.stream/playlist.m3u8', // 720p
    ],
  },

  mcot: {
    channelName: 'MCOT',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    tvgId: 'MCOTHD.th',
    sources: [
      {
        url: 'https://freelive.inwstream.com:1936/freelive-edge/mcothd/playlist.m3u8',
        suffix: 'HD',
      },
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chmcothd/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      {
        url: 'http://freelive2.inwstream.com:1935/freelive-edge/mcothd/playlist.m3u8',
        suffix: 'HD',
      },
    ],
  },

  one: {
    channelName: 'ONE HD',
    logo: 'https://iptv36.my.to/logo/one.png',
    tvgId: 'One31.th',
    sources: [
      'http://freelive2.inwstream.com:1935/freelive-edge/onehd/playlist.m3u8',
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chonehd/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'https://freelive.inwstream.com:1936/freelive-edge/onehd/playlist.m3u8',
    ],
  },

  thairath: {
    channelName: 'Thairath TV',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    tvgId: 'ThairathTV32.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chthairath/index.m3u8',
        options: { userAgent: defaultUserAgent },
        suffix: 'HD',
      },
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/thairahttvhd/playlist.m3u8', suffix: 'HD' },
      { url: 'https://live.thairath.co.th/trtv2/playlist_720p/index.m3u8', suffix: 'HD' },
    ],
  },

  ch3: {
    channelName: 'CH3 HD',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    tvgId: 'Channel3.th',
    sources: [
      'http://freelive2.inwstream.com:1935/freelive-edge/3hd/playlist.m3u8',
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/ch3hd/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'https://freelive.inwstream.com:1936/freelive-edge/3hd/playlist.m3u8',
    ],
  },

  amarin: {
    channelName: 'Amarin TV HD',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    tvgId: 'Amarin34HD.th',
    sources: [
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chamarin/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'http://freelive2.inwstream.com:1935/freelive-edge/amarinhd/playlist.m3u8', // 720p
      'https://freelive.inwstream.com:1936/freelive-edge/amarinhd/playlist.m3u8', // 720p
    ],
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    tvgId: 'BBTVChannel7.th',
    sources: [
      { url: 'https://live-cdn-hwc.ch7.com/livech7hd/HD_1080p.m3u8?vhost=streaming-hwc.ch7.com', suffix: 'FHD' },
      { url: 'http://freelive2.inwstream.com:1935/freelive-edge/7hd/playlist.m3u8', suffix: 'HD' },
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
    tvgId: 'PPTVHD36.th',
    sources: [
      'http://freelive2.inwstream.com:1935/freelive-edge/pptvhd/playlist.m3u8',
      {
        url: 'https://cdn6.goprimetime.info/feed/202205171929/chpptvhd3/index.m3u8',
        options: { userAgent: defaultUserAgent },
      },
      'https://freelive.inwstream.com:1936/freelive-edge/pptvhd/playlist.m3u8',
    ],
  },

  cartoonclub: {
    channelName: 'Cartoon Club',
    logo: 'https://iptv36.my.to/logo/cartoonclub.png',
    sources: ['https://edge1-bkk.3bb.co.th:9443/cartoonLiveApp/cartoonLiveApp.stream/chunklist_w859044783.m3u8'],
  },

  tvb: {
    channelName: 'TVB Thai HFD',
    logo: 'https://iptv36.my.to/logo/tvb.png',
    sources: [
      'https://edge2z.v2h-cdn.com/tvb_thai/tvb_thai.stream/playlist.m3u8', // 1080p
    ],
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
    logo: 'https://iptv36.my.to/logo/ctb.png',
    sources: ['http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8'],
  },

  fwmov: {
    channelName: 'FW Movie HD',
    logo: 'https://img.inwiptv.net/postor/20200512164154fwmov.jpg',
    sources: ['http://freelive.inwstream.com:1935/freelive-edge/fwmov_fw-iptv.stream/playlist.m3u8'],
  },

  fwsov: {
    channelName: 'FW Sov HD',
    logo: 'https://img.inwiptv.net/postor/20200512165346fwsov.jpg',
    sources: ['http://freelive.inwstream.com:1935/freelive-edge/fwsov_fw-iptv.stream/playlist.m3u8'],
  },

  fwtoon: {
    channelName: 'FW Toon HD',
    logo: 'https://img.inwiptv.net/postor/20200512162950fw%20teletoon(1).jpg',
    sources: ['https://freelive.inwstream.com:1936/freelive-edge/fwtoon_fw-iptv.stream/playlist.m3u8'],
  },

  boomerang: {
    channelName: 'Boomerang HD',
    logo: 'https://iptv36.my.to/logo/boomerang.png',
    sources: [
      'http://freelive2.inwstream.com:1935/freelive-edge/boomerang/playlist.m3u8',
      'https://freelive.inwstream.com:1936/freelive-edge/boomerang/playlist.m3u8',
    ],
  },

  toonee: {
    channelName: 'Toonee',
    logo: 'https://iptv36.my.to/logo/toonee.png',
    sources: [
      'https://freelive.inwstream.com:1936/freelive-edge/toonee/playlist.m3u8',
      'http://freelive2.inwstream.com:1935/freelive-edge/toonee/playlist.m3u8',
    ],
  },

  bein1: {
    channelName: 'beIN Sports 1',
    logo: 'https://iptv36.my.to/logo/bein1.png',
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
    logo: 'https://iptv36.my.to/logo/bein2.png',
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
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD1_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
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
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD2_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD2_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  premier3: {
    channelName: 'Premier HD3',
    logo: 'https://iptv36.my.to/logo/premier_hd3.png',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD3_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD3_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  premier4: {
    channelName: 'Premier HD4',
    logo: 'https://iptv36.my.to/logo/premier_hd4.png',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD4_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD4_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
    ],
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    groupName: 'Sport',
    sources: [
      {
        url: 'https://sport.livedoomovies.com:4431/02_PremierHD5_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
      },
      {
        url: 'https://219.livedoomovies.com:4431/02_PremierHD5_720p/chunklist.m3u8',
        options: { referer: 'https://www.doomovie-hd.com' },
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
    [
      'gmm25',
      'FHD',
      'https://www.dailymotion.com/player/metadata/video/k4jJqAW0V5pVYnrJq1J?embedder=https%3A%2F%2Fwww.oned.net%2F&geo=1&player-id=x8c5c&locale=th&dmV1st=541934AD5E2E5DDC1DAA4B2A1E6A9A37&dmTs=592812&is_native_app=0',
    ],
    ['workpoint', 'FHD', 'https://www.dailymotion.com/player/metadata/video/x6g9qjj'],
    ['nation', 'FHD', 'https://www.dailymotion.com/player/metadata/video/x6eoldf'],
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
    url.includes('livedoomovies.com') ||
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

      if (errorMsg === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' && url.includes('inwstream.com')) {
        return true;
      }

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
