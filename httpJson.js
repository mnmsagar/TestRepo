const http = require('http');

const server = http.createServer((req, res)=>{
   const data ={
    firstName : "Sagar",
    lastName : "Mishra"
   }
    console.log(req.url);
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(3000, ()=>{
    console.log("server is running");
})