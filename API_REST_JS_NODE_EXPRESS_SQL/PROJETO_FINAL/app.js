const dotenv = require('dotenv');
dotenv.config();

const { resolve } = require('path');

require('./src/database');

const express = require('express');
const homeRoutes = require('./src/routes/homeRoute');
const userRoutes = require('./src/routes/userRoute');
const tokensRoutes = require('./src/routes/tokenRoute');
const alunosRoutes = require('./src/routes/alunoRoutes');
const fotosRoutes = require('./src/routes/fotoRoutes');


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares = () => {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads'))); //diretório de arquivos estáticos
    }

    routes = () => {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokensRoutes);
        this.app.use('/alunos/', alunosRoutes);
        this.app.use('/fotos/', fotosRoutes);
    }
}

module.exports = new App().app;

/*
ANOTAÇÕES

    - Criar uma migration: npx sequelize migration:create --name=nomeDaTabela
    - Migrar para o banco: npx sequelize db:migrate

    - Criar seeds: npx sequelize seed:generate --name criar-usuarios
    - Migrar para o banco os seed: npx sequelize db:seed:all

*/