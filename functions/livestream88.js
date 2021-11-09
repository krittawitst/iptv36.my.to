const axios = require('axios');

exports.handler = async (event, context, callback) => {
  const streamingUrl =
    'https://nj2yx-gbi9-cdf5.googlecdncontent.com/livestream88_sport/tpf1/playlist.m3u8';
  let body = '';

  try {
    const response = await axios.get(pageUrl, {
      headers: { Referer: 'https://www.livestream88.com/' },
    });
    body = response.data;
  } catch (error) {
    return { statusCode: 404, body: `Cannot get data for channel "${channelKey}" at "${pageUrl}"` };
  }

  return {
    statusCode: 200,
    body: body,
  };
};
