const twitch = require('twitch-m3u8-jeanouina');

export default async function handler(request, response) {
  let channel = request.query.channel;

  if (!channel) {
    response.status('404').send('Parameter "channel" is required and it must be valid value.');
    return;
  }

  let streamingUrl = 'https://global-media.sooplive.com/live/video/workpoint/1920x1080/playlist.m3u8'

  // let data;
  // try {
  //   data = await twitch.getStream(channel);
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // } finally {
  //   console.log('='.repeat(20));
  // }

  // let streamingUrl;
  // if (Array.isArray(data) && data.length > 0) {
  //   streamingUrl = data[0].url;
  // }

  if (streamingUrl) response.redirect(302, streamingUrl);
  else response.status('404').send('Not Found');
}
