const axios = require('axios');

exports.handler = async (event, context, callback) => {
  let streamingUrl = '';

  try {
    const response = await axios.post(
      'https://tv.trueid.net/apis/player',
      {
        channelId: 'Z9E4LnAbgjKy',
        drm: 'aes',
        lang: 'th',
      },
      {
        headers: {
          Authorization: `Basic MjU1ZGFhNDUxYzI2YzRjN2QwM2Y4NTM1YTUwYmViYTViNDllYzkyYzoyNmM0YzdkMDNmODUzNWE1MGJlYmE1YjQ5ZWM5MmM=`,
        },
      }
    );

    console.log(response);
    streamingUrl = response.stream.result;
  } catch (error) {
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
