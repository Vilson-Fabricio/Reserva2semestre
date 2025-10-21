const express = require('express');
const exphbs = require("express-handlebars");
const usuarioRoutes = require("./Routes/usuarioRoutes");
const usuarioController = require('./Controller/usuarioController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Rotas
app.get('/', (req, res) => {
    res.render("/home");
});

app.use("/usuario", usuarioRoutes);

app.get("/areaLogada", usuarioController.verificaAutenticacao, (req, res) => {
    res.json({
        msg: "Você está logado com o ID " + req.usuarioId + " e pode acessar este recurso.",
    });
});

app.get("/areaAdmin", usuarioController.verificaAutenticacao, usuarioController.verificaIsAdmin, (req, res) => {
    res.json({
        msg: "Você é um adminstrador!",
    });
});

module.exports = app;
