const { Router } = require('express');
const multer = require('multer');
const router = new Router();

const fotoController = require('../controllers/FotoController');
const multerConfig = require('../config/multerConfig');

const upload = multer(multerConfig);

router.post('/', upload.single('foto'), fotoController.store);


module.exports = router;

/*
PADRÃO DE MERCADO

index -> lista todos -> GET
store/create -> cria um novo -> POST 
delete -> apaga um novo -> DELEE
show -> mostra um novo -> GET
update -> atualiza um  -> PATCH ou PUT
*/