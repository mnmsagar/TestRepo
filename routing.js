const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url === '/about'){
        res.end()
    }
});

server.listen(3000, ()=>{
    console.log("Server is running");
}) 