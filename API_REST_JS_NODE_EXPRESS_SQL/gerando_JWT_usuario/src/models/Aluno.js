const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
        }, {
            sequelize,
            tableName: 'alunos'
        })
    }
}


module.exports = Aluno;