const { timeEnd } = require("console");
let http = require(`http`);
http
  .createServer((req, res) => {
    res.end(`Khatam, tata, byebye`)
  })
  .listen(4000, `localhost`, () => {
    console.log(`The website will be hosted on 4000 port`);
  });
