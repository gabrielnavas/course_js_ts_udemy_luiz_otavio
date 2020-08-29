const paginaInicial = (req, res, next) => {
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