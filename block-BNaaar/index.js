let http = require(`http`);

// GET with /

http
  .createServer((request, response) => {
    if (request.method === `GET` && request.url === `/`) {
      response.write(`Welcome to Homepage`);
      response.end();
    } else if (request.method === `GET` && request.url === `/about`) {
      response.write(`this is all about NodeJS`);
      response.end();
    } else if(request.method === `POST` && request.url === `/about` ){
        response.write(`this is a post request`)
        response.end();
    } else {
        response.statusCode = 404;
        response.write(`Try Again`);
        response.end();
    }
  })
  .listen(3000, () => {
    console.log(`We are on post 3000`);
  });
