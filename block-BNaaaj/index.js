let os = require(`os`);
let fs = require(`fs`);
let url = require(`url`);

console.log(`Welcome to Nodejs`);

console.log(`no. of CPUs = ${os.cpus().length}`);
console.log(`The free memory is ${(os.freemem() * 9.537) / 10000000} mbs`);
console.log(
  `The Uptime and version is ${os.uptime()} and ${os.platform()} respectively`
);

fs.readFile("app.js", (err, content) => {
  console.log(content.toString());
});

let parsedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);

console.log(parsedUrl.path);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);
