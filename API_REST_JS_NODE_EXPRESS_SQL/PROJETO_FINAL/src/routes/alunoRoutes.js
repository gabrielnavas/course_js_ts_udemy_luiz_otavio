const { Router } = require('express');
const router = new Router();

const alunoController = require('../controllers/AlunoController');

const loginRequired = require('../middlewares/loginRequired');

router.get('/', alunoController.index); // pega todos
router.post('/', loginRequired, alunoController.store); // cria um
router.put('/:id', loginRequired, alunoController.update); // atualiza um
router.get('/:id', alunoController.show); // pega um
router.delete('/:id', loginRequired, alunoController.delete); // deleta um


module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um -> POST
delete -> apaga um -> DELEE
show -> mostra um -> GET
update -> atualiza um  -> PATCH ou PUT
*/