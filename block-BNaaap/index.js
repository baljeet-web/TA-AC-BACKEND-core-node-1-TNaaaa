let http = require(`http`);

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.write(`Tata`);
    response.write(`ByeBye`);
    response.end(`Khatam`);
  })
  .listen(4444, `localhost`, () => {
    console.log(`I am at port 3000`);
  });
