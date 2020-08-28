const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/">
            nome do cliente:
            <input type="text" name="nome">
            <button>ir</button>
        </form>
    `);
});


//http://localhost:3000/testes/2/4?nome=gabriel
app.get('/testes/:id/:idd', (req, res) => {
    const params = req.params;
    const query = req.query;

    console.log(params); // { id: '2', idd: '4' }
    console.log(query); // { nome: 'gabriel' }


    res.send(`
    params: {${JSON.stringify(params)}} <br>
    query: {${JSON.stringify(query)}}`);
})

app.post('/', (req, res) => {
    console.log(req.body); // { nome: 'gabriel' }
    res.send(req.body);
})


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando na porta 3000');
});