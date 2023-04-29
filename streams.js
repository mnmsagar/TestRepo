const fs = require('fs');

const readableStream = fs.createReadStream('./file.txt','utf-8');
const writableStream = fs.createWriteStream('./file2.txt');
readableStream.on('data',(chunk)=>{
    
})