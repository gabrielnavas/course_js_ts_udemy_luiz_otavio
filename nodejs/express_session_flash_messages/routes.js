const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    console.log('passei no meu middleware');
    next();
}

//rotas de home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log('fui chamado depois!!');
});
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;