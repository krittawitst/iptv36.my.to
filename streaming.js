const axios = require("axios");
const format = require("date-format");

const streamingInfo = {
  /* TH DTV */
  tv5: {
    channelName: "TV5",
    logo: "https://iptv36.my.to/logo/tv5.png",
    tvgId: "th-dtv1.iptv36.my.to",
    urlList: [
      "http://110.170.117.27:1935/tv5hd1/vdo/playlist.m3u8",
      "https://dootvthai-hd.com/cmd/api/true/CH5-HD/playlist.m3u8",
      "http://27.254.130.64/live01/ch6.m3u8?p=st",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  nbt: {
    channelName: "NBT",
    logo: "https://iptv36.my.to/logo/nbt.png",
    tvgId: "th-dtv2.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/nbt-hd/playlist.m3u8",
      "http://122.155.92.8:1935/live/ch1_L.sdp/playlist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  thaipbs: {
    channelName: "Thai PBS",
    logo: "https://iptv36.my.to/logo/thaipbs.png",
    tvgId: "th-dtv3.iptv36.my.to",
    urlList: [
      "http://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8",
      "https://dootvthai-hd.com/cmd/true/thaipbshd/playlist.m3u8",
      "https://cdn6.goprimetime.info/feed/chthaipbs/index.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  altv: {
    channelName: "ALTV",
    logo: "https://iptv36.my.to/logo/altv.png",
    tvgId: "th-dtv4.iptv36.my.to",
    urlList: [
      "https://iptv36.my.to/altv.m3u8",
      "https://thaipbs-ujxrch.cdn.byteark.com/live/playlist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  tptv: {
    channelName: "TPTV",
    logo: "https://iptv36.my.to/logo/tptv.png",
    tvgId: "th-dtv10.iptv36.my.to",
    urlList: [
      "http://49.231.66.85:1935/live/tptv/playlist.m3u8",
      "https://www.livedoomovies.com/02_TPTV_480p/chunklist.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  tnn16: {
    channelName: "TNN16",
    logo: "https://iptv36.my.to/logo/tnn16.png",
    tvgId: "th-dtv16.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/tnn-16/playlist.m3u8",
      "http://27.254.130.64/live01/chsd_TNN_5.m3u8?p=st",
      "http://119.59.125.74/stream/totnew.php?channel_id=77774220bb8e40aa94e549e29ff3ed8a&.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  new18: {
    channelName: "NEW 18",
    logo: "https://iptv36.my.to/logo/new18.jpg",
    tvgId: "th-dtv18.iptv36.my.to",
    urlList: [
      "https://stream-03.sg1.dailymotion.com/sec(SCEOt4M5U0fVbrIPRLL54ybPq5-NcbIygwqFAwLwHHU)/dm/3/x7kx5i7/s/live-3.m3u8",
      "https://stream-02.sg1.dailymotion.com/sec(SCEOt4M5U0fVbrIPRLL54ybPq5-NcbIygwqFAwLwHHU)/dm/3/x7kx5i7/s/live-2.m3u8",
      "https://dootvthai-hd.com/cmd/api/true/new-tv/playlist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  workpoint: {
    channelName: "Workpoint TV",
    logo: "https://iptv36.my.to/logo/workpoint.png",
    tvgId: "th-dtv23.iptv36.my.to",
    urlList: [
      "https://stream-04.sg1.dailymotion.com/sec(MuIaQwZ7oLftuFXhsi7R8hPJ7U9smnu3AdK1O0HpwXI)/dm/3/x6g9qjj/s/live-3.m3u8",
      "https://dootvthai-hd.com/cmd/true/Workpointtv/playlist.m3u8",
      "http://27.254.130.56:80/live01/ch7.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  true4u: {
    channelName: "True4U",
    logo: "https://iptv36.my.to/logo/true4u.png",
    tvgId: "th-dtv24.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/true4u/playlist.m3u8",
      "http://183.182.100.184/live/true4u/chunklist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  gmm25: {
    channelName: "GMM25",
    logo: "https://iptv36.my.to/logo/gmm25.png",
    tvgId: "th-dtv25.iptv36.my.to",
    urlList: [
      "https://stream-02.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_dO1X6ohg5EVaBt6k3tqoVo)/dm/3/x6rz4t7/s/live-3.m3u8",
      "https://cdn6.goprimetime.info/feed/chgmm/index.m3u8", // 720p hw
      "http://183.182.100.184/live/mcothd/playlist.m3u8", // 360p
      "http://27.254.130.56:80/live01/ch11.m3u8", // 72op
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  ch8: {
    channelName: "CH8",
    logo: "https://iptv36.my.to/logo/ch8.jpg",
    tvgId: "th-dtv27.iptv36.my.to",
    urlList: [
      "https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8",
      "https://dootvthai-hd.com/cmd/api/true/ch8-hd/playlist.m3u8",
      "http://stream.rs.co.th/ch8-hi/index.m3u8",
      "http://27.254.130.64/live01/ch15.m3u8?p=st",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  mono29: {
    channelName: "MONO29",
    logo: "https://iptv36.my.to/logo/mono29.png",
    tvgId: "th-dtv29.iptv36.my.to",
    urlList: [
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080TH.stream/playlist.m3u8",
      "https://dootvthai-hd.com/cmd/api/true/mono29/playlist.m3u8",
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720TH.stream/playlist.m3u8",
      "https://cdn6.goprimetime.info/feed/chmono29/index.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  mono29soundtrack: {
    channelName: "MONO29 Soundtrack",
    logo: "https://iptv36.my.to/logo/mono29.png",
    tvgId: "th-dtv29.iptv36.my.to",
    urlList: [
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080EN.stream/playlist.m3u8",
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_720P/mono29hls_720EN.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  mcot: {
    channelName: "MCOT",
    logo: "https://iptv36.my.to/logo/mcot.png",
    tvgId: "th-dtv30.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/9MCOT-HD/playlist.m3u8",
      "https://stream-04.sg1.dailymotion.com/sec(86G48EQSWKUUFPhHXEV5xu8NMWFy2EODRtFoKFr-u-k)/dm/3/x74wlgj/s/live-4.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  one: {
    channelName: "ONE",
    logo: "https://iptv36.my.to/logo/one.png",
    tvgId: "th-dtv31.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/ONE-HD/playlist.m3u8",
      "https://iptv36.my.to/one.m3u8",
      "https://one31-rlbwkq.cdn.byteark.com/live/playlist-hd.m3u8",
      "http://203.150.107.30:8081/tested2iptv/I1_CNNHD/playlist.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  thairath: {
    channelName: "Thairath TV",
    logo: "https://iptv36.my.to/logo/thairath.png",
    tvgId: "th-dtv32.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/Thairathtv-HD/playlist.m3u8",
      "http://live.thairath.co.th/trtv2/playlist_720p/index.m3u8",
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  ch3: {
    channelName: "CH3",
    logo: "https://iptv36.my.to/logo/ch3.png",
    tvgId: "th-dtv33.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/CH3-HD/playlist.m3u8", // 1080p
      "http://203.150.107.30:8081/tested2iptv/core11/playlist.m3u8", // 1080p
      "http://27.254.130.64/live01/ch0.m3u8?p=st", // 480p
      "http://119.59.125.74/stream/totnew.php?channel_id=a4485b656d764f308c63b14a8bf62326", // 480p
      "https://www.livedoomovies.com/02_3HD_720p/chunklist.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  amarin: {
    channelName: "Amarin TV",
    logo: "https://iptv36.my.to/logo/amarin.png",
    tvgId: "th-dtv34.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/Amarintv-HD/playlist.m3u8", // 1080p
      "http://27.254.130.64:80/feed/chamarin/playlist.m3u8", // 720p
      "http://119.59.125.74/stream/totnew.php?channel_id=78f57ebcf6064b308d75208a20756983", // 720p
      "http://203.150.107.30:8081/tested2iptv/core13/playlist.m3u8", // 1080p fake
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  ch7: {
    channelName: "CH7",
    logo: "https://iptv36.my.to/logo/ch7.png",
    tvgId: "th-dtv35.iptv36.my.to",
    urlList: [
      "https://cdn6.goprimetime.info/feed/ch7hd/index.m3u8", // 720p hw
      "https://dootvthai-hd.com/cmd/true/CH7-HD/playlist.m3u8", // 576p
      "https://bcovlive-a.akamaihd.net/44cc55c80fef46a8baa3a405433e63b8/ap-southeast-1/5282994675001/playlist.m3u8", // 576p
      "http://119.59.125.74/stream/totnew.php?channel_id=ddfa47e726444446864b14e0e819fdde&.m3u", // 480p
      "http://edge160.bugaboo.tv/liveedgech7_partner/smil:auto.smil/chunklist_b1210000_sleng.m3u8", // 480p
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  pptv: {
    channelName: "PPTV",
    logo: "https://iptv36.my.to/logo/pptv.png",
    tvgId: "th-dtv36.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/PPTV-HD/playlist.m3u8",
      "http://27.254.130.64/live01/ch2.m3u8?p=st",
      "http://203.150.107.30:8081/tested2iptv/core1/playlist.m3u8",
      "https://www.livedoomovies.com/02_PPTVHD_720p/chunklist.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  /* SPORT */
  premier1: {
    channelName: "Premier HD1",
    logo: "https://iptv36.my.to/logo/premier_hd1.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core101/playlist.m3u8", // 720p60
      "https://dootvthai-hd.com/cmd/true/ep1-1/playlist.m3u8", //1080p
      "http://103.208.24.234:1935/thaisport/epl-1.stream/playlist.m3u8", //720p
    ],
    groupName: "PREMIUM",
  },

  premier2: {
    channelName: "Premier HD2",
    logo: "https://iptv36.my.to/logo/premier_hd2.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core102/playlist.m3u8", // 720p60
      "https://dootvthai-hd.com/cmd/true/ep1-2/playlist.m3u8", //1080p
      "http://103.208.24.234:1935/thaisport/epl-2.stream/playlist.m3u8", // 720p
      "http://160.119.77.116:8081/iptv/epl-2.stream/playlist.m3u8", // 720p
    ],
    groupName: "PREMIUM",
  },

  premier3: {
    channelName: "Premier HD3",
    logo: "https://iptv36.my.to/logo/premier_hd3.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-3.stream/playlist.m3u8", // 720p
      "https://dootvthai-hd.com/cmd/true/ep1-3/playlist.m3u8", // 1080p
      "http://160.119.77.116:8081/iptv/epl-3.stream/playlist.m3u8", // 720p
    ],
    groupName: "PREMIUM",
  },

  premier4: {
    channelName: "Premier HD4",
    logo: "https://iptv36.my.to/logo/premier_hd4.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/ep1-4/playlist.m3u8", // 1080p
      "http://103.208.24.234:1935/thaisport/epl-4.stream/playlist.m3u8", // 720p
      "http://160.119.77.116:8081/iptv/epl-4.stream/playlist.m3u8", // 720p
      "https://www.livedoomovies.com/02_PremierHD4_720p/chunklist.m3u8", // hw
    ],
    groupName: "PREMIUM",
  },

  premier5: {
    channelName: "Premier HD5",
    logo: "https://iptv36.my.to/logo/premier_hd5.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/ep1-5/playlist.m3u8", // 1080p
      "http://103.208.24.234:1935/thaisport/epl-5.stream/playlist.m3u8", // 720p
      "http://160.119.77.116:8081/iptv/epl-5.stream/playlist.m3u8", // 720p
      "https://www.livedoomovies.com/02_PremierHD5_720p/chunklist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  bein1: {
    channelName: "beIN Sports HD1",
    logo: "https://iptv36.my.to/logo/bein1.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core2/playlist.m3u8", // 720p
      "https://www.livedoomovies.com/02_epl1_720p/chunklist.m3u8", // hw
      "http://103.208.24.234:1935/thaisport/epl-bein1.stream/playlist.m3u8", // 480p
    ],
    groupName: "PREMIUM",
  },

  bein2: {
    channelName: "beIN Sports HD2",
    logo: "https://iptv36.my.to/logo/bein2.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core4/playlist.m3u8", // 720p
      "https://www.livedoomovies.com/02_epl2_720p/chunklist.m3u8", // hw
      "http://103.208.24.234:1935/thaisport/epl-bein2.stream/playlist.m3u8", // 480p
    ],
    groupName: "PREMIUM",
  },

  /* PREMIUM */
  axn: {
    channelName: "AXN HD",
    logo: "https://iptv36.my.to/logo/axn.png",
    urlList: ["http://ip2121.com:8081/live2/AXN_Y/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  // bbcearth: {
  //   channelName: "BBC Earth HD",
  //   logo: "https://iptv36.my.to/logo/bbc_earth.jpg",
  //   urlList: [
  //     "https://dootvthai-hd.com/cmd/api/true/bbc-earth-hd/playlist.m3u8",
  //   ],
  //   groupName: "PREMIUM",
  // },

  // blueantent: {
  //   channelName: "Blue Ant ENT HD",
  //   logo: "https://iptv36.my.to/logo/blue_ant.jpg",
  //   urlList: [
  //     // 403 "http://160.119.77.50/iptv/hd-rtlcbs.stream/playlist.m3u8",
  //     // sub indo "http://210.210.155.35:80/session/676c25ba-724e-11e9-834b-8ac28bf32f5a/dr9445/h/h16/01.m3u8",
  //   ],
  //   groupName: "PREMIUM",
  // },

  cartoonclub: {
    channelName: "Cartoon Club",
    logo: "https://iptv36.my.to/logo/cartoonclub.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/cartoonclub/playlist.m3u8",
      "http://edge4-bkk.3bb.co.th:1935/CartoonClub_Livestream/cartoonclub_480P.stream/chunklist.m3u8",
    ],
    groupName: "FREE TV",
  },

  cartoonnetwork: {
    channelName: "Cartoon Network HD",
    logo: "https://iptv36.my.to/logo/cnhd.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/cartoon-network-hd/playlist.m3u8",
      "https://www.livedoomovies.com/02_CartoonNetwork_720p/chunklist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  ctb: {
    channelName: "CTB TV",
    logo: "https://iptv36.my.to/logo/ctb.png",
    urlList: ["http://vip.login.in.th:1935/CTB/CTB/chunklist.m3u8"],
    groupName: "FREE TV",
  },

  discoveryasia: {
    channelName: "Discovery Asia",
    logo: "https://iptv36.my.to/logo/discoveryasia.png",
    urlList: [
      "https://doofootball.livestream-cdn.com:443/iptv/hd-discovery.stream/chunks.m3u8",
    ],
    groupName: "PREMIUM",
  },

  disneyxd: {
    channelName: "Disney XD",
    logo: "https://iptv36.my.to/logo/disneyxd.png",
    urlList: ["http://203.150.107.30:8081/tested2iptv/core107/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  foxactionmovies: {
    channelName: "Fox Action Movies HD",
    logo: "https://iptv36.my.to/logo/fox_action_movies.png",
    urlList: ["https://dootvthai-hd.com/cmd/api/true/Fox-Action/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  foxfamilymovies: {
    channelName: "Fox Family Movies HD",
    logo: "https://iptv36.my.to/logo/fox_family_movies.png",
    urlList: ["http://203.150.107.30:8081/tested2iptv/core14/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  foxmovies: {
    channelName: "FOX Movies HD",
    logo: "https://iptv36.my.to/logo/fox_movies.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/Fox-Movie/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core12/playlist.m3u8",
      "https://www.livedoomovies.com/02_FoxMoviesTH_720p/chunklist.m3u8", // hw
      "http://ip2121.com:8081/live2/foxpre/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  foxthai: {
    channelName: "FOX Thai HD",
    logo: "https://iptv36.my.to/logo/fox_thai.jpg",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/Fox-Thai/playlist.m3u8",
      "https://www.livedoomovies.com/02_FoxThai_TH_720p/chunklist.m3u8", // hw
    ],
    groupName: "PREMIUM",
  },

  hbo: {
    channelName: "HBO",
    logo: "https://iptv36.my.to/logo/hbo.jpg",
    urlList: [
      "https://liveorigin01.hbogoasia.com:8443/origin/live/HBO/index.m3u8?HBO",
      "https://www.livedoomovies.com/02_HBOHD_720p/chunklist.m3u8", // hw
    ],
    groupName: "PREMIUM",
  },

  history: {
    channelName: "History HD",
    logo: "https://iptv36.my.to/logo/history.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/history-channel-hd/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core105/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  history2: {
    channelName: "History2 HD",
    logo: "https://iptv36.my.to/logo/history2.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/h2/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core106/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  hitsmovie: {
    channelName: "Hits Movie HD",
    logo: "https://iptv36.my.to/logo/hitsmovie.png",
    urlList: [
      "https://www.livedoomovies.com/02_HITSMOVIE_720p/chunklist.m3u8", // hw
    ],
    groupName: "PREMIUM",
  },

  idstation: {
    channelName: "ID Station",
    logo: "https://iptv36.my.to/logo/idstation.png",
    urlList: ["https://dootvthai-hd.com/cmd/api/true/idstation/playlist.m3u8"],
    groupName: "FREE TV",
  },

  ipcam: {
    channelName: "IPCAM",
    logo: "https://iptv36.my.to/logo/cctv.png",
    urlList: [
      "rtsp://admin@192.168.1.211:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.212:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.203:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.204:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.205:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.206:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.207:554/mpeg4/ch1/main/av_stream",
      "rtsp://admin@192.168.1.208:554/mpeg4/ch1/main/av_stream",
    ],
    groupName: "IP CAM",
  },

  m: {
    channelName: "M Channel",
    logo: "https://iptv36.my.to/logo/m.png",
    urlList: [
      "http://27.254.142.207:8080/live/web.m3u8",
      "http://27.254.130.61/live01/ch19.m3u8?p=st",
      "https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8",
    ],
    groupName: "FREE TV",
  },

  monoplus: {
    channelName: "MONO PLUS HD",
    logo: "https://iptv36.my.to/logo/monoplus.png",
    urlList: [
      "https://edge4-bkk.3bb.co.th:9443/MonoPlus_LiveHLS/monoplusLive_HLS1080p.stream/chunklist.m3u8", // 1080p50
      "http://edge1-bkk.3bb.co.th:1935/Edge_Cloudiptv_Authen/cloudiptv_monoplus_live1.stream/playlist.m3u8?username=mTRTvdvQbtd1DsswhsZTMoZUdI8MT4W6&password=Rp93AKS1peyuyYDApZw6sThMshGL1vvO", // 720p
    ],
    groupName: "FREE TV",
  },

  // natgeo: {
  //   channelName: "NAT GEO HD",
  //   logo: "https://iptv36.my.to/logo/nat_geo.jpg",
  //   urlList: ["http://160.119.77.50/iptv/hd-natgeo.stream/playlist.m3u8"],
  //   groupName: "PREMIUM",
  // },

  nation: {
    channelName: "Nation TV",
    logo: "https://iptv36.my.to/logo/nation.jpg",
    tvgId: "th-dtv22.iptv36.my.to",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/nationtv/playlist.m3u8", // 576p
      "https://cdn6.goprimetime.info/feed/chnation/index.m3u8", // hw
    ],
    groupName: `TH DTV ${format().slice(0, 16)}`,
  },

  news1: {
    channelName: "NEWS1",
    logo: "https://iptv36.my.to/logo/news1.png",
    urlList: ["http://news1.live14.com/stream/news1_hi.m3u8"],
    groupName: "FREE TV",
  },

  nickelodeon: {
    channelName: "nickelodeon",
    logo: "https://iptv36.my.to/logo/nickelodeon.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/nickelodeon/playlist.m3u8",
    ],
    groupName: "FREE TV",
  },

  paramount: {
    channelName: "Paramount HD",
    logo: "https://iptv36.my.to/logo/paramount.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/paramount-hd/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  psi: {
    channelName: "PSI Saradee HD",
    logo: "https://iptv36.my.to/logo/psi.png",
    urlList: [
      "http://96.30.124.100:1935/edgepsi/PSIHD.stream_720p/playlist.m3u8",
    ],
    groupName: "FREE TV",
  },

  // truefilm: {
  //   channelName: "True Film HD",
  //   logo: "https://iptv36.my.to/logo/true_film_hd.png",
  //   urlList: ["http://160.119.77.50/iptv/hd-tfilm.stream/playlist.m3u8"],
  //   groupName: "PREMIUM",
  // },

  trueplookpanya: {
    channelName: "True Plook Panya",
    logo: "https://iptv36.my.to/logo/trueplookpanya.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/trueplookpanya/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  truesporthd: {
    channelName: "True Sports HD",
    logo: "https://iptv36.my.to/logo/true_sports_hd.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/truesport-hd/playlist.m3u8",
      "http://103.208.24.234:1935/thaisport/hd-tsport1.stream/chunklist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  truesporthd2: {
    channelName: "True Sports HD2",
    logo: "https://iptv36.my.to/logo/true_sports_hd2.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/true/truesport-hd2/playlist.m3u8",
      "http://103.208.24.234:1935/thaisport/hd-tsport2.stream/chunklist.m3u8",
      "https://www.we-play.tv/videos/digital-tv/ch3-hd/",
    ],
    groupName: "PREMIUM",
  },

  truesport2: {
    channelName: "True Sports 2",
    logo: "https://iptv36.my.to/logo/truesports2.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/sd-tsport2.stream/chunklist.m3u8",
    ],
    groupName: "FREE TV",
  },

  truexzyte: {
    channelName: "True X-Zyte",
    logo: "https://iptv36.my.to/logo/truexzyte.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/true-x-zyte-hd/playlist.m3u8",
    ],
    groupName: "FREE TV",
  },

  tvb: {
    channelName: "TVB Thai",
    logo: "https://iptv36.my.to/logo/tvb.png",
    urlList: [
      "https://edge6a.v2h-cdn.com/RE_HD/smil:TVB_HD_ABR.smil/playlist.m3u8",
      "https://edge6a.v2h-cdn.com:443/appt7/TDramaTV.stream_720p/iptv-ton.m3u8",
      "https://edge6a.v2h-cdn.com/m2a7/TDramaTV.stream_720p/playlist.m3u8",
    ],
    groupName: "FREE TV",
  },

  voice: {
    channelName: "Voice TV HD",
    logo: "https://iptv36.my.to/logo/voice_tv.png",
    urlList: [
      "https://edge6a.v2h-cdn.com/appt3/WOWSH.stream_720p/chunklist_w142679599.m3u8",
    ],
    groupName: "FREE TV",
  },

  warner: {
    channelName: "Warner TV HD",
    logo: "https://iptv36.my.to/logo/warner.png",
    urlList: [
      "https://dootvthai-hd.com/cmd/api/true/warner-hd/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core108/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },
};

// let testPassedUrl = [];

const testUrl = async (url) => {
  // exception url list to not check/test
  if (
    url.includes("dootvthai-hd.com") ||
    url.includes("bugaboo.tv") ||
    url.includes("byteark.com") ||
    url.includes("doofootball.livestream-cdn.com")
  ) {
    return true;
  }
  try {
    const response = await axios.get(url, { timeout: 1000 });
    // console.log(`  / ${url}`);
    return true;
  } catch (error) {
    console.log(`  X ${url}`);
    return false;
  }
};

const generateValidUrl = async (streamingData) => {
  console.log(`Checking url for ${streamingData.channelName}`);

  // find invalidUrlList
  let invalidUrlList = [];
  await Promise.all(
    streamingData.urlList.map(async (url) => {
      let result = await testUrl(url);
      if (result === false) {
        invalidUrlList.push(url);
      }
    })
  );

  // create validUrlList
  streamingData.validUrlList = [];
  for (let i = 0; i < streamingData.urlList.length; i++) {
    let url = streamingData.urlList[i];
    if (invalidUrlList.includes(url)) {
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
  let logo = streamingData.logo || "https://iptv36.my.to/logo/blank.png";
  let groupName = skip === 0 ? streamingData.groupName || "Other" : "Backup";
  let tvgId = streamingData.tvgId || "";
  let urlList = streamingData.validUrlList || [];
  let url = skip < urlList.length ? urlList[skip] : `${urlList[0]}`;

  if (skip > 0) channelNameComponent.push("Backup");
  let channelName = channelNameComponent.join(" ");

  return { channelName, logo, groupName, tvgId, url };
};

module.exports = getStreamingInfo;
