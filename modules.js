const fs = require('fs');
const os = require('os');

fs.writeFileSync("dummy.txt","trying with modules")

console.log(os.platform());
console.log(os.hostname());


console.log(process.cwd());
