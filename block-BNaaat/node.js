let http = require(`http`);
let fs = require(`fs`);

// GET with /

http
  .createServer((request, response) => {
    if (request.method === `GET` && request.url === `/file`) {
      response.setHeader(`Content-type`, `tesxt/html`);
      fs.readFile(`node.html`, (error, content) => {
        if (error) {
          console.log(error);
        }
        console.log(content.toString());
        response.end();
      });
    } else if (request.method === `GET` && request.url === `/stream`) {
      fs.createReadStream(`node.html`).pipe(response);
    } else if (request.method === `POST` && request.url === `/about`) {
      response.write(`this is a post request`);
      response.end();
    } else {
      response.statusCode = 404;
      response.write(`Try Again`);
      response.end();
    }
  })
  .listen(5555, () => {
    console.log(`We are on post 5555`);
  });
