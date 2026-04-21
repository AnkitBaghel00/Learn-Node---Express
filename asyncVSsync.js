const fs = require('fs');
// fs.readFile("text/Gauri.txt", "utf-8", (error, data) => {
//     if(error){
//         return false;
//     }
//     console.log(data);
// })

const data = fs.readFileSync("text/Gauri.txt", "utf-8");
console.log(data);

console.log("end script");
