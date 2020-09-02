const { Router } = require('express');
const router = new Router();

const userController = require('../controllers/UserController');

const loginRequired = require('../middlewares/loginRequired');

// nao deveria existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update); // usa id do token
router.delete('/', loginRequired, userController.delete); // usa id do token

module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um novo -> POST 
delete -> apaga um novo -> DELEE
show -> mostra um novo -> GET
update -> atualiza um  -> PATCH ou PUT
*/