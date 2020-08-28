const paginaInicial = (req, res) => {
    res.render('index');
};

const trataPost = (req, res) => {
    res.send('sou a nova rota de post');
};

module.exports = { paginaInicial, trataPost };