const axios = require('axios');
const FormData = require('form-data');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getEpgDataFromNbtc = async () => {
  console.log(`Fetching epg data from NBTC...`);

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

  // get program start now + 1.5 days
  let currentDatetime = new Date();
  let currentDatetimePlus36Hrs = new Date(currentDatetime.getTime() + 36 * 3600 * 1000);

  // process data
  let epgData = [];
  for (let result of rawData.results) {
    let tvgId = `th-dtv${result.channelNo}.iptv36.my.to`;
    for (let program of result.programOfChannel) {
      let programStart = new Date(program.pgBeginTimeLong * 1000);
      let programEnd = new Date(program.pgEndTimeLong * 1000);
      if (programEnd < currentDatetime || programStart > currentDatetimePlus36Hrs) {
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
        !['01', '29'].includes(result.channelNo) // tv5 and mono29 have useless programDescription
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

  // console.log(`  / Fetched epg data from NBTC...`);
  return epgData;
};

const getEpgDataFromAisPlay = async () => {
  console.log('Fetching epg data from AIS Play...');

  // mapping tvg id
  let channelIdToTvgId = {
    '5efdd162fbb0045345ef2b61': 'th-dtv04.iptv36.my.to',
    '5ee1eb4d0f24872fd951d196': 'paramount.iptv36.my.to',
    '597e004b7ed5a24e46f6725a': 'warnertv.iptv36.my.to',
    '5e44faeeaae73158d325f8f9': 'hitsmovies.iptv36.my.to',
    // '597bd2a07ed5a24e46f6724f': 'm.iptv36.my.to',
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
  let currentDatetimePlus7Hrs = new Date(currentDatetime.getTime() + 7 * 3600 * 1000);
  let currentDatetimePlus43Hrs = new Date(currentDatetime.getTime() + 43 * 3600 * 1000);
  let startBkkDateStr = currentDatetimePlus7Hrs.toISOString().slice(0, 10);
  let startBkkTimeStr = currentDatetimePlus7Hrs.toISOString().slice(11, 16) + ':00';
  let endBkkDateStr = currentDatetimePlus43Hrs.toISOString().slice(0, 10);
  let endBkkTimeStr = currentDatetimePlus43Hrs.toISOString().slice(11, 16) + ':00';

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

  // console.log(`  / Fetched epg data from AIS Play...`);
  return epgData;
};

const htmlEntityDecode = (textStr) => {
  return textStr
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x60;/g, '`');
};

const getEpgDataFromTrueVisions = async () => {
  console.log('Fetching epg data from TrueVisions...');

  let currentDatetime = new Date();
  let currentDatetimePlus7Hrs = new Date(currentDatetime.getTime() + 7 * 60 * 60 * 1000);
  let currentDatetimePlus1Days7Hrs = new Date(currentDatetimePlus7Hrs.getTime() + 86400 * 1000);
  let bkkDateStr = currentDatetimePlus7Hrs.toISOString().slice(0, 10);
  let bkkDatePlus1DaysStr = currentDatetimePlus1Days7Hrs.toISOString().slice(0, 10);

  // mapping tvg id
  let categoryToPageToTvgId = {
    mov: {
      '#page3': 'foxmovies.iptv36.my.to',
      '#page4': 'foxactionmovies.iptv36.my.to',
      '#page5': 'foxfamilymovies.iptv36.my.to',
      '#page16': 'foxthai.iptv36.my.to',
    },
    ent: {
      '#page2': 'axn.iptv36.my.to',
    },
    sport: {
      '#page1': 'premier1.iptv36.my.to',
      '#page2': 'premier2.iptv36.my.to',
      '#page3': 'truesporthd.iptv36.my.to',
      '#page4': 'truesporthd2.iptv36.my.to',
      '#page12': 'truesport2.iptv36.my.to',
    },
    know: {
      '#page2': 'history.iptv36.my.to',
      '#page3': 'history2.iptv36.my.to',
      '#page4': 'natgeo.iptv36.my.to',
    },
    kids: {
      '#page1': 'truesparkplay.iptv36.my.to',
      '#page2': 'truesparkjump.iptv36.my.to',
      '#page3': 'disneyxd.iptv36.my.to',
    },
  };

  let epgData = [];

  for (let [category, pageToTvgId] of Object.entries(categoryToPageToTvgId)) {
    // send request
    const epgUrl = `http://tvsmagazine.com/schedule_th.php?category=${category}`;
    let rawData = '';
    try {
      const response = await axios.post(epgUrl);
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

    for (let [pageDiv, tvgId] of Object.entries(pageToTvgId)) {
      let epgDataForThisChannel = [];

      for (let timeDiv of ['div.before-18h', 'div.after-18h']) {
        let parentOfProgramRowDiv = dom.window.document.body.querySelector(`${pageDiv} ${timeDiv}`);

        try {
          for (let programRowDiv of parentOfProgramRowDiv.children) {
            if (programRowDiv.querySelector('div.p-time')) {
              let programStartTime = programRowDiv.querySelector('div.p-time').innerHTML.trim();
              let programStartStr =
                `${bkkDateStr}${programStartTime}00`.replace(/-|:|T/g, '') + ' +0700';
              let programTitle = htmlEntityDecode(
                programRowDiv.querySelector('span.p-title').innerHTML.trim()
              );
              let programSubtitle = htmlEntityDecode(
                programRowDiv.querySelector('span.p-type-year-genre').innerHTML.trim()
              );
              let programDescription = htmlEntityDecode(
                programRowDiv.querySelector('span.p-synopsis').innerHTML.trim()
              );

              epgDataForThisChannel.push({
                programStartStr,
                programEndStr: null,
                tvgId,
                programTitle,
                programSubtitle: programSubtitle !== '::' ? programSubtitle : null,
                programDescription,
              });
            }
          }
        } catch (error) {
          console.error(`something went wrong when building epg for ${tvgId}`);
          console.error(error);
        }
      }

      // sort program and fill current programEndStr with next programStartStr
      let sortedEpgDataForThisChannel = epgDataForThisChannel.sort((item1, item2) =>
        item1.programStartStr > item2.programStartStr
          ? 1
          : item1.programStartStr < item2.programStartStr
          ? -1
          : 0
      );

      for (let i = 0; i < sortedEpgDataForThisChannel.length; i++) {
        currentProgram = sortedEpgDataForThisChannel[i];
        nextProgram =
          i + 1 < sortedEpgDataForThisChannel.length ? sortedEpgDataForThisChannel[i + 1] : null;

        if (nextProgram) {
          currentProgram.programEndStr = nextProgram.programStartStr;
        } else {
          currentProgram.programEndStr =
            currentProgram.programStartStr.slice(0, 8) +
            '235959' +
            currentProgram.programStartStr.slice(14);
        }

        epgData.push(currentProgram);
      }
    }
  }

  // console.log(`  / Fetched epg data from TrueVisions...`);
  return epgData;
};

const getEpgData = async () => {
  // EPG
  let epgDataFromNbtcPromise = getEpgDataFromNbtc();
  let epgDataFromAisPlayPromise = getEpgDataFromAisPlay();
  let epgDataFromTrueVisionsPromise = getEpgDataFromTrueVisions();

  const [epgDataFromNbtc, epgDataFromAisPlay, epgDataFromTrueVisions] = await Promise.all([
    epgDataFromNbtcPromise,
    epgDataFromAisPlayPromise,
    epgDataFromTrueVisionsPromise,
  ]);

  let mergedEpgData = [...epgDataFromNbtc, ...epgDataFromAisPlay, ...epgDataFromTrueVisions];
  mergedEpgData = mergedEpgData.sort((item1, item2) =>
    item1.tvgId > item2.tvgId
      ? 1
      : item1.tvgId < item2.tvgId
      ? -1
      : 0 || item1.programStartStr > item2.programStartStr
      ? 1
      : item1.programStartStr < item2.programStartStr
      ? -1
      : 0
  );

  return mergedEpgData;
};

module.exports = getEpgData;
