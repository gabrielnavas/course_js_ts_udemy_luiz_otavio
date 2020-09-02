const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

// todos models
const Aluno = require('../models/Aluno');
const User = require('../models/User');
const Foto = require('../models/Foto');

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach( model => model.init(connection) ); // add connect pra todos models
 
models.forEach( model => model.associate && model.associate(connection.models) ); // add os models para as associações
