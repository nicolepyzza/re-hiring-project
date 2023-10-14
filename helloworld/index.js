"use strict";

export const handler = (event, _context, callback) => {
  let Greeting = "<h1>Hello World!</h1>";

  const html = `
  <html>
    <style>
      h1 { color: #39425b; }
    </style>
    <body>
      ${Greeting}
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html,
  };

  // sending HTML back
  callback(null, response);
};

export default handler;