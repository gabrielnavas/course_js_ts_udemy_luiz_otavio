const { Router } = require('express');
const router = new Router();

const userController = require('../controllers/UserController');

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um novo -> POST 
delete -> apaga um novo -> DELEE
show -> mostra um novo -> GET
update -> atualiza um  -> PATCH ou PUT
*/