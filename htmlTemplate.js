const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const name = "Vishwas";
    console.log(req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    let html = fs.readFileSync('./index.html','utf-8');
    html = html.replace("{{name}}",name);
    res.end(html);
});

server.listen(3000, ()=>{
    console.log("server is running");
})