const { builder } = require('@netlify/functions');
const axios = require('axios');

async function handler(event) {
  const eventPathRegExp = /\/aisplay\/(?<channelKey>[^/]+)$/;
  const regExpMatchArray = event.path.match(eventPathRegExp);

  if (regExpMatchArray === null) {
    let errorMessage = `Cannot extract 'channelKey' from path '${event.path}'`;
    console.error(errorMessage);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: true, errorMessage }),
    };
  }

  const { channelKey } = regExpMatchArray.groups;
  console.log({ channelKey, msg: 'new request is coming' });

  const channelKeyToCode = {
    nbt: 'B0001',
    thaipbs: 'B0014',
    tv5: 'B0007',
    tsports: 'B0129',
    tnn16: 'V0053',
    jkn18: 'B0010',
    nation: 'B0021',
    gmm25: 'B0019',
    mcot: 'B0008',
    one: 'B0012',
    thairath: 'B0013',
    ch3: 'B0003',
    amarin: 'B0017',
    ch7: 'B0018',
    pptv: 'B0022',
    topnews: 'V0033',
    boomerang: 'V0104',
    toonee: 'V0176',
    cartoonclub: 'V0100',
    mangkorn: 'V0159',
  };

  try {
    if (!channelKey) {
      throw new Error('No channelKey provided');
    }

    const code = channelKeyToCode[channelKey];
    if (!code) {
      throw new Error(`No code for channelKey ${channelKey}`);
    }

    // const response = await axios.get('https://m.kokowatv.com/t.m3u', { headers: { 'User-Agent': 'Televizo' } });
    // kokowatvData = response.data;
    kokowatvData =
      'https://58-64-56-92-rewriter.ais-vidnt.com/ais/play/anevia/live/eds/B0007/HLS/B0007.m3u8?playbackUrlPrefix=https://tr.play-rbcdn.ais.co.th:8438/&originBasicUrl=http://pl-origin.ais-vidnt.com/ais/play/anevia&tt=1263cbd0bf6d870a688c2d5db229121c&chunkHttps=true&tmid=B0007&tpbk=yncwYtolDCzNYIpm&rrt=1686985226&tmod=rfk&rsid=388f8dd2-0e10-4a96-9481-469beb90b92d&tuid=87c79d7234&cdn=redfox-https&tdid=8832ce170d28cbdbac99e3040cc9ea42&origin=anevia&tfa=f0-fc&tttl=1687071626';

    const regExp = /^https:\/\/(?<ip>.+?)-rewriter.ais-vidnt.+\.m3u8\?(?<params>.+?)$/m;
    const regExpExecArray = regExp.exec(kokowatvData);

    if (regExpExecArray === null) {
      throw new Error('regExpExecArray is null');
    }

    const url = `https://${regExpExecArray.groups.ip}-rewriter.ais-vidnt.com/ais/play/anevia/live/eds/${code}/HLS/${code}.m3u8?${regExpExecArray.groups.params}`;
    console.log({ channelKey, url });

    return {
      statusCode: 307,
      headers: {
        location: url,
        // referer: 'https://ais-vidnt.com/',
      },
      ttl: 600,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: true, errorMessage: e.message }),
    };
  }
}

exports.handler = builder(handler);
