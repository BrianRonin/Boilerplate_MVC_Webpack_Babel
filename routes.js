const express = require("express");
const route = express.Router();

/**
 * Controllers
 */
const homeController = require("./src/controllers/homeController");
//OBS: agora diferente de app.get, app = express()
// é route.get, route = express.Router()
route.get("/", homeController.home);
route.post("/", homeController.trataPost);

const testeController = require("./src/controllers/testeController");
route.get("/teste/:nome?/:sobrenome?", testeController.parametros);

const contatoController = require("./src/controllers/contatoController");
route.get("/contato", contatoController.home);

module.exports = route;
