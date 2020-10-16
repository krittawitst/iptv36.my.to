const axios = require('axios');
const FormData = require('form-data');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getEpgDataFromNbtc = async () => {
  // send request
  let rawData = {};
  try {
    const epgUrl =
      'http://dtvguide.nbtc.go.th/NbtcMobileWebService/nbtc.mobile.service/epgservice/getAllChannelTemp';
    const response = await axios.post(epgUrl);
    rawData = response.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  // get program start now + 2 days
  let currentDatetime = new Date();
  let currentDatetimePlus2Days = new Date(currentDatetime.getTime() + 86400 * 2 * 1000);

  // process data
  let epgData = [];
  for (let result of rawData.results) {
    let channelNo = parseInt(result.channelNo);
    let tvgId = `th-dtv${channelNo}.iptv36.my.to`;
    for (let program of result.programOfChannel) {
      let programStart = new Date(program.pgBeginTimeLong * 1000);
      let programEnd = new Date(program.pgEndTimeLong * 1000);
      if (programEnd < currentDatetime || programStart > currentDatetimePlus2Days) {
        continue;
      }
      let programStartStr = `${programStart
        .toISOString()
        .replace(/-|:|T/g, '')
        .replace('.000Z', '')} -0000`;
      let programEndStr = `${programEnd
        .toISOString()
        .replace(/-|:|T/g, '')
        .replace('.000Z', '')} -0000`;
      let programTitle = program.pgTitle ? program.pgTitle.trim() : 'No Program Name';
      let programDescription = undefined;
      if (
        program.pgDesc &&
        program.pgDesc.trim() &&
        program.pgDesc.trim() !== programTitle &&
        ![1, 29].includes(channelNo) // tv5 and mono29 have useless programDescription
      ) {
        programDescription = program.pgDesc.trim();
      }
      epgData.push({
        programStartStr,
        programEndStr,
        tvgId,
        programTitle,
        programDescription,
      });
    }
  }
  return epgData;
};

const getEpgDataFromAisPlay = async () => {
  // mapping tvg id
  let channelIdToTvgId = {
    '5efdd162fbb0045345ef2b61': 'th-dtv4.iptv36.my.to',
    '5ee1eb4d0f24872fd951d196': 'paramount.iptv36.my.to',
    '597e004b7ed5a24e46f6725a': 'warnertv.iptv36.my.to',
    '5e44faeeaae73158d325f8f9': 'hitsmovies.iptv36.my.to',
    '597bd2a07ed5a24e46f6724f': 'm.iptv36.my.to',
    '596716e6bf6aee05dcdfc119': 'voice.iptv36.my.to',
    '5e69984f609ced33cfa4e734': 'bein1.iptv36.my.to',
    '5e699a69bf6aee30a499dc9b': 'bein2.iptv36.my.to',
    '5a52f069aae731507f5387bb': 'cartoonnetwork.iptv36.my.to',
    '5ee1ecafb544d498b9d1d2e8': 'nickelodeon.iptv36.my.to',
    '597d21477ed5a24e46f67258': 'cartoonclub.iptv36.my.to',
    '5e6215e6d817de33506cedf7': 'discoveryasia.iptv36.my.to',
  };

  // build parameter
  let currentDatetime = new Date();
  let currentDatetimePlus7Hrs = new Date(currentDatetime.getTime() + 7 * 60 * 60 * 1000);
  let currentDatetimePlus2Days7Hrs = new Date(currentDatetimePlus7Hrs.getTime() + 86400 * 2 * 1000);
  let startBkkDateStr = currentDatetimePlus7Hrs.toISOString().slice(0, 10);
  let startBkkTimeStr = currentDatetimePlus7Hrs.toISOString().slice(11, 16) + ':00';
  let endBkkDateStr = currentDatetimePlus2Days7Hrs.toISOString().slice(0, 10);
  let endBkkTimeStr = currentDatetimePlus2Days7Hrs.toISOString().slice(11, 16) + ':00';

  // send request
  let rawData = {};
  try {
    let epgUrl = `https://aisplay.ais.co.th/epg/?start_date=${startBkkDateStr}&end_date=${endBkkDateStr}&start_time=${startBkkTimeStr}&end_time=${endBkkTimeStr}&items=`;
    epgUrl += Object.keys(channelIdToTvgId).join();
    const response = await axios.get(epgUrl);
    rawData = response.data;
  } catch (error) {
    console.log(error);
  }

  // process data
  let epgData = [];
  for (let item of rawData.items) {
    let tvgId = channelIdToTvgId[item.parent];
    let programStartStr = `${item.date}${item.start}`.replace(/-|:|T/g, '') + ' +0700';
    let programEndStr = `${item.date_end}${item.end}`.replace(/-|:|T/g, '') + ' +0700';
    let programTitle = item.title ? item.title.trim() : 'No Program Name';
    let programDescription = undefined;
    if (item.synopsis && item.synopsis.trim() && item.synopsis !== item.title) {
      programDescription = item.synopsis.trim();
    }
    epgData.push({
      programStartStr,
      programEndStr,
      tvgId,
      programTitle,
      programDescription,
    });
  }
  return epgData;
};

const getEpgDataFromTrueVisions = async () => {
  let currentDatetime = new Date();
  let currentDatetimePlus7Hrs = new Date(currentDatetime.getTime() + 7 * 60 * 60 * 1000);
  let currentDatetimePlus1Days7Hrs = new Date(currentDatetimePlus7Hrs.getTime() + 86400 * 1000);
  let bkkDateStr = currentDatetimePlus7Hrs.toISOString().slice(0, 10);
  let bkkDatePlus1DaysStr = currentDatetimePlus1Days7Hrs.toISOString().slice(0, 10);

  // mapping tvg id
  let pageToTvgId = {
    '#page3': 'foxmovies.iptv36.my.to',
    '#page4': 'foxactionmovies.iptv36.my.to',
    '#page5': 'foxfamilymovies.iptv36.my.to',
    '#page16': 'foxthai.iptv36.my.to',
  };

  // send request
  const epgUrl = 'http://tvsmagazine.com/schedule_th.php';
  let rawData = {};
  let formData = new FormData();
  formData.append('btn_next', '2020-10-17');
  formData.append('category', 'Movies');
  formData.append('channel', '1');
  try {
    const response = await axios.post(epgUrl, formData, { header: formData.getHeaders() });
    rawData = response.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  // process data
  const dom = new JSDOM(rawData, {
    url: epgUrl,
    contentType: 'text/html',
    includeNodeLocations: true,
    storageQuota: 10000000,
  });

  let epgData = [];
  for (let [pageDiv, tvgId] of Object.entries(pageToTvgId)) {
    for (let timeDiv of ['div.before-18h', 'div.after-18h']) {
      let parentOfProgramRowDiv = dom.window.document.body.querySelector(`${pageDiv} ${timeDiv}`);
      for (let programRowDiv of parentOfProgramRowDiv.children) {
        if (programRowDiv.querySelector('div.p-time')) {
          let programStartTime = programRowDiv.querySelector('div.p-time').innerHTML;
          let programStartStr =
            `${bkkDateStr}${programStartTime}00`.replace(/-|:|T/g, '') + ' +0700';
          let programTitle = programRowDiv.querySelector('span.p-title').innerHTML;
          let programSubtitle = programRowDiv.querySelector('span.p-type-year-genre').innerHTML;
          let programDescription = programRowDiv.querySelector('span.p-synopsis').innerHTML;

          epgData.push({
            programStartStr,
            programEndStr: null,
            tvgId,
            programTitle,
            programSubtitle,
            programDescription,
          });
        }
      }
    }
  }

  return epgData;
};

const getEpgData = async () => {
  // EPG
  console.log(`Fetching epg data from NBTC`);
  const epgDataFromNbtc = await getEpgDataFromNbtc();

  console.log(`Fetching epg data from AISPLAY`);
  const epgDataFromAisPlay = await getEpgDataFromAisPlay();

  console.log(`Fetching epg data from TrueVisions`);
  const epgDataFromTrueVisions = await getEpgDataFromTrueVisions();

  let mergedEpgData = [...epgDataFromNbtc, ...epgDataFromAisPlay, ...epgDataFromTrueVisions].sort(
    (item1, item2) => item1.tvgId - item2.tvgId || item1.programStartStr - item2.programStartStr
  );
  return mergedEpgData;
};

module.exports = getEpgData;
