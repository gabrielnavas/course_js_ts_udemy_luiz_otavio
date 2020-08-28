const paginaInicial = (req, res) => {
    res.send(`
        <form method="POST" action="/">
            nome do cliente:
            <input type="text" name="nome">
            <button>ir</button>
        </form>
    `);
};

const trataPost = (req, res) => {
    res.send('sou a nova rota de post');
};

module.exports = { paginaInicial, trataPost };