const http = require('http');

http.createServer((req, res) => {
console.log(req.url);

if(req.url == "/"){
   res.write("<h1>Hello World</h1>")
} else if(req.url == "/login"){
   res.write("<h1>Login Page</h1>")
} else{
   res.write("other page")
}


res.end();
}).listen(3000);