const axios = require('axios');

exports.handler = async (event, context, callback) => {
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

    const streamingUrl = response.stream.result;
  } catch (error) {
    console.error(`request ${event.queryStringParameters.channel}\nreturn ${error}`);
    console.error('='.repeat(20));
  }

  return {
    statusCode: 302,
    headers: {
      location: strereamingUrl,
    },
    body: `Go to ${streamingUrl}`,
  };
};
