const fs = require('fs');

const fileContents = fs.readFileSync('./file.txt','utf-8');
console.log(fileContents);

fs.readFile('./file.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

fs.writeFileSync('./read.txt','Hello World');
fs.writeFile('./greet.txt','Hello Sagar',{flag :"a"},(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File Written");
    }
})