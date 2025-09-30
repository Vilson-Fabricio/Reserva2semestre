const express = require('express');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render("home");
    //res.send("Hello World!");
});


const usuarioRoutes = require("./Routes/usuarioRoutes");
app.use("/usuario", usuarioRoutes);

const usuarioController = require('./Controller/usuarioController');

app.get("/areaLogada", usuarioController.verificaAutenticacao, (req, res, next) => {
    res.json({
        msg: 
        "Você está logado com o ID " + req.usuarioId + " e pode acessar este recurso.",
    });
});

app.get("/areaAdmin", usuarioController.verificaAutenticacao, usuarioController.verificaIsAdmin, (req, res, next) => {
    res.json({
        msg: 
        "Você é um adminstrador!",
    });
});


app.listen(8000, (err) => {
    console.log("Aplicação rodando em localhost:8000");
});