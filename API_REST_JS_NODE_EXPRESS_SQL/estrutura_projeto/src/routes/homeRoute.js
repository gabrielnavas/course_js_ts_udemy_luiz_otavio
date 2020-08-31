const { Router } = require('express');
const router = new Router();

const homeController = require('../controllers/HomeController');

router.get('/', homeController.index);


module.exports = router;