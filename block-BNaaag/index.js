let fs = require(`fs`);

fs.readFile(`index.md`, (error, content) => {
  console.log(error, content.toString());
});

let buffer = Buffer.alloc(30);
buffer.write(`Welcome to AltCampus`);
console.log(buffer.toString());
