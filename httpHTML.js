const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const html = fs.readFileSync('./index.html','utf-8');
    console.log(req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
});

server.listen(3000, ()=>{
    console.log("server is running");
})