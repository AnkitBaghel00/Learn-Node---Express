import express from 'express';
const app = express();


// function ageCheck(req, resp, next){

//     if(!req.query.age || req.query.age < 18 ){
//         resp.send("<h1>Access Denied</h1>")
//     } else {
//         next();
//     }

// }

// app.use(ageCheck);

function ipCheck(req, resp, next){
    const ip = req.socket.remoteAddress;
    console.log(ip);
    if(ip.includes('192.168.1.11')){
        resp.send("<h1>Access Denied for this IP</h1>");
    }else {

        next();
    }
    

    

}

app.use(ipCheck);

app.get('/', (req, resp) => {
resp.send("<h1>Home Page</h1>")
})

app.get('/login', (req, resp) => {
    resp.send("<h1>Login Page</h1>")
})

app.get('/admin', (req, resp) => {
    resp.send("<h1>Admin Page</h1>")
})


app.listen(3000);