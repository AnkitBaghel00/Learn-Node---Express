import express from 'express';
import path from 'path';
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));


app.get('/', (req, resp) => {
    const filePath = path.resolve('view/home.html');
    resp.sendFile(filePath);
})


app.get('/login', (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter email" name="email"/>
        <input type="password" placeholder="enter password" name="password"/>
        <button type="submit">login</button>
        </form>
        `);
})

app.post('/submit', (req, resp) => {
    console.log("user login details are : ",req.body);
    
    resp.send("Submit Page");
})

app.get('/users', (req, resp) => {
    resp.send("Users Page");
})

app.listen(3000);