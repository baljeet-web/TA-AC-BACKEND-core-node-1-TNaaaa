let http = require(`http`);
let url = require(`url`);
let fs = require(`fs`);
let os = require("os");

http
  .createServer((request, response) => {
    console.log(request);
    console.log(response);
    response.end(`Khatam`);
  })
  .listen(5000, () => {
    console.log(`I am at port 5000`);
  });

http
  .createServer((request, response) => {
    response.end(`My First server in NodeJs`);
  })
  .listen(5100, () => {
    console.log(`I am on 5100`);
  });

http
  .createServer((req, res) => {
    var parsedurl = url.parse(req.url);
    var pathname = parsedurl.pathname;

    console.log(parsedurl.pathname);
  })
  .listen(2345, () => {
    console.log("Server is listening on port 2345");
  });
