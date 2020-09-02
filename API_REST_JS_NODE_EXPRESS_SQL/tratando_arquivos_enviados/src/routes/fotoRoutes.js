const { Router } = require('express');

const router = new Router();

const fotoController = require('../controllers/FotoController');


router.post('/', fotoController.store);


module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um novo -> POST 
delete -> apaga um novo -> DELEE
show -> mostra um novo -> GET
update -> atualiza um  -> PATCH ou PUT
*/