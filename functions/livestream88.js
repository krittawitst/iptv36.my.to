const axios = require('axios');

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 302,
    headers: {
      location:
        'https://nj2yx-gbi9-cdf5.googlecdncontent.com/livestream88_sport/tpf1/playlist.m3u8',
      Referer: 'https://www.livestream88.com/',
    },
    body: `Go to ${streamingUrl}`,
  };
};
