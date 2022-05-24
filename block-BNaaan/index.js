let http = require(`http`);

http.createServer((request, response)=>{
    console.log(request.headers);
    console.log(request.method)
    console.log(request.url)
    response.end(`Khatam`)

}).listen(3000, `localhost`,()=>{
    console.log(`I am at port 3000`)
})