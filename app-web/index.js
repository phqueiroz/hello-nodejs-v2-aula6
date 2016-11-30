const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.send("Hello world!");
});

app.get("/dosave", (req, res) => {
    console.log("Os dados do formulario foram recebidos");
    console.log(req.query);
    res.send("<h1><a href='index.html'>Voltar</a></h1>");
})

app.listen(3000);
console.log("app online!");