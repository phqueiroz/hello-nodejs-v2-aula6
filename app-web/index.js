const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.send("Hello world!");
});

app.post("/dosave", (req, res) => {
    console.log("Os dados do formulario foram recebidos");
    console.log(req.body);
    res.send("<h1><a href='index.html'>Voltar</a></h1>");
});

app.post("/advinha", (req, res) => {
    console.log("Numero recebido!");
    console.log(req.body);
    res.send("<h1><a href='numero.html'>Voltar</a></h1>");
});

app.get("/convidados", (req, res) => {
    let convs = [{nomeconvidado: "Maria"}, {nomeconvidado: "João"}];
    res.send(convs);
})

app.listen(3000);
console.log("app online!");