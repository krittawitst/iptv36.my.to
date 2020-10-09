const fs = require("fs");
const axios = require("axios");
const format = require("date-format");

const getEpgDataFromNbtc = async () => {
  // send request
  let rawData = {};
  try {
    const epgUrl =
      "http://dtvguide.nbtc.go.th/NbtcMobileWebService/nbtc.mobile.service/epgservice/getAllChannelTemp";
    const response = await axios.post(epgUrl);
    rawData = response.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  // get program start now + 2 days
  let currentDatetime = new Date();
  let currentDatetimePlusTwoDays = new Date(
    currentDatetime.getTime() + 86400 * 2 * 1000
  );

  // format raw data
  let epgData = [];
  for (let result of rawData.results) {
    let tvgTagId = `th-dtv${parseInt(result.channelNo)}.iptv36.my.to`;
    for (let program of result.programOfChannel) {
      let programStart = new Date(program.pgBeginTimeLong * 1000);
      let programEnd = new Date(program.pgEndTimeLong * 1000);
      if (
        programEnd < currentDatetime ||
        programStart > currentDatetimePlusTwoDays
      ) {
        continue;
      }
      let programStartStr = `${programStart
        .toISOString()
        .replace(/-|:|T/g, "")
        .replace(".000Z", "")} -0000`;
      let programEndStr = `${programEnd
        .toISOString()
        .replace(/-|:|T/g, "")
        .replace(".000Z", "")} -0000`;
      let programTitle = program.pgTitle
        ? program.pgTitle.trim()
        : "No Program Name";
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
    "5efdd162fbb0045345ef2b61": "th-dtv4.iptv36.my.to",
    "597e004b7ed5a24e46f6725a": "warnertv.iptv36.my.to",
    "5e44faeeaae73158d325f8f9": "hitsmovies.iptv36.my.to",
  };

  // build parameter
  let currentDatetime = new Date();
  let currentBkkDatetime = new Date(
    currentDatetime.getTime() + 7 * 60 * 60 * 1000
  );
  let currentBkkDatetimePlusTwoDays = new Date(
    currentBkkDatetime.getTime() + 86400 * 2 * 1000
  );
  let startBkkDateStr = currentBkkDatetime.toISOString().slice(0, 10);
  let startBkkTimeStr = currentBkkDatetime.toISOString().slice(11, 16) + ":00";
  let endBkkDateStr = currentBkkDatetimePlusTwoDays.toISOString().slice(0, 10);
  let endBkkTimeStr =
    currentBkkDatetimePlusTwoDays.toISOString().slice(11, 16) + ":00";

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
    let programStartStr =
      `${item.date}${item.start}`.replace(/-|:|T/g, "") + " +0700";
    let programEndStr =
      `${item.date_end}${item.end}`.replace(/-|:|T/g, "") + " +0700";
    let programTitle = item.title ? item.title.trim() : "No Program Name";
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

const getEpgData = async () => {
  // EPG
  const epgDataFromNbtc = await getEpgDataFromNbtc();
  const epgDataFromAis = await getEpgDataFromAis();
  return [...epgDataFromNbtc, ...epgDataFromAis];
};

module.exports = getEpgData;
