const axios = require('axios');

const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const thDtvWithCurrentDate = `THAI DTV`;

const streamingInfo = {
  /* TH DTV */
  tv5: {
    channelName: 'TV5 HD',
    logo: 'https://iptv36.my.to/logo/tv5.png',
    urlList: [
      'http://110.170.117.27:1935/apptv5hd1live/vdo-tv5hd1/playlist.m3u8',
      'http://freelive.inwstream.com:1935/freelive-edge/5hd/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  nbt: {
    channelName: 'NBT',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    urlList: [
      ['HD', 'http://freelive2.inwstream.com:1935/freelive-edge/nbt/playlist.m3u8'],
      ['HD', 'http://live2.dootvde.com/live/50005_nbt.stream.smil/playist.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  thaipbs: {
    channelName: 'Thai PBS HD',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    urlList: [
      'https://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', //1080p
    ],
    groupName: thDtvWithCurrentDate,
  },

  altv: {
    channelName: 'ALTV HD',
    logo: 'https://iptv36.my.to/logo/altv.png',
    urlList: [
      'https://iptv36.netlify.app/altv.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  tptv: {
    channelName: 'TPTV',
    logo: 'https://iptv36.my.to/logo/tptv.png',
    urlList: [
      'http://freelive2.inwstream.com:1935/freelive-edge/tptv/playlist.m3u8',
      'https://cdn-edge.i-iptv.com/live3/91b1-ff25-f5ee-c27f-283a/playlist.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  tnn16: {
    channelName: 'TNN16',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    urlList: [
      ['HD', 'https://iptv36.netlify.app/api/true?channel=tnn16hd'], // 720p
      'http://freelive2.inwstream.com:1935/freelive-edge/tnn24/playlist.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  jkn18: {
    channelName: 'JKN18',
    logo: 'https://iptv36.my.to/logo/jkn18.jpg',
    urlList: [['HD', 'https://5f27aa1f6ef91.streamlock.net/jkncnbc/myStream/playlist.m3u8']],
    groupName: thDtvWithCurrentDate,
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    urlList: [
      'http://freelive2.inwstream.com:1935/freelive-edge/nation/playlist.m3u8',
      'http://live2.dootvde.com/live/50015_nation.stream.smil/playist.m3u8', // 720p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  workpoint: {
    channelName: 'Workpoint TV',
    logo: 'https://iptv36.my.to/logo/workpoint.png',
    urlList: [
      'http://freelive.inwstream.com:1935/freelive-edge/workpointtv/playlist.m3u8',
      'http://live2.dootvde.com/live/50016_workpoint_tv.stream.smil/playist.m3u8', // 720p upscale lost
    ],
    groupName: thDtvWithCurrentDate,
  },

  true4u: {
    channelName: 'True4U',
    logo: 'https://iptv36.my.to/logo/true4u.png',
    urlList: [
      ['HD', 'https://iptv36.netlify.app/api/true?channel=true4uhd'],
      'http://freelive.inwstream.com:1935/freelive-edge/true4u/playlist.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  gmm25: {
    channelName: 'GMM25',
    logo: 'https://iptv36.my.to/logo/gmm25.png',
    urlList: [
      [
        'HD',
        'https://stream-02.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_Y0MLq85WHoFm6sm2pR3SQw)/dm/3/x6rz4t7/s/live-2.m3u8',
      ],
      'http://freelive2.inwstream.com:1935/freelive-edge/gmmchannel/playlist.m3u8',
      'http://live2.dootvde.com/live/50018_gmm.stream.smil/playist.m3u8', // 720p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch8: {
    channelName: 'CH8',
    logo: 'https://iptv36.my.to/logo/ch8.png',
    urlList: [
      ['HD', 'https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8'], // 720p
      'http://freelive.inwstream.com:1935/freelive-edge/ch8/playlist.m3u8', // 720p
      // ['HD?', 'http://stream.rs.co.th/ch8-hi/index.m3u8'], // 360p too loud
    ],
    groupName: thDtvWithCurrentDate,
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    urlList: [
      // [
      //   'HD',
      //   'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080TH.stream/playlist.m3u8',
      // ], // 1080p
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720TH.stream/playlist.m3u8',
      'http://freelive.inwstream.com:1935/freelive-edge/mono29/playlist.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  mono29soundtrack: {
    channelName: 'MONO29 Soundtrack',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    urlList: [
      // 'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080EN.stream/playlist.m3u8', // 1080p
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720EN.stream/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  mcot: {
    channelName: 'MCOT HD',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    urlList: ['http://freelive2.inwstream.com:1935/freelive-edge/mcothd/playlist.m3u8'],
    groupName: thDtvWithCurrentDate,
  },

  one: {
    channelName: 'ONE HD',
    logo: 'https://iptv36.my.to/logo/one.png',
    urlList: [
      'https://iptv36.netlify.app/one.m3u8', // 720p
      'http://freelive2.inwstream.com:1935/freelive-edge/onehd/playlist.m3u8',
      'http://live2.dootvde.com/live/50022_one_hd.stream.smil/playist.m3u8', // 720p
      'https://one31-rlbwkq.cdn.byteark.com/live/playlist-hd.m3u8', // 240p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  thairath: {
    channelName: 'Thairath TV HD',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    urlList: [
      'https://thairathtv.cdn.byteark.com/fleetstream/live1/720p/index.m3u8',
      'http://freelive2.inwstream.com:1935/freelive-edge/thairahttvhd/playlist.m3u8',
      'https://live.thairath.co.th/trtv2/playlist_720p/index.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch3: {
    channelName: 'CH3',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    urlList: [
      ['HD', 'http://freelive2.inwstream.com:1935/freelive-edge/3hd/playlist.m3u8'],
      ['HD', 'http://live2.dootvde.com/live/50001_ch3.stream.smil/playist.m3u8'], // 720p
      ['HD', 'https://r4-sn-w5nuxa-o53d.googlevideocdn.com/digitaltv/ch3hd/playlist.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  amarin: {
    channelName: 'Amarin TV',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    urlList: [
      ['HD', 'http://freelive.inwstream.com:1935/freelive-edge/amarinhd/playlist.m3u8'], // 720p
      ['HD', 'http://live2.dootvde.com/live/50025_amarin_tv_hd.stream.smil/playist.m3u8'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    urlList: [
      ['HD', 'http://freelive2.inwstream.com:1935/freelive-edge/7hd/playlist.m3u8'],
      ['HD', 'https://bbtvalive-hw-aes.bugaboo.tv/liveedgech7/auto.smil/playlist.m3u8'], // auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  pptv: {
    channelName: 'PPTV',
    logo: 'https://iptv36.my.to/logo/pptv.png',
    urlList: [
      ['HD', 'http://freelive2.inwstream.com:1935/freelive-edge/pptvhd/playlist.m3u8'],
      ['HD', 'http://live2.dootvde.com/live/50026_pptv_hd.stream.smil/playist.m3u8'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  /* SPORT */
  bein1: {
    channelName: 'beIN Sports HD1',
    logo: 'https://iptv36.my.to/logo/bein1.png',
    urlList: [
      'https://laos-tech-live.b-cdn.net/uk-btsport1hd_720/index.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_epl1_720p/chunklist.m3u8'], // 720p
      // 'http://160.119.77.116:8081/iptv/epl-bein1.stream/playlist.m3u8',
      'http://103.208.24.234:1935/thaisport/epl-bein1.stream/playlist.m3u8', // 480p
    ],
    groupName: 'SPORT',
  },

  bein2: {
    channelName: 'beIN Sports HD2',
    logo: 'https://iptv36.my.to/logo/bein2.png',
    urlList: [
      'http://160.119.77.116:8081/iptv/epl-bein2.stream/playlist.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_epl2_720p/chunklist.m3u8'], // 720p
      // 'http://160.119.77.116:8081/iptv/epl-bein2.stream/playlist.m3u8',
      'http://103.208.24.234:1935/thaisport/epl-bein2.stream/playlist.m3u8', // 480p
    ],
    groupName: 'SPORT',
  },

  premier1: {
    channelName: 'Premier HD1',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    urlList: [
      ['[NO HW+]', 'http://77.83.117.60:8888/02_PremierHD1_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD1_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://sport.livedoomovie.com/02_PremierHD1_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier2: {
    channelName: 'Premier HD2',
    logo: 'https://iptv36.my.to/logo/premier_hd2.png',
    urlList: [
      ['[NO HW+]', 'http://77.83.117.60:8888/02_PremierHD2_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD2_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://sport.livedoomovie.com/02_PremierHD1_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier3: {
    channelName: 'Premier HD3',
    logo: 'https://iptv36.my.to/logo/premier_hd3.png',
    urlList: [
      ['[NO HW+]', 'http://77.83.117.60:8888/02_PremierHD3_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD3_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier4: {
    channelName: 'Premier HD4',
    logo: 'https://iptv36.my.to/logo/premier_hd4.png',
    urlList: [
      ['[NO HW+]', 'http://77.83.117.60:8888/02_PremierHD4_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD4_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    urlList: [
      ['[NO HW+]', 'http://77.83.117.60:8888/02_PremierHD5_720p/chunklist.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD5_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  truesporthd: {
    channelName: 'True Sports HD',
    logo: 'https://iptv36.my.to/logo/true_sports_hd.png',
    urlList: ['https://iptv36.netlify.app/api/livestream88'],
    groupName: 'SPORT',
  },

  truesporthd2: {
    channelName: 'True Sports HD2',
    logo: 'https://iptv36.my.to/logo/true_sports_hd2.png',
    urlList: [
      'https://nj2yx-gbi9-cdf5.googlecdncontent.com/livestream88_sport/tpf1/playlist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  // truesport2: {
  //   channelName: 'True Sports 2',
  //   logo: 'https://iptv36.my.to/logo/truesports2.png',
  //   urlList: [
  //     // 'http://160.119.77.116:8081/iptv/sd-tsport2.stream/playlist.m3u8', // 576p
  //   ],
  //   groupName: 'SPORT',
  // },

  /* CARTOON */
  cartoonclub: {
    channelName: 'Cartoon Club',
    logo: 'https://iptv36.my.to/logo/cartoonclub.png',
    urlList: [
      'http://edge4-bkk.3bb.co.th:1935/CartoonClub_Livestream/cartoonclub_480P.stream/playlist.m3u8',
    ],
    groupName: 'CARTOON',
  },

  toonee: {
    channelName: 'Toonee',
    logo: 'https://cms.dmpcdn.com/livetv/2020/09/03/4c26a640-ede0-11ea-bbdd-775d9efe2958_320.png',
    urlList: [
      'http://freelive2.inwstream.com:1935/freelive-edge/toonee/playlist.m3u8',
      'http://916309128f3e.sn.mynetname.net:1935/aslive/toonee/chunklist.m3u8',
    ],
    groupName: 'CARTOON',
  },

  cartoonnetwork: {
    channelName: 'Cartoon Network HD',
    logo: 'https://iptv36.my.to/logo/cnhd.png',
    urlList: ['https://r4-sn-w5nuxa-o53d.googlevideocdn.com/kids/cnhd/playlist.m3u8'],
    groupName: 'CARTOON',
  },

  disneyxd: {
    channelName: 'Disney XD',
    logo: 'https://iptv36.my.to/logo/disneyxd.png',
    urlList: [],
    groupName: 'CARTOON',
  },

  disney: {
    channelName: 'Disney Channel',
    logo: 'https://iptv36.my.to/logo/disney.png',
    urlList: [],
    groupName: 'CARTOON',
  },

  nickelodeon: {
    channelName: 'nickelodeon',
    logo: 'https://iptv36.my.to/logo/nick.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  truesparkplay: {
    channelName: 'True Spark Play',
    logo: 'https://iptv36.my.to/logo/truesparkplay.png',
    urlList: [],
    groupName: 'CARTOON',
  },

  truesparkjump: {
    channelName: 'True Spark Jump',
    logo: 'https://iptv36.my.to/logo/truesparkjump.png',
    urlList: [],
    groupName: 'CARTOON',
  },

  /* ENTERTAINMENT */
  axn: {
    channelName: 'AXN HD',
    logo: 'https://iptv36.my.to/logo/axn.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  bbcearth: {
    channelName: 'BBC Earth HD',
    logo: 'https://iptv36.my.to/logo/bbc_earth.jpg',
    urlList: [],
    groupName: 'NEWS & DOCS',
  },

  // bbclifestyle: {
  //   channelName: 'BBC Lifestyle HD',
  //   logo: 'https://iptv36.my.to/logo/bbc_lifestyle.png',
  //   urlList: ['https://doofootball.livestream-cdn.com/iptv/sd-bbclifestyle.stream/chunks.m3u8'],
  //   groupName: 'NEWS & DOCS',
  // },

  blueantent: {
    channelName: 'Blue Ant ENT HD',
    logo: 'https://iptv36.my.to/logo/blueantent.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  ctb: {
    channelName: 'CTB',
    logo: 'https://iptv36.my.to/logo/ctb.png',
    urlList: ['http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  fwmov: {
    channelName: 'FW Movie',
    logo: 'https://www.inwiptv.com/postor/20200512164154fwmov.jpg',
    urlList: [
      'http://freelive.inwstream.com:1935/freelive-edge/fwmov_fw-iptv.stream/playlist.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  fwsov: {
    channelName: 'FW Sov',
    logo: 'https://www.inwiptv.com/postor/20200512165346fwsov.jpg',
    urlList: [
      'http://freelive.inwstream.com:1935/freelive-edge/fwsov_fw-iptv.stream/playlist.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  fwtoon: {
    channelName: 'FW Toon',
    logo: 'https://www.inwiptv.com/postor/20200512162950fw%20teletoon(1).jpg',
    urlList: [
      'http://freelive.inwstream.com:1935/freelive-edge/fwtoon_fw-iptv.stream/playlist.m3u8',
    ],
    groupName: 'CARTOON',
  },

  boomerang: {
    channelName: 'Boomerang HD',
    logo: 'https://images.squarespace-cdn.com/content/v1/51326bd6e4b060819b0f6458/1364592995062-4AA4OXDSNPEFX2KISVBP/Boomerang_Logo.jpg?format=1500w',
    urlList: ['http://freelive2.inwstream.com:1935/freelive-edge/boomerang/playlist.m3u8'],
    groupName: 'CARTOON',
  },

  discoveryasia: {
    channelName: 'Discovery Asia HD',
    logo: 'https://iptv36.my.to/logo/discoveryasia.png',
    urlList: ['http://77.83.117.60:8888/02_DiscoveryHDWorld/chunklist.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  foxmovies: {
    channelName: 'FOX Movies HD',
    logo: 'https://iptv36.my.to/logo/foxmovies.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/02_FoxMoviesTH_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  foxactionmovies: {
    channelName: 'FOX Action Movies HD',
    logo: 'https://iptv36.my.to/logo/foxactionmovies.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  andflix: {
    channelName: '&flix HD',
    logo: 'https://alltimetrends.com/wp-content/uploads/2020/07/and-flix-hd.jpg',
    urlList: ['https://y5w8j4a9.ssl.hwcdn.net/andflixhd/tracks-v1a1/index.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  moviehits: {
    channelName: 'True Movie Hits',
    logo: 'https://alltimetrends.com/wp-content/uploads/2020/07/and-flix-hd.jpg',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  foxfamilymovies: {
    channelName: 'Fox Family Movies HD',
    logo: 'https://iptv36.my.to/logo/foxfamilymovies.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovies.com/02_FoxFamilyHD_TH_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  foxlife: {
    channelName: 'Fox Life HD',
    logo: 'https://iptv36.my.to/logo/foxlife.png',
    // tvgId: 'foxlife.iptv36.my.to',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  foxthai: {
    channelName: 'FOX Thai HD',
    logo: 'https://iptv36.my.to/logo/foxthai.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/02_FoxThai_TH_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  hbo: {
    channelName: 'HBO',
    logo: 'https://iptv36.my.to/logo/hbo.png',
    urlList: ['https://dootvthai-hd.com/cmd/ThaiDreambox/hbo/hbohd/playlist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  history: {
    channelName: 'History HD',
    logo: 'https://iptv36.my.to/logo/history.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/02_HISTORYHD_720p/chunklist.m3u8']],
    groupName: 'NEWS & DOCS',
  },

  history2: {
    channelName: 'History2 HD',
    logo: 'https://iptv36.my.to/logo/history2.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/02_H2HD_720p/chunklist.m3u8']],
    groupName: 'NEWS & DOCS',
  },

  hitsmovies: {
    channelName: 'Hits Movies HD',
    logo: 'https://iptv36.my.to/logo/hitsmovies.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/02_HITSMOVIE_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  idstation: {
    channelName: 'ID Station',
    logo: 'https://iptv36.my.to/logo/idstation.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  ipcam: {
    channelName: 'CAM',
    logo: 'https://iptv36.my.to/logo/cctv.png',
    urlList: [
      ['1 | Park-164', 'rtsp://admin@192.168.1.211:554/mpeg4/ch1/main/av_stream'],
      ['2 | Park-163', 'rtsp://admin@192.168.1.212:554/mpeg4/ch1/main/av_stream'],
      ['3 | Toilet-163', 'rtsp://admin@192.168.1.203:554/mpeg4/ch1/main/av_stream'],
      ['4 | Door-163', 'rtsp://admin@192.168.1.204:554/mpeg4/ch1/main/av_stream'],
      ['5 | Kitchen', 'rtsp://admin@192.168.1.205:554/mpeg4/ch1/main/av_stream'],
      ['6 | Floor-2', 'rtsp://admin@192.168.1.206:554/mpeg4/ch1/main/av_stream'],
      ['7 | Com-TV', 'rtsp://admin@192.168.1.207:554/mpeg4/ch1/main/av_stream'],
      ['8 | Com-Ying', 'rtsp://admin@192.168.1.208:554/mpeg4/ch1/main/av_stream'],
    ],
    groupName: 'IP CAM',
  },

  m: {
    channelName: 'M Channel',
    logo: 'https://iptv36.my.to/logo/m.png',
    urlList: [
      'http://www.m-channel.com:1935/live/my_stream.sdp/chunklist_w1568234806.m3u8',
      'https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  monoplus: {
    channelName: 'MONO+ HD',
    logo: 'https://iptv36.my.to/logo/monoplus.png',
    urlList: [
      'https://edge4-bkk.3bb.co.th:9443/MonoPlus_LiveHLS/monoplusLive_HLS1080p.stream/chunklist.m3u8', // 1080p50
    ],
    groupName: 'ENTERTAINMENT',
  },

  natgeo: {
    channelName: 'NAT Geo HD',
    logo: 'https://iptv36.my.to/logo/natgeo.png',
    urlList: [],
    groupName: 'NEWS & DOCS',
  },

  samrujlok: {
    channelName: 'Samrujlok HD',
    logo: 'https://iptv36.my.to/logo/samrujlok.png',
    urlList: ['https://cdnlive.goprimetime.info/feed/LC8/playlist.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  news1: {
    channelName: 'NEWS1',
    logo: 'https://iptv36.my.to/logo/news1.png',
    urlList: ['http://news1.live14.com/stream/news1_hi.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  paramount: {
    channelName: 'Paramount HD',
    logo: 'https://iptv36.my.to/logo/paramount.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  psi: {
    channelName: 'PSI Saradee HD',
    logo: 'https://iptv36.my.to/logo/psi.png',
    urlList: ['https://61022bdc19cd4.streamlock.net/edgelivepsi/PSIHD.stream_720p/playlist.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  truefilm: {
    channelName: 'True Film HD',
    logo: 'https://iptv36.my.to/logo/truefilm.png',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  truethaifilm: {
    channelName: 'True Thai Film HD',
    logo: 'https://cmsimgservices.dmpcdn.com/v1/resize?url=https%3A%2F%2Fcms.dmpcdn.com%2Flivetv%2F2018%2F12%2F17%2F6422ad5a-27f3-4d0e-b0d0-d811c1e652e0.png&w=100&h=75',
    urlList: [
      'https://r4-sn-w5nuxa-o53d.googlevideocdn.com/entertainment/truethaifilm/playlist.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  trueplookpanya: {
    channelName: 'True Plook Panya',
    logo: 'https://iptv36.my.to/logo/trueplookpanya.png',
    urlList: [],
    groupName: 'NEWS & DOCS',
  },

  // truexzyte: {
  //   channelName: 'True X-Zyte',
  //   logo: 'https://iptv36.my.to/logo/truexzyte.png',
  //   urlList: [],
  //   groupName: 'ENTERTAINMENT',
  // },

  tvb: {
    channelName: 'TVB Thai HD',
    logo: 'https://iptv36.my.to/logo/tvb.png',
    urlList: [
      'https://edge6a.v2h-cdn.com/RE_HD/smil:TVB_HD_ABR.smil/playlist.m3u8', // 1080p
      'https://edge6a.v2h-cdn.com:443/appt7/TDramaTV.stream_720p/iptv-ton.m3u8', // 720p
      'https://edge6a.v2h-cdn.com/m2a7/TDramaTV.stream_720p/playlist.m3u8', // 720p
    ],
    groupName: 'ENTERTAINMENT',
  },

  voice: {
    channelName: 'Voice TV HD',
    logo: 'https://iptv36.my.to/logo/voice.png',
    urlList: ['https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/playlist.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  topnews: {
    channelName: 'Top News HD',
    logo: 'https://images.topnews.co.th/2021/04/cropped-topnews-logo.png',
    urlList: [
      'https://live.topnews.co.th/hls/topnews_b_720.m3u8',
      'https://live.topnews.co.th/hls/topnews_a_1080.m3u8',
    ],
    groupName: 'NEWS & DOCS',
  },

  warnertv: {
    channelName: 'Warner TV HD',
    logo: 'https://iptv36.my.to/logo/warnertv.png',
    urlList: ['http://203.154.243.89:1205', 'http://203.154.177.124:8899/live/ch12/playlist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },
};

const dynamicallyAddStreamingUrlFromDailyMotion = async () => {
  console.log('Getting dynamic streaming url from dailymotion...');

  // config
  let config = [
    // [channelKey, channelNameSuffix, pageUrl, appendUrlToBottom=false]
    ['workpoint', 'HD', 'https://www.dailymotion.com/player/metadata/video/x6g9qjj'],
    ['nation', 'HD', 'https://www.dailymotion.com/player/metadata/video/x6eoldf'],
    ['mcot', '', 'https://www.dailymotion.com/player/metadata/video/x74wlgj'],
    ['amarin', 'HD', 'https://www.dailymotion.com/player/metadata/video/x7z8zsu'],
    // ['ch8', 'HD', 'https://www.dailymotion.com/player/metadata/video/x84ukk7'],
    // geo restricted
    // ['gmm25', 'HD', 'https://www.dailymotion.com/player/metadata/video/k7KnbDPalNddQqrJq1J'],
  ];

  let result = {};
  await Promise.all(
    config.map(async ([channelKey, channelNameSuffix, pageUrl, appendUrlToBottom = false]) => {
      let videoMetaData = {};
      try {
        const response = await axios.get(pageUrl);
        videoMetaData = response.data;
      } catch (error) {
        console.error(`Cannot extract playlist for channel ${channelKey}`);
        console.error(error);
      }

      let livePlayListUrl = '';
      try {
        livePlayListUrl = videoMetaData.qualities.auto[0].url;
      } catch (error) {
        console.error(`Cannot get live playlist url for channel ${channelKey}`);
        console.error(error);
      }

      if (livePlayListUrl) {
        try {
          const response = await axios.get(livePlayListUrl);
          let rawPlayList = response.data;

          for (let i = 4; i >= 1; i--) {
            let regExp = new RegExp(`https:\/\/.*?\/live-[${i}]\.m3u8`);
            let regExpMatchArray = rawPlayList.match(regExp);

            if (regExpMatchArray) {
              if (!(channelKey in streamingInfo)) {
                console.error(`Not recognize channel ${channelKey}`);
                return;
              }
              let url = regExpMatchArray[0].replace('.nyc.', '.sg1.');
              if (appendUrlToBottom) {
                streamingInfo[channelKey].urlList.push([channelNameSuffix, url]);
              } else {
                streamingInfo[channelKey].urlList.unshift([channelNameSuffix, url]);
              }
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
    url.includes('203.154.243.89') || // warner
    url.includes('27.254.142.207') || // m channel
    url.includes('streamlock.net') || // jkn
    url.includes('bbtvalive-hw-aes.bugaboo.tv') // ch7
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
        (url.includes('3bb.co.th') ||
          url.includes('prsmedia') ||
          url.includes('login.in.th') ||
          url.includes('r4-sn-w5nuxa-o53d.googlevideocdn.com') ||
          url.includes('/api/true?channel=true4uhd'))
      ) {
        return true;
      }

      if (
        errorMsg === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' &&
        url.includes('freelive.inwstream.com')
      ) {
        return true;
      }

      if (
        process.env.NETLIFY &&
        errorMsg === 'ECONNRESET' &&
        (url.includes('stream.rs.co.th') || url.includes('bugaboo.tv'))
      ) {
        return true;
      }

      if (process.env.NETLIFY && errorMsg === 'ECONNABORTED' && url.includes('live2.dootvde.com')) {
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
    streamingData.urlList.map(async (url) => {
      let urlForTest = url;
      if (Array.isArray(url)) {
        urlForTest = url[1];
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

  // for (let i = 0; i < streamingData.urlList.length; i++) {
  //   let url = streamingData.urlList[i];
  //   let urlForTest = url;
  //   if (Array.isArray(url)) {
  //     urlForTest = url[1];
  //   }

  //   let result = await testUrl(urlForTest);
  //   if (result !== true) {
  //     console.log(`  X ${streamingData.channelName} - ${result}\n    ${urlForTest}`);
  //     invalidUrlList.push(urlForTest);
  //   } else {
  //     console.log(`  / ${streamingData.channelName} - ${result}\n    ${urlForTest}`);
  //   }
  // }

  // create validUrlList
  streamingData.validUrlList = [];
  for (let i = 0; i < streamingData.urlList.length; i++) {
    let url = streamingData.urlList[i];
    let urlForTest = url;
    if (Array.isArray(url)) {
      urlForTest = url[1];
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
  let logo = streamingData.logo || 'https://iptv36.my.to/logo/blank.png';
  let groupName = streamingData.groupName || 'Other';
  let tvgId = streamingData.tvgId || '';
  let urlList = streamingData.validUrlList || [];

  let url = '';
  if (urlList.length > 0) {
    url = skip < urlList.length ? urlList[skip] : urlList[0];
  } else {
    channelNameComponent.unshift('[เสีย]');
    url =
      skip < streamingData.urlList.length ? streamingData.urlList[skip] : streamingData.urlList[0];
  }

  if (Array.isArray(url)) {
    channelNameComponent.push(url[0]);
    url = url[1];
  }

  if (channelKey !== 'ipcam' && skip > 0) {
    channelNameComponent.push(`Backup${skip > 1 ? skip : ''}`);
  }
  let channelName = channelNameComponent.join(' ');

  return { channelName, logo, groupName, tvgId, url };
};

module.exports = {
  getStreamingInfo,
  dynamicallyAddStreamingUrlFromDailyMotion,
  // dynamicallyAddStreamingUrlByDetectM3U8Url,
};
