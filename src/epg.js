const axios = require('axios');

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

  // format raw data
  let epgData = [];
  for (let result of rawData.results) {
    let tvgTagId = `th-dtv${parseInt(result.channelNo)}.iptv36.my.to`;
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
      if (program.pgDesc && program.pgDesc.trim()) {
        programDescription = program.pgDesc.trim();
      }
      epgData.push({
        programStartStr,
        programEndStr,
        tvgTagId,
        programTitle,
        programDescription,
      });
    }
  }
  return epgData;
};

const getEpgDataFromAis = async () => {
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

  // format raw data
  let epgData = [];
  for (let item of rawData.items) {
    let tvgTagId = channelIdToTvgId[item.parent];
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
      tvgTagId,
      programTitle,
      programDescription,
    });
  }
  return epgData;
};

// http://tvsmagazine.com/schedule_th.php

const getEpgData = async () => {
  // EPG
  const epgDataFromNbtc = await getEpgDataFromNbtc();
  const epgDataFromAis = await getEpgDataFromAis();
  return [...epgDataFromNbtc, ...epgDataFromAis];
};

module.exports = getEpgData;
