const router = require("express").Router();

const usuarioController = require('../Controller/usuarioController');

router.post("/cadastrar", usuarioController.cadastrar);

router.post("/login", usuarioController.login);

module.exports = router;