const axios = require('axios');

const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const thDtvWithCurrentDate = `TH DTV ${currentBkkDatetimeStr}`;

const streamingInfo = {
  /* TH DTV */
  tv5: {
    channelName: 'TV5 HD',
    logo: 'https://iptv36.my.to/logo/tv5.png',
    urlList: [
      'http://110.170.117.27:1935/apptv5hd1live/vdo-tv5hd1/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  nbt: {
    channelName: 'NBT HD',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-nbt.stream/chunks.m3u8']],
    groupName: thDtvWithCurrentDate,
  },

  thaipbs: {
    channelName: 'Thai PBS HD',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    urlList: [
      'https://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', //1080p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-tpbs.stream/chunks.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  altv: {
    channelName: 'ALTV HD',
    logo: 'https://iptv36.my.to/logo/altv.png',
    urlList: [
      'https://thaipbs-ujxrch.cdn.byteark.com/live/playlist_1080p/index.m3u8', // 1080p
      'https://iptv36.my.to/altv.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  tptv: {
    channelName: 'TPTV',
    logo: 'https://iptv36.my.to/logo/tptv.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/sd-tptv.stream/chunks.m3u8'],
      'http://49.231.66.85:1935/live/tptv/playlist.m3u8', // 240p
    ],
    groupName: thDtvWithCurrentDate,
  },

  tnn16: {
    channelName: 'TNN16 HD',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    urlList: [
      'https://iptv36.netlify.app/api/true?channel=tnn16hd', // 720p
      ['[NO HW+]', 'http://160.119.77.117/iptv/sd-tnn24.stream/chunks.m3u8'],
      'http://27.254.130.56/live01/chsd_TNN_5.m3u8?p=st', // 720p upscale hang/slow
    ],
    groupName: thDtvWithCurrentDate,
  },

  new18: {
    channelName: 'NEW 18',
    logo: 'https://iptv36.my.to/logo/new18.png',
    urlList: [
      [
        'HD',
        'https://stream-04.sg1.dailymotion.com/sec(SCEOt4M5U0fVbrIPRLL549JgEPGIVXt0hT22tgQHEvo)/dm/3/x7kx5i7/s/live-3.m3u8',
      ], // 1080p
      ['[NO HW+]', 'http://160.119.77.117/iptv/sd-new.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/newtv/index.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    urlList: [
      'http://live2.dootvde.com/live/50015_nation.stream.smil/playist.m3u8', // 720p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  workpoint: {
    channelName: 'Workpoint TV',
    logo: 'https://iptv36.my.to/logo/workpoint.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-workpoint.stream/chunks.m3u8'],
      'http://live2.dootvde.com/live/50016_workpoint_tv.stream.smil/playist.m3u8', // 720p upscale lost
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chworkpoint/index.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  true4u: {
    channelName: 'True4U HD',
    logo: 'https://iptv36.my.to/logo/true4u.png',
    urlList: [
      'https://iptv36.netlify.app/api/true?channel=true4uhd',
      ['[NO HW+]', 'http://160.119.77.117/iptv/sd-24u.stream/chunks.m3u8'],
      'https://www.livedoomovie.com/02_TRUE4U_480p/chunklist.m3u8', // 480p
      'https://cdn6.goprimetime.info/feed/chtrue4u/index.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  gmm25: {
    channelName: 'GMM25',
    logo: 'https://iptv36.my.to/logo/gmm25.png',
    urlList: [
      [
        'HD',
        'https://stream-04.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_eYSCEux0LboLkOMiQ13xkE)/dm/3/x6rz4t7/s/live-4.m3u8',
      ],
      ['[NO HW+]', 'http://160.119.77.117/iptv/sd-gmmchannel.stream/chunks.m3u8'],
      'http://live2.dootvde.com/live/50018_gmm.stream.smil/playist.m3u8', // 720p upscale
      'https://r3-sn-5fo-c37ed56.googleuservideo.com/doofootball_r2/gmm25_480p/playlist.m3u8', // 480p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch8: {
    channelName: 'CH8',
    logo: 'https://iptv36.my.to/logo/ch8.png',
    urlList: [
      ['HD', 'https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8'], // 720p
      // ['HD?', 'http://stream.rs.co.th/ch8-hi/index.m3u8'], // 360p too loud
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-ch8.stream/chunks.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    urlList: [
      [
        'HD',
        'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080TH.stream/playlist.m3u8',
      ], // 1080p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-mono.stream/chunks.m3u8'],
      [
        'HD',
        'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720TH.stream/playlist.m3u8',
      ], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  mono29soundtrack: {
    channelName: 'MONO29 HD Soundtrack',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    urlList: [
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080EN.stream/playlist.m3u8', // 1080p
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720EN.stream/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  mcot: {
    channelName: 'MCOT HD',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    urlList: [
      'http://160.119.77.117/iptv/hd-mcot.stream/chunks.m3u8',
      'https://cdn6.goprimetime.info/feed/chmcothd/index.m3u8',
    ],
    groupName: thDtvWithCurrentDate,
  },

  one: {
    channelName: 'ONE HD',
    logo: 'https://iptv36.my.to/logo/one.png',
    urlList: [
      'https://iptv36.my.to/one.m3u8', // 720p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-gmmone.stream/chunks.m3u8'],
      // 'http://live2.dootvde.com/live/50022_one_hd.stream.smil/playist.m3u8', // 720p
      'https://one31-rlbwkq.cdn.byteark.com/live/playlist-hd.m3u8', // 240p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  thairath: {
    channelName: 'Thairath TV HD',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    urlList: [
      'https://live.thairath.co.th/trtv2/playlist_720p/index.m3u8', // 720p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-thairath.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_THAIRATH_720p/chunklist.m3u8'], // 720p
      'https://live.thairath.co.th/trtv2/playlist.m3u8', // 720p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch3: {
    channelName: 'CH3',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    urlList: [
      ['HD [NO HW+]', 'http://160.119.77.117/iptv/hd-ch3.stream/chunks.m3u8'],
      ['HD', 'http://live2.dootvde.com/live/50001_ch3.stream.smil/playist.m3u8'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  amarin: {
    channelName: 'Amarin TV',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    urlList: [
      ['HD', 'http://live2.dootvde.com/live/50025_amarin_tv_hd.stream.smil/playist.m3u8'], // 720p
      ['HD [NO HW+]', 'http://160.119.77.117/iptv/hd-amarin.stream/chunks.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    urlList: [
      ['HD [NO HW+]', 'https://www.livedoomovie.com/02_7HD_720p/chunklist.m3u8'], // 720p
      'http://edge160.bugaboo.tv/liveedgech7_partner/smil:auto.smil/chunklist_b1210000_sleng.m3u8', // 480p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-ch7.stream/chunks.m3u8'], // 480p
      ['HD [NO HW+]', 'https://cdn6.goprimetime.info/feed/ch7hd/index.m3u8'], // 720p
      // 'http://119.59.125.74/stream/totnew.php?channel_id=ddfa47e726444446864b14e0e819fdde&.m3u', // 480p
    ],
    groupName: thDtvWithCurrentDate,
  },

  pptv: {
    channelName: 'PPTV',
    logo: 'https://iptv36.my.to/logo/pptv.png',
    urlList: [
      ['HD [NO HW+]', 'http://160.119.77.117/digitaltv/hd-pptv.stream/chunks.m3u8'],
      ['HD', 'http://live2.dootvde.com/live/50026_pptv_hd.stream.smil/playist.m3u8'], // 720p
      ['HD [NO HW+]', 'https://cdn6.goprimetime.info/feed/chpptvhd/index.m3u8'], // 720p
      ['HD [NO HW+]', 'https://www.livedoomovie.com/02_PPTVHD_720p/chunklist.m3u8'], // 720p
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
      // 'http://160.119.77.116:8081/iptv/epl-1.stream/playlist.m3u8', // 720p
      // 'http://77.83.117.60:8888/02_PremierHD1_720p/chunklist.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD1_720p/chunklist.m3u8'],
      ['[NO HW+]', 'http://160.119.77.117/iptv/epl-1.stream/chunks.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-1.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-foxsports1.stream/chunks.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier2: {
    channelName: 'Premier HD2',
    logo: 'https://iptv36.my.to/logo/premier_hd2.png',
    urlList: [
      // 'http://160.119.77.116:8081/iptv/epl-2.stream/playlist.m3u8', // 720p
      // 'http://77.83.117.60:8888/02_PremierHD2_720p/chunklist.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD2_720p/chunklist.m3u8'],
      ['[NO HW+]', 'http://160.119.77.117/iptv/epl-2.stream/chunks.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-2.stream/playlist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  premier3: {
    channelName: 'Premier HD3',
    logo: 'https://iptv36.my.to/logo/premier_hd3.png',
    urlList: [
      //  'http://160.119.77.116:8081/iptv/epl-3.stream/playlist.m3u8', // 720p
      // 'http://77.83.117.60:8888/02_PremierHD3_720p/chunklist.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD3_720p/chunklist.m3u8'],
      ['[NO HW+]', 'http://160.119.77.117/iptv/epl-3.stream/chunks.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-3.stream/playlist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  premier4: {
    channelName: 'Premier HD4',
    logo: 'https://iptv36.my.to/logo/premier_hd4.png',
    urlList: [
      // 'http://160.119.77.116:8081/iptv/epl-4.stream/playlist.m3u8', // 720p
      // 'http://77.83.117.60:8888/02_PremierHD4_720p/chunklist.m3u8',
      ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD4_720p/chunklist.m3u8'],
      ['[NO HW+]', 'http://160.119.77.117/iptv/epl-4.stream/chunks.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-4.stream/playlist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    urlList: [
      // 'http://160.119.77.116:8081/iptv/epl-5.stream/playlist.m3u8', // 720p
      // 'http://77.83.117.60:8888/02_PremierHD5_720p/chunklist.m3u8',
      // ['[NO HW+]', 'https://www.livedoomovie.com/02_PremierHD5_720p/chunklist.m3u8'],
      ['[NO HW+]', 'http://160.119.77.117/iptv/epl-5.stream/chunks.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-5.stream/playlist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  // truesporthd: {
  //   channelName: 'True Sports HD',
  //   logo: 'https://iptv36.my.to/logo/true_sports_hd.png',
  //   urlList: [
  //     'http://103.208.24.234:1935/thaisport/hd-tsport1.stream/chunklist.m3u8', // 720p
  //   ],
  //   groupName: 'SPORT',
  // },

  // truesporthd2: {
  //   channelName: 'True Sports HD2',
  //   logo: 'https://iptv36.my.to/logo/true_sports_hd2.png',
  //   urlList: [
  //     'http://103.208.24.234:1935/thaisport/hd-tsport2.stream/chunklist.m3u8', // 720p
  //   ],
  //   groupName: 'SPORT',
  // },

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

  // toonee: {
  //   channelName: 'Toonee',
  //   logo: 'https://cms.dmpcdn.com/livetv/2020/09/03/4c26a640-ede0-11ea-bbdd-775d9efe2958_320.png',
  //   urlList: ['https://edge6a.v2h-cdn.com/m2i7/Toonee.stream_720p/playlist.m3u8'],
  //   groupName: 'CARTOON',
  // },

  cartoonnetwork: {
    channelName: 'Cartoon Network HD',
    logo: 'https://iptv36.my.to/logo/cnhd.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-cartoonnetwork.stream/chunks.m3u8']],
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
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/hd-disneyxd.stream/chunks.m3u8']],
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
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-sparkjump.stream/chunks.m3u8']],
    groupName: 'CARTOON',
  },

  truesparkjump: {
    channelName: 'True Spark Jump',
    logo: 'https://iptv36.my.to/logo/truesparkjump.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-sparkjump.stream/chunks.m3u8']],
    groupName: 'CARTOON',
  },

  /* ENTERTAINMENT */
  axn: {
    channelName: 'AXN HD',
    logo: 'https://iptv36.my.to/logo/axn.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-axn.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovies.com/02_AXNHD_720p/chunklist.m3u8'],
      'http://136.243.177.164/AXN/playlist.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  bbcearth: {
    channelName: 'BBC Earth HD',
    logo: 'https://iptv36.my.to/logo/bbc_earth.jpg',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-bbcearth.stream/chunks.m3u8']],
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

  discoveryasia: {
    channelName: 'Discovery Asia HD',
    logo: 'https://iptv36.my.to/logo/discoveryasia.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-discovery.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovies.com/02_DiscoveryHDWorld/chunklist.m3u8'],
    ],
    groupName: 'NEWS & DOCS',
  },

  foxmovies: {
    channelName: 'FOX Movies HD',
    logo: 'https://iptv36.my.to/logo/foxmovies.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-foxpremium.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_FoxMoviesTH_720p/chunklist.m3u8'],
    ],
    groupName: 'ENTERTAINMENT',
  },

  foxactionmovies: {
    channelName: 'FOX Action Movies HD',
    logo: 'https://iptv36.my.to/logo/foxactionmovies.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/hd-foxaction.stream/chunks.m3u8']],
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
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-moviehits.stream/chunks.m3u8']],
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
    urlList: ['http://dootvthai-hd.com/cmd/api/hbo/hbohd/playlist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  history: {
    channelName: 'History HD',
    logo: 'https://iptv36.my.to/logo/history.png',
    urlList: [
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-history.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovie.com/02_HISTORYHD_720p/chunklist.m3u8'],
    ],
    groupName: 'ENTERTAINMENT',
  },

  history2: {
    channelName: 'History2 HD',
    logo: 'https://iptv36.my.to/logo/history2.png',
    urlList: [
      ['[NO HW+]', 'https://www.livedoomovie.com/02_H2HD_720p/chunklist.m3u8'],
      // ['[NO HW+]', 'http://160.119.77.117/iptv/hd-history2.stream/chunks.m3u8'],
    ],
    groupName: 'ENTERTAINMENT',
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
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/hd-natgeo.stream/chunks.m3u8']],
    groupName: 'NEWS & DOCS',
  },

  samrujlok: {
    channelName: 'Samrujlok HD',
    logo: 'https://iptv36.my.to/logo/samrujlok.png',
    urlList: [['[NO HW+]', 'https://www.livedoomovie.com/sumrujlok_goodtv/chunklist.m3u8']],
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
    urlList: ['http://96.30.124.100:1935/edgepsi/PSIHD.stream_720p/playlist.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  truefilm: {
    channelName: 'True Film HD',
    logo: 'https://iptv36.my.to/logo/truefilm.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/hd-tfilm.stream/chunks.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  trueplookpanya: {
    channelName: 'True Plook Panya',
    logo: 'https://iptv36.my.to/logo/trueplookpanya.png',
    urlList: [['[NO HW+]', 'http://160.119.77.117/iptv/sd-tppy.stream/chunks.m3u8']],
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
    urlList: ['https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  warnertv: {
    channelName: 'Warner TV HD',
    logo: 'https://iptv36.my.to/logo/warnertv.png',
    urlList: [
      'http://203.154.243.89:1205',
      'http://203.154.177.124:8899/live/ch12/playlist.m3u8',
      ['[NO HW+]', 'http://160.119.77.117/iptv/hd-warnertv.stream/chunks.m3u8'],
      ['[NO HW+]', 'https://www.livedoomovies.com/02_WarnerTVHD_720p/chunklist.m3u8'],
    ],
    groupName: 'ENTERTAINMENT',
  },
};

const dynamicallyAddStreamingUrlFromDailyMotion = async () => {
  console.log('Getting dynamic streaming url from dailymotion...');

  // config
  let config = [
    // [channelKey, channelNameSuffix, pageUrl, appendUrlToBottom=false]
    ['workpoint', 'HD', 'https://www.dailymotion.com/embed/video/x6g9qjj'],
    ['nation', 'HD', 'https://www.dailymotion.com/embed/video/x6eoldf'],
    ['mcot', '', 'https://www.dailymotion.com/embed/video/x74wlgj'],
    ['amarin', 'HD', 'https://www.dailymotion.com/embed/video/x7z8zsu'],
    // geo restricted
    // ['new18', 'HD', 'https://www.dailymotion.com/embed/video/x7kx5i7'],
    // ['gmm25', 'HD', 'https://www.dailymotion.com/embed/video/k7KnbDPalNddQqrJq1J'],
  ];

  let result = {};
  await Promise.all(
    config.map(async ([channelKey, channelNameSuffix, pageUrl, appendUrlToBottom = false]) => {
      let rawPageHtml = '';
      try {
        const response = await axios.get(pageUrl);
        rawPageHtml = response.data;
      } catch (error) {
        console.error(`Cannot extract playlist for channel ${channelKey}`);
        console.error(error);
      }

      let regExpMatchArray = rawPageHtml.match(
        /"(https:\\\/\\\/www\.dailymotion\.com\\\/cdn\\\/live\\\/video\\\/.*?\.m3u8\?sec=.*?)"/
      );

      let livePlayListUrl = '';
      if (regExpMatchArray) {
        livePlayListUrl = regExpMatchArray[1].replace(/\\\//g, '/');
      }

      if (livePlayListUrl) {
        try {
          const response = await axios.get(livePlayListUrl);
          let rawPlayList = response.data;

          for (let i = 4; i >= 2; i--) {
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

const dynamicallyAddStreamingUrlByDetectM3U8Url = async () => {
  console.log('Getting dynamic streaming url...');

  // config
  let config = [
    // [channelKey, channelNameSuffix, pageUrl, appendUrlToBottom=false]
    ['tnn16', 'HD', 'https://www.tnnthailand.com/live'], // 720p
    [
      'true4u',
      'HD',
      `https://true4u.com/live-api?ip=127.0.0.1&uid=${Math.random()
        .toString(36)
        .substring(2, 12)}&session=${Math.random().toString(36).substring(2, 12)}`,
    ],
  ];

  let result = {};
  await Promise.all(
    config.map(async ([channelKey, channelNameSuffix, pageUrl, appendUrlToBottom = false]) => {
      let rawPageHtml = '';
      try {
        const response = await axios.get(pageUrl);
        rawPageHtml = response.data;
      } catch (error) {
        console.error(`Cannot extract playlist for channel ${channelKey}`);
        console.error(error);
      }

      let regExpMatchArray = rawPageHtml.match(/https?:\/\/.+?\.m3u8(\?[^"]+)?/);

      if (regExpMatchArray) {
        if (!(channelKey in streamingInfo)) {
          console.error(`Not recognize channel ${channelKey}`);
          return;
        }
        let url = regExpMatchArray[0].replace('m_auto_tidl', 'w_auto_tidapp');
        if (appendUrlToBottom) {
          streamingInfo[channelKey].urlList.push([channelNameSuffix, regExpMatchArray[0]]);
        } else {
          streamingInfo[channelKey].urlList.unshift([channelNameSuffix, regExpMatchArray[0]]);
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
    url.includes('27.254.142.207') // m channel
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
        errorMsg === 'ECONNABORTED' &&
        url.includes('3bb.co.th') // || url.includes('103.208.24.234'))
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

      if (process.env.NETLIFY && errorMsg === 451 && url.includes('byteark.com')) {
        return true;
      }

      if (process.env.NETLIFY && url.includes('googleuservideo.com')) {
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
  dynamicallyAddStreamingUrlByDetectM3U8Url,
};
