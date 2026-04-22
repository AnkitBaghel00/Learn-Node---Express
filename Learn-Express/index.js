import express from 'express';
const app = express();


app.get('/', (req, resp) => {
    resp.send("Home Page")
});

app.get('/users', (req, resp) => {
    resp.send1("Users Page")
});

app.get('/error', (req, resp) => {
    resp.send("Error Page")
});


function errorHandling(error, req, resp, next){
    resp.status(error.status || 500).send("Try after some time");
}

app.use(errorHandling)
app.listen(3000);