const axios = require('axios');
const https = require('https');
const FormData = require('form-data');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getEpgDataFromNbtc = async () => {
  console.log(`Fetching epg data from NBTC...`);

  // mapping tvg id
  let channelNoToChannelKey = {
    '02': 'nbt',
    '03': 'thaipbs',
    '05': 'tv5',
    10: 'tptv',
    16: 'tnn16',
    18: 'jkn18',
    22: 'nation',
    23: 'workpoint',
    24: 'true4u',
    25: 'gmm25',
    27: 'ch8',
    29: 'mono29',
    30: 'mcot',
    31: 'one',
    32: 'thairath',
    33: 'ch3',
    34: 'amarin',
    35: 'ch7',
    36: 'pptv',
  };

  // send request
  let rawData = {};
  try {
    const epgUrl = 'https://dttguide.nbtc.go.th/BcsEpgDataServices/BcsEpgDataController/getProgramDataWeb';
    const response = await axios.post(epgUrl, {
      channelType: '1',
    });
    rawData = response.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  // get program start now + 4 days
  let currentDatetime = new Date();
  let currentDatetimePlus96Hrs = new Date(currentDatetime.getTime() + 96 * 3600 * 1000);

  // process data
  let epgData = [];
  for (let program of rawData.results) {
    if (!(program.channelNo in channelNoToChannelKey)) {
      continue;
    }

    let channelKey = channelNoToChannelKey[program.channelNo];

    const [day, month, year] = program.pgDate.split('-');
    let programStart = new Date(`20${year}-${month}-${day}T${program.pgBeginTime}+07:00`);
    let programEnd = new Date(`20${year}-${month}-${day}T${program.pgEndTime}+07:00`);
    if (programEnd < currentDatetime || programStart > currentDatetimePlus96Hrs) {
      continue;
    }
    let programStartStr = `20${year}${month}${day}${program.pgBeginTime.replace(/:/g, '')} +0700`;
    let programEndStr = `20${year}${month}${day}${program.pgEndTime.replace(/:/g, '')} +0700`;
    let programTitle = program.pgTitle ? program.pgTitle.trim() : 'No Program Name';
    let programDescription = undefined;
    if (
      program.pgDesc &&
      program.pgDesc.trim() &&
      program.pgDesc.trim() !== programTitle &&
      !['05', '29'].includes(program.channelNo) // tv5 and mono29 have useless programDescription
    ) {
      programDescription = program.pgDesc.trim();
    }
    epgData.push({
      programStartStr,
      programEndStr,
      channelKey,
      programTitle,
      programDescription,
    });
  }

  // console.log(`  / Fetched epg data from NBTC...`);
  return epgData;
};

const getEpgDataFromAisPlay = async () => {
  console.log('Fetching epg data from AIS Play...');

  // mapping tvg id
  let channelIdToChannelKey = {
    // '596703d8bf6aee05dcdfc118': 'nbt',
    '5efdd162fbb0045345ef2b61': 'altv',
    // '597b93a97ed5a24e45c3ab13': 'thaipbs',
    // '597b89f07ed5a24e46f6724a': 'tv5',
    '627a27b26dbfe345cfc8a27f': 'tsports',
    // '597be02d7ed5a24e46f67254': 'tptv',
    // '59671d1cd817de1df19711a6': 'tnn16',
    // '597b8e8c7ed5a24e46f6724b': 'jkn18',
    // '59670ee5aae73105f56e3400': 'nation',
    // '59590b6ed817de1df1747472': 'workpoint',
    // '5959246bd817de1df1747475': 'true4u',
    // '59592d98aae7312bfffb2c8a': 'gmm25',
    // '597b85fd7ed5a24e45c3ab10': 'ch8',
    // '60811938fa3813c616f38b63': 'mono29',
    // '5efec3f10f6d9dc4b26c6e77': 'mcot',
    // '5959255eaae7312bfffb2c86': 'one',
    // '60bd9c7b497960d3f9a3e222': 'thairath',
    // '59592e08bf6aee4e3ecce051': 'ch3',
    // '596377e4aae7317871d1b632': 'amarin',
    // '5abdd28daae73161cb8ef446': 'ch7',
    // '5d4bebb6aae7315312049035': 'pptv',
    // '5fdb33c120ccacf849c813ef': 'voice',
    // '5ee1eb4d0f24872fd951d196': 'paramount',
    // '597e004b7ed5a24e46f6725a': 'warnertv',
    // '5e44faeeaae73158d325f8f9': 'hitsmovies',
    // '59ab204faae7311c5f0cc5ea': 'blueantent',
    // '597bd2a07ed5a24e46f6724f': 'm',
    // '5e69984f609ced33cfa4e734': 'bein1',
    // '5e699a69bf6aee30a499dc9b': 'bein2',
    // '5a52f069aae731507f5387bb': 'cartoonnetwork',
    // '5d424cdbaae73145f7f2b675': 'toonee',
    // '5ee1ecafb544d498b9d1d2e8': 'nickelodeon',
    // '597d21477ed5a24e46f67258': 'cartoonclub',
    // '5e6215e6d817de33506cedf7': 'discoveryasia',
    // '597dfea47ed5a24e46f67259': 'boomerang',
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
    epgUrl += Object.keys(channelIdToChannelKey).join();
    const response = await axios.get(epgUrl, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // ignore Unable to verify the first certificate error
      }),
    });
    rawData = response.data;
  } catch (error) {
    console.log(error);
  }

  // process data
  let epgData = [];

  if (rawData.items == undefined) {
    return [];
  }

  for (let item of rawData.items) {
    let channelKey = channelIdToChannelKey[item.parent];
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
      channelKey,
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

  // mapping tvg id
  let categoryToPageToChannelKey = {
    mov: {
      '#page1': 'truefilm',
      '#page3': 'foxmovies',
      '#page4': 'foxactionmovies',
      '#page5': 'foxfamilymovies',
      '#page16': 'foxthai',
    },
    ent: {
      '#page2': 'axn',
    },
    sport: {
      '#page1': 'premier1',
      // '#page2': 'premier2',
      '#page3': 'truesporthd',
      '#page4': 'truesporthd2',
      '#page12': 'truesport2',
    },
    know: {
      '#page2': 'history',
      '#page3': 'history2',
      '#page4': 'natgeo',
      '#page11': 'bbcearth',
    },
    kids: {
      '#page1': 'truesparkplay',
      '#page2': 'truesparkjump',
      '#page3': 'disneyxd',
      '#page4': 'disney',
    },
  };

  let epgData = [];

  for (let [category, pageToChannelKey] of Object.entries(categoryToPageToChannelKey)) {
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

    for (let [pageDiv, channelKey] of Object.entries(pageToChannelKey)) {
      let epgDataForThisChannel = [];

      for (let timeDiv of ['div.before-18h', 'div.after-18h']) {
        let parentOfProgramRowDiv = dom.window.document.body.querySelector(`${pageDiv} ${timeDiv}`);

        try {
          for (let programRowDiv of parentOfProgramRowDiv.children) {
            if (programRowDiv.querySelector('div.p-time')) {
              let programStartTime = programRowDiv.querySelector('div.p-time').innerHTML.trim();
              let programStartStr = `${bkkDateStr}${programStartTime}00`.replace(/-|:|T/g, '') + ' +0700';
              let programTitle =
                programRowDiv.querySelector('div.p-title') &&
                htmlEntityDecode(programRowDiv.querySelector('div.p-title').innerHTML.trim());
              let programSubtitle =
                programRowDiv.querySelector('div.p-type-year-genre') &&
                htmlEntityDecode(programRowDiv.querySelector('div.p-type-year-genre').innerHTML.trim());
              let programDescription =
                programRowDiv.querySelector('div.p-synopsis') &&
                htmlEntityDecode(programRowDiv.querySelector('div.p-synopsis').innerHTML.trim());

              epgDataForThisChannel.push({
                programStartStr,
                programEndStr: null,
                channelKey,
                programTitle,
                programSubtitle: programSubtitle !== '::' ? programSubtitle : null,
                programDescription,
              });
            }
          }
        } catch (error) {
          console.error(`something went wrong when building epg for ${channelKey}`);
          console.error(error);
        }
      }

      // sort program and fill current programEndStr with next programStartStr
      let sortedEpgDataForThisChannel = epgDataForThisChannel.sort((item1, item2) =>
        item1.programStartStr > item2.programStartStr ? 1 : item1.programStartStr < item2.programStartStr ? -1 : 0
      );

      for (let i = 0; i < sortedEpgDataForThisChannel.length; i++) {
        currentProgram = sortedEpgDataForThisChannel[i];
        nextProgram = i + 1 < sortedEpgDataForThisChannel.length ? sortedEpgDataForThisChannel[i + 1] : null;

        if (nextProgram) {
          currentProgram.programEndStr = nextProgram.programStartStr;
        } else {
          currentProgram.programEndStr =
            currentProgram.programStartStr.slice(0, 8) + '235959' + currentProgram.programStartStr.slice(14);
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
  let epgDataFromNbtcPromise = []; // getEpgDataFromNbtc();
  let epgDataFromAisPlayPromise = getEpgDataFromAisPlay();
  let epgDataFromTrueVisionsPromise = []; // getEpgDataFromTrueVisions();

  const [epgDataFromNbtc, epgDataFromAisPlay, epgDataFromTrueVisions] = await Promise.all([
    epgDataFromNbtcPromise,
    epgDataFromAisPlayPromise,
    epgDataFromTrueVisionsPromise,
  ]);

  let mergedEpgData = [...epgDataFromNbtc, ...epgDataFromAisPlay, ...epgDataFromTrueVisions];
  mergedEpgData = mergedEpgData.sort((item1, item2) =>
    item1.channelKey > item2.channelKey
      ? 1
      : item1.channelKey < item2.channelKey
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
