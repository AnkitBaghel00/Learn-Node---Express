const http = require('http');
http.createServer((req, resp) => {
    resp.write("I am Ankit");
resp.end('hello world');
}).listen(3000);    