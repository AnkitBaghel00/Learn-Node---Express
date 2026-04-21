const http = require('http');

const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type","text/html");
    resp.write("<h2>Hello Ankit Baghel </h2>")
    resp.end();
})

server.listen(4800);