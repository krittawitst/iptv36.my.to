const axios = require('axios');

exports.handler = async (event, context, callback) => {
  // config
  let config = {
    tnn16hd: `https://www.tnnthailand.com/live-api/?ip=127.0.0.1&uid=${Math.random()
      .toString(36)
      .substring(2, 12)}&session=${Math.random().toString(36).substring(2, 12)}`,
    true4uhd: `https://true4u.com/live-api/signer-url?prefix=/live`,
  };

  let channel = event.queryStringParameters.channel;

  if (!Object.keys(config).includes(channel)) {
    return { statusCode: 404, body: 'Parameter "channel" is required and it must be valid value.' };
  }

  let pageUrl = config[channel];
  let streamingUrl = '';
  let rawData = '';

  try {
    const response = await axios.get(pageUrl);
    rawData = response.data;

    if (channel === 'tnn16hd') {
      let regExpMatchArray = rawData.match(/https:\/\/.[^"']+?\.m3u8(\?[^"']+)?/);
      if (regExpMatchArray) {
        streamingUrl = regExpMatchArray[0]
          .replace('%3D%3D', '')
          .replace('m_auto_tidl', 'w_auto_tidapp');
      }
    } else if (channel === 'true4uhd') {
      streamingUrl = rawData; //.replace('playlist.m3u8', 'pl_720p/index.m3u8');
    }

    console.log(`request ${event.queryStringParameters.channel}\nreturn ${streamingUrl}`);
    console.log('='.repeat(20));
  } catch (error) {
    if (channel === 'tnn16hd') {
      streamingUrl = 'http://freelive2.inwstream.com:1935/freelive-edge/tnn24/playlist.m3u8';
    } else if (channel === 'true4uhd') {
      streamingUrl = 'http://freelive.inwstream.com:1935/freelive-edge/true4u/playlist.m3u8';
    }
    console.error(`request ${event.queryStringParameters.channel}\nreturn ${error}`);
    console.error('='.repeat(20));
  }

  return {
    statusCode: 302,
    headers: {
      location: streamingUrl,
    },
    body: `Go to ${streamingUrl}`,
  };
};
