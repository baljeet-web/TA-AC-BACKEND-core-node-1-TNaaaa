let area = require(`./area`);

console.log(area.circle(10));
console.log(area.square(10));
console.log(area.rectangle(10, 10));

let buffer = Buffer.alloc(12);
buffer.write(`Baljeet Singh Gandhi`);
console.log(buffer.toString());
