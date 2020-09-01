const { Router } = require('express');
const router = new Router();

const tokenController = require('../controllers/TokenController');

router.post('/', tokenController.store);


module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um novo -> POST 
delete -> apaga um novo -> DELEE
show -> mostra um novo -> GET
update -> atualiza um  -> PATCH ou PUT
*/