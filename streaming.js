const streamingInfo = {
  altv: {
    channelName: "ALTV HD",
    logo: "https://iptv36.my.to/logo/altv.png",
    urlList: ["https://iptv36.my.to/altv.m3u8"],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  amarin: {
    channelName: "Amarin TV HD",
    logo: "https://iptv36.my.to/logo/amarin.png",
    urlList: [
      "http://27.254.130.64:80/feed/chamarin/playlist.m3u8",
      "http://dootvthai-hd.com/cmd/true/Amarintv-HD/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-amarin.stream/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core13/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/amarintv_720p/chunks.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  axn: {
    channelName: "AXN HD",
    logo: "https://iptv36.my.to/logo/axn.png",
    urlList: [
      "http://ip2121.com:8081/live2/AXN_Y/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-axn.stream/playlist.m3u8",
      "https://livedoomovies.com/02_AXNHD_720p/chunklist.m3u8",
      "",
    ],
    groupName: "PREMIUM",
  },

  bbcearth: {
    channelName: "BBC Earth HD",
    logo: "https://iptv36.my.to/logo/bbc_earth.jpg",
    urlList: ["http://160.119.77.50/iptv/sd-bbcearth.stream/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  bein1: {
    channelName: "beIN Sports HD1",
    logo: "https://iptv36.my.to/logo/bein1.png",
    urlList: [
      "https://www.livedoomovies.com/02_epl1_720p/chunklist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core2/chunklist_w353411422.m3u8",
      // "http://103.208.24.234:1935/thaisport/epl-bein1.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  bein2: {
    channelName: "beIN Sports HD2",
    logo: "https://iptv36.my.to/logo/bein2.png",
    urlList: [
      "https://www.livedoomovies.com/02_epl2_720p/chunklist.m3u8",
      // "http://103.208.24.234:1935/thaisport/epl-bein2.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  blueantent: {
    channelName: "Blue Ant ENT HD",
    logo: "https://iptv36.my.to/logo/blue_ant.jpg",
    urlList: [
      "http://160.119.77.50/iptv/hd-rtlcbs.stream/playlist.m3u8",
      "http://210.210.155.35:80/session/676c25ba-724e-11e9-834b-8ac28bf32f5a/dr9445/h/h16/01.m3u8",
    ],
    groupName: "PREMIUM",
  },

  cartoonclub: {
    channelName: "Cartoon Club",
    logo: "https://iptv36.my.to/logo/cartoonclub.png",
    urlList: [
      "http://edge4-bkk.3bb.co.th:1935/CartoonClub_Livestream/cartoonclub_480P.stream/chunklist.m3u8",
    ],
    groupName: "FREE TV",
  },

  cartoonnetwork: {
    channelName: "Cartoon Network HD",
    logo: "https://iptv36.my.to/logo/cnhd.png",
    urlList: [
      "https://www.livedoomovies.com/02_CartoonNetwork_720p/chunklist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  ch2: {
    channelName: "CH2 RS",
    logo: "https://iptv36.my.to/logo/ch2.png",
    urlList: ["http://stream.rs.co.th/ch2-hi/index.m3u8"],
    groupName: "FREE TV",
  },

  ch3: {
    channelName: "CH3 HD",
    logo: "https://iptv36.my.to/logo/ch3.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/api/true/CH3-HD/playlist.m3u8",
      "https://www.livedoomovies.com/02_3HD_720p/chunklist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/3hd_720p/chunks.m3u8",
      "http://27.254.130.64/live01/ch0.m3u8?p=st",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  ch7: {
    channelName: "CH7 HD",
    logo: "https://iptv36.my.to/logo/ch7.png",
    urlList: [
      "https://cdn6.goprimetime.info//feed//ch7hd//index.m3u8",
      "https://bcovlive-a.akamaihd.net/44cc55c80fef46a8baa3a405433e63b8/ap-southeast-1/5282994675001/playlist.m3u8",
      "http://edge160.bugaboo.tv/liveedgech7_partner/smil:auto.smil/chunklist_b1210000_sleng.m3u8",
      "https://doomovielive.b-cdn.net/hd-ch7_720/index.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/7hd_720p/chunks.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  ch8: {
    channelName: "CH8 RS HD",
    logo: "https://iptv36.my.to/logo/ch8.jpg",
    urlList: [
      "https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8",
      "http://dootvthai-hd.com/cmd/api/true/CH8-HD/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/ch8_720p/playlist.m3u8",
      "http://stream.rs.co.th/ch8-hi/index.m3u8",
      "http://27.254.130.64/live01/ch15.m3u8?p=st",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
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

  foxactionmovies: {
    channelName: "Fox Action Movies HD",
    logo: "https://iptv36.my.to/logo/fox_action_movies.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/api/true/Fox-Action/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-foxaction.stream/playlist.m3u8",
    ],
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
      "https://www.livedoomovies.com/02_FoxMoviesTH_720p/chunklist.m3u8",
      "http://dootvthai-hd.com/cmd/api/true/Fox-Movie/playlist.m3u8",
      "http://ip2121.com:8081/live2/foxpre/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  foxthai: {
    channelName: "FOX Thai HD",
    logo: "https://iptv36.my.to/logo/fox_thai.jpg",
    urlList: [
      "https://www.livedoomovies.com/02_FoxThai_TH_720p/chunklist.m3u8",
      "http://160.119.77.50/iptv/sd-fox.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  gmm25: {
    channelName: "GMM25 HD",
    logo: "https://iptv36.my.to/logo/gmm25.png",
    urlList: [
      "https://stream-01.sg1.dailymotion.com/sec(pDyZxTTGl2hc8DOnzK37_UGZtjJhedSJ5rzYJxKz5z4)/dm/3/x6rz4t7/s/live-3.m3u8",
      "https://cdn6.goprimetime.info/feed/chgmm/index.m3u8",
      "http://183.182.100.184/live/mcothd/playlist.m3u8",
      "http://27.254.130.56:80/live01/ch11.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/gmm25_720p/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  hbo: {
    channelName: "HBO",
    logo: "https://iptv36.my.to/logo/hbo.jpg",
    urlList: [
      "https://www.livedoomovies.com/02_HBOHD_720p/chunklist.m3u8",
      "https://liveorigin01.hbogoasia.com:8443/origin/live/HBO/index.m3u8?HBO",
    ],
    groupName: "PREMIUM",
  },

  history: {
    channelName: "History HD",
    logo: "https://iptv36.my.to/logo/history.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/api/true/HISTORY-CHANNEL-HD/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core105/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  history2: {
    channelName: "History2 HD",
    logo: "https://iptv36.my.to/logo/history2.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core106/playlist.m3u8",
      "http://dootvthai-hd.com/cmd/api/true/H2/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  hitsmovie: {
    channelName: "Hits Movie HD",
    logo: "https://iptv36.my.to/logo/hitsmovie.png",
    urlList: ["https://www.livedoomovies.com/02_HITSMOVIE_720p/chunklist.m3u8"],
    groupName: "PREMIUM",
  },

  // livesky: {
  //   channelName: "Live SKY 1 HD",
  //   logo: "https://iptv36.my.to/logo/csat.jpg",
  //   urlList: [
  //     "http://27.254.149.109:8081/tumlive/ipmskyworldhd1.stream/playlist.m3u8",
  //     "http://27.254.149.109:8081/tumlive/ipmskyworldhd2.stream/playlist.m3u8",
  //     "http://27.254.149.109:8081/tumlive/ipmskyworldhd3.stream/playlist.m3u8",
  //     "http://27.254.149.109:8081/tumlive/ipmskyworldhd4.stream/playlist.m3u8",
  //   ],
  //   groupName: "FREE TV",
  // },

  idstation: {
    channelName: "ID Station",
    logo: "https://iptv36.my.to/logo/idstation.png",
    urlList: ["http://dootvthai-hd.com/cmd/api/true/idstation/playlist.m3u8"],
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

  mcot: {
    channelName: "MCOT HD",
    logo: "https://iptv36.my.to/logo/mcot.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/api/true/9MCOT-HD/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-mcot.stream/playlist.m3u8",
      "https://stream-05.sg1.dailymotion.com/sec(86G48EQSWKUUFPhHXEV5xmwnnbF33IWoa-BrdFbZd9E)/dm/3/x74wlgj/s/live-3.m3u8",
      "http://livesport2018.dyndns.tv:8080/live/mcothd/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/mcothd_720p/chunks.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  monoplus: {
    channelName: "MONO PLUS HD",
    logo: "https://iptv36.my.to/logo/monoplus.png",
    urlList: [
      "http://edge1-bkk.3bb.co.th:1935/Edge_Cloudiptv_Authen/cloudiptv_monoplus_live1.stream/playlist.m3u8?username=mTRTvdvQbtd1DsswhsZTMoZUdI8MT4W6&password=Rp93AKS1peyuyYDApZw6sThMshGL1vvO",
      "http://110.164.95.230:1935/Edge_Cloudiptv_Authen/cloudiptv_monoplus_live1.stream/chunklist_w282266064.m3u8",
      "https://edge4-bkk.3bb.co.th:9443/MonoPlus_LiveHLS/monoplusLive_HLS1080p.stream/chunklist.m3u8",
    ],
    groupName: "FREE TV",
  },

  mono29: {
    channelName: "MONO29 HD",
    logo: "https://iptv36.my.to/logo/mono29.png",
    urlList: [
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080TH.stream/chunklist_w1578972109.m3u8",
      "https://cdn6.goprimetime.info//feed//chmono29//index.m3u8",
      "https://edge2-bkk.3bb.co.th:9443/MONO29_HLS_1080P/mono29hls_1080EN.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
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
    urlList: ["https://cdn6.goprimetime.info/feed/chnation/index.m3u8"],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  nbt: {
    channelName: "NBT HD",
    logo: "https://iptv36.my.to/logo/nbt.png",
    urlList: [
      "http://122.155.92.8:1935/live/ch1_L.sdp/playlist.m3u8",
      "http://160.119.77.50/iptv/sd-nbt.stream/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/nbt_720p/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  new18: {
    channelName: "NEW 18 HD",
    logo: "https://iptv36.my.to/logo/new18.jpg",
    urlList: [
      "https://stream-03.sg1.dailymotion.com/sec(SCEOt4M5U0fVbrIPRLL54_PCNvrWmNuipQtSKgbImSc)/dm/3/x7kx5i7/s/live-3.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/new18_720p/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  news1: {
    channelName: "NEWS1 HD",
    logo: "https://iptv36.my.to/logo/news1.png",
    urlList: ["http://news1.live14.com/stream/news1_hi.m3u8"],
    groupName: "FREE TV",
  },

  one: {
    channelName: "ONE HD",
    logo: "https://iptv36.my.to/logo/one.png",
    urlList: [
      "https://iptv36.my.to/one.m3u8",
      "http://dootvthai-hd.com/cmd/api/true/ONE-HD/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/I1_CNNHD/playlist.m3u8",
      "https://one31-rlbwkq.cdn.byteark.com/live/playlist-hd.m3u8",
      // "https://cdn161.cloud-streaming.com/ilike4kin_x6/one_720p/chunks.m3u8",
      // "http://160.119.77.50/iptv/hd-gmmone.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  pptv: {
    channelName: "PPTV HD",
    logo: "https://iptv36.my.to/logo/pptv.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/true/PPTV-HD/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core1/playlist.m3u8",
      "http://27.254.130.64/live01/ch2.m3u8?p=st",
      "https://www.livedoomovies.com/02_PPTVHD_720p/chunklist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/pptv_720p/chunks.m3u8",
      "http://160.119.77.50/iptv/hd-pptv.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  premier1: {
    channelName: "Premier HD1",
    logo: "https://iptv36.my.to/logo/premier_hd1.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-1.stream/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core101/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x5/premierhd1_720/chunks.m3u8",
      "http://dootvthai-hd.com/cmd/true/ep1-1/playlist.m3u8",
      "http://160.119.77.50/iptv/epl-1.stream/playlist.m3u8",
      "http://160.119.77.116:8081/iptv/epl-1.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  premier2: {
    channelName: "Premier HD2",
    logo: "https://iptv36.my.to/logo/premier_hd2.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-2.stream/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core102/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x5/premierhd2_720/chunks.m3u8",
      "http://160.119.77.50/iptv/epl-2.stream/playlist.m3u8",
      "http://160.119.77.116:8081/iptv/epl-2.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  premier3: {
    channelName: "Premier HD3",
    logo: "https://iptv36.my.to/logo/premier_hd3.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-3.stream/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core103/playlist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x5/premierhd3_720/chunks.m3u8",
      "http://160.119.77.50/iptv/epl-3.stream/playlist.m3u8",
      "http://160.119.77.116:8081/iptv/epl-3.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  premier4: {
    channelName: "Premier HD4",
    logo: "https://iptv36.my.to/logo/premier_hd4.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-4.stream/playlist.m3u8",
      "https://www.livedoomovies.com/02_PremierHD4_720p/chunklist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x5/premierhd4_720/chunks.m3u8",
      "http://160.119.77.50/iptv/epl-4.stream/playlist.m3u8",
      "http://160.119.77.116:8081/iptv/epl-4.stream/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  premier5: {
    channelName: "Premier HD5",
    logo: "https://iptv36.my.to/logo/premier_hd5.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/epl-5.stream/playlist.m3u8",
      "https://www.livedoomovies.com/02_PremierHD5_720p/chunklist.m3u8",
      "http://160.119.77.116:8081/iptv/epl-5.stream/playlist.m3u8",
      "http://160.119.77.50/iptv/epl-5.stream/playlist.m3u8",
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

  thaipbs: {
    channelName: "Thai PBS HD",
    logo: "https://iptv36.my.to/logo/thaipbs.png",
    urlList: [
      "http://thaipbs-live.cdn.byteark.com/live/playlist_1080p/index.m3u8",
      "https://cdn6.goprimetime.info/feed/chthaipbs/index.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  thairath: {
    channelName: "Thairath TV HD",
    logo: "https://iptv36.my.to/logo/thairath.png",
    urlList: [
      "http://live.thairath.co.th/trtv2/playlist_720p/index.m3u8",
      "http://dootvthai-hd.com/cmd/true/Thairathtv-HD/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-thairath.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  tnn16: {
    channelName: "TNN16 HD",
    logo: "https://iptv36.my.to/logo/tnn16.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/true/TNN-16/playlist.m3u8",
      "http://27.254.130.64/live01/chsd_TNN_5.m3u8?p=st",
      "http://119.59.125.74/stream/totnew.php?channel_id=77774220bb8e40aa94e549e29ff3ed8a&.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/tnn24_720p/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  tptv: {
    channelName: "TPTV",
    logo: "https://iptv36.my.to/logo/tptv.png",
    urlList: [
      "http://49.231.66.85:1935/live/tptv/playlist.m3u8",
      "https://www.livedoomovies.com/02_TPTV_480p/chunklist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  true4u: {
    channelName: "True4U HD",
    logo: "https://iptv36.my.to/logo/true4u.png",
    urlList: [
      "http://dootvthai-hd.com/cmd/true/true4u/playlist.m3u8",
      "http://183.182.100.184/live/true4u/chunklist.m3u8",
      "https://livedoomovies.com/02_TRUE4U_480p/chunklist.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/true4u_720p/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },

  truefilm: {
    channelName: "True Film HD",
    logo: "https://iptv36.my.to/logo/true_film_hd.png",
    urlList: ["http://160.119.77.50/iptv/hd-tfilm.stream/playlist.m3u8"],
    groupName: "PREMIUM",
  },

  truesporthd: {
    channelName: "True Sports HD",
    logo: "https://iptv36.my.to/logo/true_sports_hd.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/hd-tsport1.stream/chunklist.m3u8",
      "http://dootvthai-hd.com/cmd/true/truesport-HD/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  truesporthd2: {
    channelName: "True Sports HD2",
    logo: "https://iptv36.my.to/logo/true_sports_hd2.png",
    urlList: [
      "http://103.208.24.234:1935/thaisport/hd-tsport2.stream/chunklist.m3u8",
      "https://www.we-play.tv/videos/digital-tv/ch3-hd/",
      "http://dootvthai-hd.com/cmd/true/truesport-HD2/playlist.m3u8",
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

  tv5: {
    channelName: "TV5 HD",
    logo: "https://iptv36.my.to/logo/tv5.png",
    urlList: [
      "http://110.170.117.27:1935/tv5hd1/vdo/playlist.m3u8",
      "http://dootvthai-hd.com/cmd/api/true/CH5-HD/playlist.m3u8",
      "http://160.119.77.50/iptv/hd-ch5.stream/playlist.m3u8",
      "http://27.254.130.64/live01/ch6.m3u8?p=st",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/5hd_720p/chunks.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
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

  universal: {
    channelName: "Universal HD (เสีย)",
    logo: "https://iptv36.my.to/logo/blank.png",
    urlList: ["https://tv4.chang55.com:446/live2/tv4ch43.stream/chunks.m3u8"],
    groupName: "PREMIUM",
  },

  up1: {
    channelName: "UP1 Movie (เสีย)",
    logo: "https://iptv36.my.to/logo/up1.jpg",
    urlList: [
      "http://27.254.149.109:8081/tumlive/upmovie.stream/playlist.m3u8",
    ],
    groupName: "FREE TV",
  },

  warner: {
    channelName: "Warner TV HD",
    logo: "https://iptv36.my.to/logo/warner.png",
    urlList: [
      "http://203.150.107.30:8081/tested2iptv/core108/playlist.m3u8",
      "http://203.150.107.30:8081/tested2iptv/core107/playlist.m3u8",
    ],
    groupName: "PREMIUM",
  },

  workpoint: {
    channelName: "Workpoint TV HD",
    logo: "https://iptv36.my.to/logo/workpoint.png",
    urlList: [
      "https://stream-01.sg1.dailymotion.com/sec(MuIaQwZ7oLftuFXhsi7R8rX-E0L4vsi93TvIJZVxH9k)/dm/3/x6g9qjj/s/live-3.m3u8",
      "http://dootvthai-hd.com/cmd/true/Workpointtv/playlist.m3u8",
      "http://27.254.130.56:80/live01/ch7.m3u8",
      "https://cdn161.cloud-streaming.com/ilike4kin_x6/workpoint_720p/playlist.m3u8",
      // "http://160.119.77.50/iptv/hd-workpoint.stream/playlist.m3u8",
    ],
    groupName: `TH DTV ${new Date().toISOString().slice(0, 16)}`,
  },
};

const getStreamingInfo = (
  channelKey,
  urlIndex = 0,
  overrideStreamingData = {}
) => {
  let streamingData = streamingInfo[channelKey] || {};
  mergedStreamingData = { ...streamingData, ...overrideStreamingData };

  let channelName = `${mergedStreamingData.channelName || "Blank"}`;
  let logo = mergedStreamingData.logo || "https://iptv36.my.to/logo/blank.png";
  let groupName = mergedStreamingData.groupName || "No group";
  let urlList = mergedStreamingData.urlList || [];
  let url =
    urlIndex < urlList.length
      ? urlList[urlIndex]
      : urlList[0]
      ? urlList[0]
      : "http://not.found";

  return { channelName, logo, groupName, url };
};

module.exports = getStreamingInfo;
