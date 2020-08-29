const HomeModel = require('../models/HomeModel');


const paginaInicial = (req, res, next) => {
    // HomeModel.create({
    //     titulo: 'Minha pagina',
    //     descricao: 'Descricao legal!!',
    // })
    //     .then(dados => console.log(dados))
    //     .catch(err => console.log(err));
    res.render('index');
    next();
};

const trataPost = (req, res) => {

    if(req.body.texto) {
        return res.send(`envou o nome ${req.body.texto}`);
    }

    res.send();
};

module.exports = { paginaInicial, trataPost };