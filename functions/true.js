exports.handler = async (event, context, callback) => {
  console.log(event);
  console.log('='.repeat(30));
  console.log(context);
  console.log('='.repeat(30));
  console.log(callback);
  return {
    statusCode: 302,
    headers: {
      location: 'https://www.google.co.th',
    },
    body: '',
  };
};
