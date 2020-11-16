const axios = require('axios');

exports.handler = async (event, context, callback) => {
  console.log(event);
  console.log('='.repeat(30));
  console.log(context);
  console.log('='.repeat(30));
  console.log(callback);

  // config
  let config = {
    tnn16: 'https://www.tnnthailand.com/live',
    true4u: `https://true4u.com/live-api?ip=127.0.0.1&uid=${Math.random()
      .toString(36)
      .substring(2, 12)}&session=${Math.random().toString(36).substring(2, 12)}`,
  };

  let pageUrl = config.true4u;
  let streamingUrl = '';
  let rawData = '';

  try {
    const response = await axios.get(pageUrl);
    rawData = response.data;
  } catch (error) {
    console.error(`Cannot extract playlist for channel ${channelKey}`);
    console.error(error);
  }

  let regExpMatchArray = rawData.match(/https?:\/\/.+?\.m3u8(\?[^"]+)?/);

  if (regExpMatchArray) {
    if (!(channelKey in streamingInfo)) {
      console.error(`Not recognize channel ${channelKey}`);
      return;
    }
    streamingUrl = regExpMatchArray[0].replace('m_auto_tidl', 'w_auto_tidapp');
  }

  return {
    statusCode: 200,
    headers: {
      // location: 'https://www.google.co.th',
    },
    body: `Hi ${streamingUrl}`,
  };
};
