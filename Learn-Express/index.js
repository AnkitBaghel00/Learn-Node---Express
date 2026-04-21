const express = require('express');

const app = express();
app.get("",(req, resp) => {

    resp.send("Hello World");
});

app.get("/contact",(req, resp) => {

    resp.send("Hello World, Contact page");
});

app.listen(3000);