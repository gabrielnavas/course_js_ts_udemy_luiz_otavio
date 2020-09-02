const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                validade: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 50 caracteres.',
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                validade: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo sobrenome deve ter entre 3 e 50 caracteres.',
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                unique: {
                    msg: 'Email já existe.'
                },
                validade: {
                    isEmail: {
                        msg: 'Email inválido.',
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: '',
                validade: {
                    isInt: {
                        msg: 'Campo idade deve ser um número.',
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso precisa ser um número.',
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Altura precisa ser um número.',
                    }
                }
            },
        }, {
            sequelize,
            tableName: 'alunos'
        })
    }
}


module.exports = Aluno;