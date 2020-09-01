//importar o dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


const connectionStr = process.env.CONNECTIONSTRING;
mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(err => console.log(err));


const routes = require('./routes');
const path = require('path');

const meuMiddleware = require('./src/middlewares/myMiddlewares');
const souOutroMiddleware = require('./src/middlewares/outroMiddleware');

app.use(express.urlencoded({ extended: true }));
app.use(meuMiddleware);
app.use(souOutroMiddleware);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Executando na porta 3000');
    });
})