const axios = require('axios');

export default async function handler(request, response) {
  // config
  let config = {
    // tnn16hd: `https://www.tnnthailand.com/live-api/?ip=127.0.0.1&uid=${Math.random()
    //   .toString(36)
    //   .substring(2, 12)}&session=${Math.random().toString(36).substring(2, 12)}`,
    tnn16hd: `https://www.tnnthailand.com/content-public-api/signer-url?prefix=/live/`,
    true4uhd: `https://true4u.com/live-api/signer-url?prefix=/live`,
  };

  let channel = request.query.channel;

  if (!channel || !Object.keys(config).includes(channel)) {
    response.status('404').send('Parameter "channel" is required and it must be valid value.');
    return;
  }

  let pageUrl = config[channel];
  let streamingUrl = '';
  let rawData = '';

  try {
    const fetchedResponse = await axios.get(pageUrl);
    rawData = fetchedResponse.data;

    if (channel === 'tnn16hd') {
      // let regExpMatchArray = rawData.match(/https:\/\/.[^"']+?\.m3u8(\?[^"']+)?/);
      // if (regExpMatchArray) {
      //   streamingUrl = regExpMatchArray[0]
      //     .replace('%3D%3D', '')
      //     .replace('m_auto_tidl', 'w_auto_tidapp');
      // }
      streamingUrl = rawData;
    } else if (channel === 'true4uhd') {
      streamingUrl = rawData.replace('playlist.m3u8', 'pl_720p/index.m3u8');
    }

    console.log(`request ${request.query.channel}\nreturn ${streamingUrl}`);
    console.log('='.repeat(20));
  } catch (error) {
    console.error(`request ${request.query.channel}\nreturn ${error}`);
    console.error('='.repeat(20));
  }

  response.redirect(302, streamingUrl);
}
