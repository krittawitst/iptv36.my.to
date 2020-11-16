const axios = require('axios');

exports.handler = async (event, context, callback) => {
  // config
  let config = {
    tnn16: 'https://www.tnnthailand.com/live',
    true4u: `https://true4u.com/live-api?ip=127.0.0.1&uid=${Math.random()
      .toString(36)
      .substring(2, 12)}&session=${Math.random().toString(36).substring(2, 12)}`,
    fwmov: 'https://www.fwiptv.cc/player_demo.php?channel=89782',
  };

  let channel = event.queryStringParameters.channel;

  if (!Object.keys(config).includes(channel)) {
    return { statusCode: 404, body: 'Parameter "channel" is required.' };
  }

  let pageUrl = config[channel];
  let streamingUrl = '';
  let rawData = '';

  try {
    const response = await axios.get(pageUrl);
    rawData = response.data;
  } catch (error) {
    return { statusCode: 404, body: `Cannot get data for channel "${channelKey}" at "${pageUrl}"` };
  }

  let regExpMatchArray = rawData.match(/https?:\/\/.+?\.m3u8(\?[^"']+)?/);
  if (regExpMatchArray) {
    streamingUrl = regExpMatchArray[0].replace('m_auto_tidl', 'w_auto_tidapp');
  }

  console.log(`request ${event.queryStringParameters.channel}\nreturn ${streamingUrl}`);
  console.log('='.repeat(20));

  return {
    statusCode: 302,
    headers: {
      location: streamingUrl,
    },
    body: `Go to ${streamingUrl}`,
  };
};
