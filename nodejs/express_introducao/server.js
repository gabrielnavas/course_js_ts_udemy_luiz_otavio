const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/">
            nome do cliente:
            <input type="text" name="nome">
            <button>ir</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('recebi o formulario.');
})



app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando na porta 3000');
});