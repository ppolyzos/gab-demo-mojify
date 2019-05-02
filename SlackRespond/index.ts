import * as querystring from 'querystring';

export function index(context, req) {
  context.log(`Slack Respond HTTP trigger`);

  context.res = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  };

  const { text } = querystring.parse(req.body);

  let message = 'Your mojified image is...';
  if (!text) {
    message = 'You must provide an image to mojify';
  }

  const mojifyUrl = req.originalUrl.substr(0, req.originalUrl.lastIndexOf('/')) + '/Mojify';

  context.res.body = {
    response_type: 'in_channel',
    text: message,
    attachments: [
      {
        image_url: `${mojifyUrl}?imageUrl=${text}`
      }
    ]
  };

  context.done();
}
