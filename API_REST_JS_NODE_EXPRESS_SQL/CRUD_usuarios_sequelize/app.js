const dotenv = require('dotenv');
dotenv.config();

require('./src/database');

const express = require('express');
const homeRoutes = require('./src/routes/homeRoute');
const userRoutes = require('./src/routes/userRoute');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares = () => {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes = () => {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
    }
}

module.exports = new App().app;

/*
ANOTAÇÕES

Criar uma migration: npx sequelize migration:create --name=nomeDaTabela
Migrar para o banco: npx sequelize db:migrate


*/