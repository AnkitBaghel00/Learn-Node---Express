const http = require("http");

const usersData = [
    {
        name: 'ankit',
        age: 30,
    },
     {
        name: 'sumit',
        age: 28,
    },
     {
        name: 'anil',
        age: 26,
    }
];

http.createServer((req, resp) =>{
    resp.setHeader("Content-Type", 'application/json')
    resp.write(JSON.stringify(usersData));
    resp.end();
}).listen(6009);