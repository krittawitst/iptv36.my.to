const axios = require('axios');

const currentDatetimePlus7Hrs = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
const currentBkkDatetimeStr = currentDatetimePlus7Hrs.toISOString().slice(0, 16);

const thDtvWithCurrentDate = `TH DTV ${currentBkkDatetimeStr}`;

const streamingInfo = {
  /* TH DTV */
  tv5: {
    channelName: 'TV5 HD',
    logo: 'https://iptv36.my.to/logo/tv5.png',
    tvgId: 'th-dtv01.iptv36.my.to',
    urlList: [
      'http://110.170.117.27:1935/tv5hd1/vdo/playlist.m3u8', // 1080p
    ],
    groupName: thDtvWithCurrentDate,
  },

  nbt: {
    channelName: 'NBT HD',
    logo: 'https://iptv36.my.to/logo/nbt.png',
    tvgId: 'th-dtv02.iptv36.my.to',
    urlList: [
      'http://122.155.92.8:1935/live/ch1_L.sdp/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  thaipbs: {
    channelName: 'Thai PBS HD',
    logo: 'https://iptv36.my.to/logo/thaipbs.png',
    tvgId: 'th-dtv03.iptv36.my.to',
    urlList: [
      'http://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8', //1080p
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chthaipbs/index.m3u8'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  altv: {
    channelName: 'ALTV HD',
    logo: 'https://iptv36.my.to/logo/altv.png',
    tvgId: 'th-dtv04.iptv36.my.to',
    urlList: [
      'https://iptv36.my.to/altv.m3u8', // 1080p
      'https://thaipbs-ujxrch.cdn.byteark.com/live/playlist.m3u8', // 1080p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  tptv: {
    channelName: 'TPTV',
    logo: 'https://iptv36.my.to/logo/tptv.png',
    tvgId: 'th-dtv10.iptv36.my.to',
    urlList: [
      'http://49.231.66.85:1935/live/tptv/playlist.m3u8', // 240p
      ['[NO HW+]', 'http://livedoomovie.com/02_TPTV_480p/chunklist.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  tnn16: {
    channelName: 'TNN16',
    logo: 'https://iptv36.my.to/logo/tnn16.png',
    tvgId: 'th-dtv16.iptv36.my.to',
    urlList: [
      // 'http://27.254.130.56/live01/chsd_TNN_5.m3u8?p=st', // 720p upscale hang
      'http://119.59.125.74/stream/totnew.php?channel_id=77774220bb8e40aa94e549e29ff3ed8a&.m3u8', // 240p
    ],
    groupName: thDtvWithCurrentDate,
  },

  new18: {
    channelName: 'NEW 18',
    logo: 'https://iptv36.my.to/logo/new18.png',
    tvgId: 'th-dtv18.iptv36.my.to',
    urlList: [
      [
        'HD',
        'https://www.dailymotion.com/cdn/live/video/x7kx5i7.m3u8?sec=8RY3ICI_0p21M8ieD40iVJEBEiOO7cJW6YynagiH41gPh18FfXhaybxYWm_VdpVP9DFLZfI2Xn4GLsFt1B4O_w',
      ], // 1080p
      [
        'HD',
        'https://stream-02.sg1.dailymotion.com/sec(SCEOt4M5U0fVbrIPRLL54xcMLoS2aK8AExf8b_BiPak)/dm/3/x7kx5i7/s/live-3.m3u8',
      ], // 720p
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/newtv/index.m3u8'], // 720p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  nation: {
    channelName: 'Nation TV',
    logo: 'https://iptv36.my.to/logo/nation.png',
    tvgId: 'th-dtv22.iptv36.my.to',
    urlList: [
      [
        'HD',
        'https://stream-04.sg1.dailymotion.com/sec(ccIVIlWaGsSkNrAGI3_YSYd1OgOdrI_qPlB5fU0Jfa8)/dm/3/x6eoldf/d/live-3.m3u8',
      ], // 720p
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chnation/index.m3u8'], // 720p upscale
    ],
    groupName: thDtvWithCurrentDate,
  },

  workpoint: {
    channelName: 'Workpoint TV',
    logo: 'https://iptv36.my.to/logo/workpoint.png',
    tvgId: 'th-dtv23.iptv36.my.to',
    urlList: [
      [
        'HD',
        'https://stream-02.sg1.dailymotion.com/sec(MuIaQwZ7oLftuFXhsi7R8nSs7CGuzewffp95CvAfa9E)/dm/3/x6g9qjj/s/live-3.m3u8',
      ], // 720p
      // 'http://27.254.130.56/live01/ch7.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  true4u: {
    channelName: 'True4U',
    logo: 'https://iptv36.my.to/logo/true4u.png',
    tvgId: 'th-dtv24.iptv36.my.to',
    urlList: [
      'http://183.182.100.184/live/true4u/chunklist.m3u8', // 360p
    ],
    groupName: thDtvWithCurrentDate,
  },

  gmm25: {
    channelName: 'GMM25',
    logo: 'https://iptv36.my.to/logo/gmm25.png',
    tvgId: 'th-dtv25.iptv36.my.to',
    urlList: [
      [
        'HD',
        'https://stream-02.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_WtBpZYt9OOLB_NzOdrPK5k)/dm/3/x6rz4t7/s/live-3.m3u8',
      ], // 720p
      'http://live2.dootvde.com/live/50018_gmm.stream.smil/playist.m3u8', // 720p upscale
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chgmm/index.m3u8'], // 720p upscale
      'http://183.182.100.184/live/mcothd/playlist.m3u8', // 360p
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch8: {
    channelName: 'CH8',
    logo: 'https://iptv36.my.to/logo/ch8.png',
    tvgId: 'th-dtv27.iptv36.my.to',
    urlList: [
      ['HD', 'https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8'], // 720p
      // 'http://27.254.130.56/live01/ch15.m3u8?p=st', // 720p upscale hang
      'http://stream.rs.co.th/ch8-hi/index.m3u8', // 360p loud
    ],
    groupName: thDtvWithCurrentDate,
  },

  mono29: {
    channelName: 'MONO29',
    logo: 'https://iptv36.my.to/logo/mono29.png',
    tvgId: 'th-dtv29.iptv36.my.to',
    urlList: [
      [
        'HD',
        'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080TH.stream/playlist.m3u8',
      ], // 1080p
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chmono29/index.m3u8'], // 720p upscale
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
    tvgId: 'th-dtv29.iptv36.my.to',
    urlList: [
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080EN.stream/playlist.m3u8', // 1080p
      'https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720EN.stream/playlist.m3u8', // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  mcot: {
    channelName: 'MCOT HD',
    logo: 'https://iptv36.my.to/logo/mcot.png',
    tvgId: 'th-dtv30.iptv36.my.to',
    urlList: [
      ['[NO HW+]', 'https://cdn6.goprimetime.info/feed/chmcothd/index.m3u8'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  one: {
    channelName: 'ONE HD',
    logo: 'https://iptv36.my.to/logo/one.png',
    tvgId: 'th-dtv31.iptv36.my.to',
    urlList: [
      'https://iptv36.my.to/one.m3u8', // 720p
      'https://one31-rlbwkq.cdn.byteark.com/live/playlist-hd.m3u8', // 240p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  thairath: {
    channelName: 'Thairath TV HD',
    logo: 'https://iptv36.my.to/logo/thairath.png',
    tvgId: 'th-dtv32.iptv36.my.to',
    urlList: [
      'https://live.thairath.co.th/trtv2/playlist_720p/index.m3u8', // 720p
      'https://live.thairath.co.th/trtv2/playlist.m3u8', // 720p auto
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch3: {
    channelName: 'CH3',
    logo: 'https://iptv36.my.to/logo/ch3.png',
    tvgId: 'th-dtv33.iptv36.my.to',
    urlList: [
      'http://119.59.125.74/stream/totnew.php?channel_id=a4485b656d764f308c63b14a8bf62326', // 480p
      ['[NO HW+]', 'http://livedoomovie.com/02_3HD_720p/chunklist.m3u8'], // 480p
      // 'http://27.254.130.56/live01/ch0.m3u8?p=st', // 720p hang
    ],
    groupName: thDtvWithCurrentDate,
  },

  amarin: {
    channelName: 'Amarin TV',
    logo: 'https://iptv36.my.to/logo/amarin.png',
    tvgId: 'th-dtv34.iptv36.my.to',
    urlList: [
      ['HD', 'http://119.59.125.74/stream/totnew.php?channel_id=78f57ebcf6064b308d75208a20756983'], // 720p
    ],
    groupName: thDtvWithCurrentDate,
  },

  ch7: {
    channelName: 'CH7',
    logo: 'https://iptv36.my.to/logo/ch7.png',
    tvgId: 'th-dtv35.iptv36.my.to',
    urlList: [
      ['HD [NO HW+]', 'https://cdn6.goprimetime.info/feed/ch7hd/index.m3u8'], // 720p
      'http://119.59.125.74/stream/totnew.php?channel_id=ddfa47e726444446864b14e0e819fdde&.m3u', // 480p
      'http://edge160.bugaboo.tv/liveedgech7_partner/smil:auto.smil/chunklist_b1210000_sleng.m3u8', // 480p
    ],
    groupName: thDtvWithCurrentDate,
  },

  pptv: {
    channelName: 'PPTV',
    logo: 'https://iptv36.my.to/logo/pptv.png',
    tvgId: 'th-dtv36.iptv36.my.to',
    urlList: [
      // ['HD', 'https://dootvthai-hd.com/cmd/true/PPTV-HD/playlist.m3u8'], // 1080p
      // ['HD', 'http://203.150.107.30:8081/tested2iptv/core1/playlist.m3u8'], // 720p
      // ['HD', // 'http://27.254.130.56/live01/ch2.m3u8?p=st'], // 720p?
      ['[NO HW+]', 'http://livedoomovie.com/02_PPTVHD_720p/chunklist.m3u8'],
    ],
    groupName: thDtvWithCurrentDate,
  },

  /* SPORT */
  bein1: {
    channelName: 'beIN Sports HD1',
    logo: 'https://iptv36.my.to/logo/bein1.png',
    tvgId: 'bein1.iptv36.my.to',
    urlList: [
      ['[NO HW+]', 'http://livedoomovie.com/02_epl1_720p/chunklist.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-bein1.stream/playlist.m3u8', // 480p
    ],
    groupName: 'SPORT',
  },

  bein2: {
    channelName: 'beIN Sports HD2',
    logo: 'https://iptv36.my.to/logo/bein2.png',
    tvgId: 'bein2.iptv36.my.to',
    urlList: [
      ['[NO HW+]', 'http://livedoomovie.com/02_epl2_720p/chunklist.m3u8'],
      'http://103.208.24.234:1935/thaisport/epl-bein2.stream/playlist.m3u8', // 480p
    ],
    groupName: 'SPORT',
  },

  premier1: {
    channelName: 'Premier HD1',
    logo: 'https://iptv36.my.to/logo/premier_hd1.png',
    tvgId: 'premier1.iptv36.my.to',
    urlList: [
      'http://103.208.24.234:1935/thaisport/epl-1.stream/playlist.m3u8', // 720p
      'http://160.119.77.116:8081/iptv/epl-1.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://livedoomovie.com/02_PremierHD1_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier2: {
    channelName: 'Premier HD2',
    logo: 'https://iptv36.my.to/logo/premier_hd2.png',
    tvgId: 'premier2.iptv36.my.to',
    urlList: [
      'http://103.208.24.234:1935/thaisport/epl-2.stream/playlist.m3u8', // 720p
      'http://160.119.77.116:8081/iptv/epl-2.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://livedoomovie.com/02_PremierHD2_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier3: {
    channelName: 'Premier HD3',
    logo: 'https://iptv36.my.to/logo/premier_hd3.png',
    urlList: [
      'http://103.208.24.234:1935/thaisport/epl-3.stream/playlist.m3u8', // 720p
      'http://160.119.77.116:8081/iptv/epl-3.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://livedoomovie.com/02_PremierHD3_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier4: {
    channelName: 'Premier HD4',
    logo: 'https://iptv36.my.to/logo/premier_hd4.png',
    urlList: [
      'http://103.208.24.234:1935/thaisport/epl-4.stream/playlist.m3u8', // 720p
      'http://160.119.77.116:8081/iptv/epl-4.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://livedoomovie.com/02_PremierHD4_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  premier5: {
    channelName: 'Premier HD5',
    logo: 'https://iptv36.my.to/logo/premier_hd5.png',
    urlList: [
      'http://103.208.24.234:1935/thaisport/epl-5.stream/playlist.m3u8', // 720p
      'http://160.119.77.116:8081/iptv/epl-5.stream/playlist.m3u8', // 720p
      ['[NO HW+]', 'http://livedoomovie.com/02_PremierHD5_720p/chunklist.m3u8'],
    ],
    groupName: 'SPORT',
  },

  truesporthd: {
    channelName: 'True Sports HD',
    logo: 'https://iptv36.my.to/logo/true_sports_hd.png',
    tvgId: 'truesporthd.iptv36.my.to',
    urlList: [
      'http://103.208.24.234:1935/thaisport/hd-tsport1.stream/chunklist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  truesporthd2: {
    channelName: 'True Sports HD2',
    logo: 'https://iptv36.my.to/logo/true_sports_hd2.png',
    tvgId: 'truesporthd2.iptv36.my.to',
    urlList: [
      'http://103.208.24.234:1935/thaisport/hd-tsport2.stream/chunklist.m3u8', // 720p
    ],
    groupName: 'SPORT',
  },

  truesport2: {
    channelName: 'True Sports 2',
    logo: 'https://iptv36.my.to/logo/truesports2.png',
    tvgId: 'truesport2.iptv36.my.to',
    urlList: [
      'http://103.208.24.234:1935/thaisport/sd-tsport2.stream/chunklist.m3u8', // 576p
    ],
    groupName: 'SPORT',
  },

  /* CARTOON */
  cartoonclub: {
    channelName: 'Cartoon Club',
    logo: 'https://iptv36.my.to/logo/cartoonclub.png',
    tvgId: 'cartoonclub.iptv36.my.to',
    urlList: [
      'http://edge4-bkk.3bb.co.th:1935/CartoonClub_Livestream/cartoonclub_480P.stream/playlist.m3u8',
    ],
    groupName: 'CARTOON',
  },

  cartoonnetwork: {
    channelName: 'Cartoon Network HD',
    logo: 'https://iptv36.my.to/logo/cnhd.png',
    tvgId: 'cartoonnetwork.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_CartoonNetwork_720p/chunklist.m3u8']],
    groupName: 'CARTOON',
  },

  disneyxd: {
    channelName: 'Disney XD',
    logo: 'https://iptv36.my.to/logo/disneyxd.png',
    tvgId: 'disneyxd.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_DisneyXD_720p/chunklist.m3u8']],
    groupName: 'CARTOON',
  },

  nickelodeon: {
    channelName: 'nickelodeon',
    logo: 'https://iptv36.my.to/logo/nick.png',
    tvgId: 'nickelodeon.iptv36.my.to',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  truesparkplay: {
    channelName: 'True Spark Play',
    logo: 'https://iptv36.my.to/logo/truesparkplay.png',
    tvgId: 'truesparkplay.iptv36.my.to',
    urlList: [],
    groupName: 'CARTOON',
  },

  truesparkjump: {
    channelName: 'True Spark Jump',
    logo: 'https://iptv36.my.to/logo/truesparkjump.png',
    tvgId: 'truesparkjump.iptv36.my.to',
    urlList: [],
    groupName: 'CARTOON',
  },

  /* ENTERTAINMENT */
  axn: {
    channelName: 'AXN HD',
    logo: 'https://iptv36.my.to/logo/axn.png',
    tvgId: 'axn.iptv36.my.to',
    urlList: ['http://ip2121.com:8081/live2/AXN_Y/playlist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  // bbcearth: {
  //   channelName: "BBC Earth HD",
  //   logo: "https://iptv36.my.to/logo/bbc_earth.jpg",
  //   urlList: [
  //     "https://dootvthai-hd.com/cmd/api/true/bbc-earth-hd/playlist.m3u8",
  //   ],
  //   groupName: "PREMIUM",
  // },

  blueantent: {
    channelName: 'Blue Ant ENT HD',
    logo: 'https://iptv36.my.to/logo/blueantent.png',
    tvgId: 'blueantent.iptv36.my.to',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  ctb: {
    channelName: 'CTB TV',
    logo: 'https://iptv36.my.to/logo/ctb.png',
    urlList: ['http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8'],
    groupName: 'ENTERTAINMENT',
  },

  discoveryasia: {
    channelName: 'Discovery Asia HD',
    logo: 'https://iptv36.my.to/logo/discoveryasia.png',
    tvgId: 'discoveryasia.iptv36.my.to',
    urlList: ['https://doofootball.livestream-cdn.com:443/iptv/hd-discovery.stream/chunks.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  foxmovies: {
    channelName: 'FOX Movies HD',
    logo: 'https://iptv36.my.to/logo/foxmovies.png',
    tvgId: 'foxmovies.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_FoxMoviesTH_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  foxactionmovies: {
    channelName: 'Fox Action Movies HD',
    logo: 'https://iptv36.my.to/logo/foxactionmovies.png',
    tvgId: 'foxactionmovies.iptv36.my.to',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },

  foxfamilymovies: {
    channelName: 'Fox Family Movies HD',
    logo: 'https://iptv36.my.to/logo/foxfamilymovies.png',
    tvgId: 'foxfamilymovies.iptv36.my.to',
    urlList: [],
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
    tvgId: 'foxthai.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_FoxThai_TH_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  hbo: {
    channelName: 'HBO',
    logo: 'https://iptv36.my.to/logo/hbo.png',
    urlList: [
      'https://liveorigin01.hbogoasia.com:8443/origin/live/HBO/index.m3u8?HBO',
      ['[NO HW+]', 'http://livedoomovie.com/02_HBOHD_720p/chunklist.m3u8'],
    ],
    groupName: 'ENTERTAINMENT',
  },

  history: {
    channelName: 'History HD',
    logo: 'https://iptv36.my.to/logo/history.png',
    tvgId: 'history.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_HISTORYHD_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  history2: {
    channelName: 'History2 HD',
    logo: 'https://iptv36.my.to/logo/history2.png',
    tvgId: 'history2.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_H2HD_720p/chunklist.m3u8']],
    groupName: 'ENTERTAINMENT',
  },

  hitsmovies: {
    channelName: 'Hits Movies HD',
    logo: 'https://iptv36.my.to/logo/hitsmovies.png',
    tvgId: 'hitsmovies.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/02_HITSMOVIE_720p/chunklist.m3u8']],
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
    tvgId: 'm.iptv36.my.to',
    urlList: [
      'http://27.254.142.207:8080/live/web.m3u8',
      'https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8',
    ],
    groupName: 'ENTERTAINMENT',
  },

  monoplus: {
    channelName: 'MONO PLUS HD',
    logo: 'https://iptv36.my.to/logo/monoplus.png',
    urlList: [
      'https://edge4-bkk.3bb.co.th:9443/MonoPlus_LiveHLS/monoplusLive_HLS1080p.stream/chunklist.m3u8', // 1080p50
      // 'http://edge1-bkk.3bb.co.th:1935/Edge_Cloudiptv_Authen/cloudiptv_monoplus_live1.stream/playlist.m3u8?username=mTRTvdvQbtd1DsswhsZTMoZUdI8MT4W6&password=Rp93AKS1peyuyYDApZw6sThMshGL1vvO', // 720p
    ],
    groupName: 'ENTERTAINMENT',
  },

  natgeo: {
    channelName: 'NAT GEO HD',
    logo: 'https://iptv36.my.to/logo/natgeo.png',
    tvgId: 'natgeo.iptv36.my.to',
    urlList: [['[NO HW+]', 'http://livedoomovie.com/sumrujlok_goodtv/chunklist.m3u8']],
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
    tvgId: 'paramount.iptv36.my.to',
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
    tvgId: 'truefilm.iptv36.my.to',
    urlList: [],
    groupName: 'PREMIUM',
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
    tvgId: 'voice.iptv36.my.to',
    urlList: ['https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8'],
    groupName: 'NEWS & DOCS',
  },

  warnertv: {
    channelName: 'Warner TV HD',
    logo: 'https://iptv36.my.to/logo/warnertv.png',
    tvgId: 'warnertv.iptv36.my.to',
    urlList: [],
    groupName: 'ENTERTAINMENT',
  },
};

const dynamicallyAddStreamingUrlFromWePlay = async () => {
  console.log('\nGetting dynamic streaming url...');
  console.log('==> Done');

  // config
  let config = [
    // [channelKey, channelNameSuffix, pageUrl, appendUrlToBottom=false]
    ['workpoint', '[NO HW+]', 'https://www.we-play.tv/watching/tv/workpoint', true],
    ['true4u', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true4u'],
    ['mcot', '[NO HW+]', 'https://www.we-play.tv/watching/tv/mcot-hd'],
    ['one', '[NO HW+]', 'https://www.we-play.tv/watching/tv/one-hd'],
    ['thairath', '[NO HW+]', 'https://www.we-play.tv/watching/tv/thairath-tv'],
    ['ch3', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/ch3-hd'],
    ['amarin', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/amarin-tv'],
    ['ch7', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/ch7-hd'],
    ['pptv', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/pptv-hd'],
    ['discoveryasia', '[NO HW+]', 'https://www.we-play.tv/watching/tv/discovery-asia'],
    ['history', '[NO HW+]', 'https://www.we-play.tv/watching/tv/history-hd'],
    ['history2', '[NO HW+]', 'https://www.we-play.tv/watching/tv/history-h2'],
    ['natgeo', '[NO HW+]', 'https://www.we-play.tv/watching/tv/national-geographic'],
    ['foxmovies', '[NO HW+]', 'https://www.we-play.tv/watching/tv/fox-movies'],
    ['foxactionmovies', '[NO HW+]', 'https://www.we-play.tv/watching/tv/fox-action-movies'],
    ['foxfamilymovies', '[NO HW+]', 'https://www.we-play.tv/watching/tv/fox-family-movies'],
    ['foxlife', '[NO HW+]', 'https://www.we-play.tv/watching/tv/fox-life'],
    ['foxthai', '[NO HW+]', 'https://www.we-play.tv/watching/tv/fox-thai'],
    ['truefilm', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/true-film-hd'],
    ['hbo', 'HD [NO HW+]', 'https://www.we-play.tv/watching/tv/hbo-hd'],
    ['hitsmovies', '[NO HW+]', 'https://www.we-play.tv/watching/tv/hits-movies'],
    ['warnertv', '[NO HW+]', 'https://www.we-play.tv/watching/tv/warner-tv'],
    ['paramount', '[NO HW+]', 'https://www.we-play.tv/watching/tv/paramount-channel'],
    ['blueantent', '[NO HW+]', 'https://www.we-play.tv/watching/tv/blueant-entertainment'],
    ['premier1', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-premier-football-hd-1'],
    ['premier2', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-premier-football-hd-2'],
    ['premier3', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-premier-football-hd-3'],
    ['premier4', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-premier-football-hd-4'],
    ['premier5', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-premier-football-hd-5'],
    ['truesport2', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-sports-2'],
    ['truesporthd2', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-sports-hd-2'],
    ['truesporthd', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-sports-hd'],
    ['bein1', '[NO HW+]', 'https://www.we-play.tv/watching/tv/bein-sports-1'],
    ['bein2', '[NO HW+]', 'https://www.we-play.tv/watching/tv/bein-sports-2'],
    ['cartoonclub', '[NO HW+]', 'https://www.we-play.tv/watching/tv/cartoon-club'],
    ['cartoonnetwork', '[NO HW+]', 'https://www.we-play.tv/watching/tv/cartoon-network'],
    ['nickelodeon', '[NO HW+]', 'https://www.we-play.tv/watching/tv/nickelodeon'],
    ['truesparkplay', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-spark-play'],
    ['truesparkjump', '[NO HW+]', 'https://www.we-play.tv/watching/tv/true-spark-jump'],
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

      let regExpMatchArray = rawPageHtml.match(/"(https:\/\/.+\.m3u8?.+)"/);

      if (regExpMatchArray) {
        if (!(channelKey in streamingInfo)) {
          console.error(`Not recognize channel ${channelKey}`);
          return;
        }
        if (appendUrlToBottom) {
          streamingInfo[channelKey].urlList.push([channelNameSuffix, regExpMatchArray[1]]);
        } else {
          streamingInfo[channelKey].urlList.unshift([channelNameSuffix, regExpMatchArray[1]]);
        }
      }
    })
  );
};

const testUrl = async (url) => {
  // list of url that we will always not check
  if (url.includes('rtsp://')) {
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
        (url.includes('3bb.co.th') ||
          url.includes('doofootball.livestream-cdn.com') ||
          url.includes('103.208.24.234'))
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

      let result = await testUrl(urlForTest);
      if (result !== true) {
        console.log(`  X ${streamingData.channelName} - ${result}\n    ${urlForTest}`);
        invalidUrlList.push(urlForTest);
      }
    })
  );

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
  dynamicallyAddStreamingUrlFromWePlay,
};
