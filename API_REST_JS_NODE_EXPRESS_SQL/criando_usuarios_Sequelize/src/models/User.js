const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const bcryptjs = require('bcryptjs');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                validade: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
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
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                allowNull: false,
                defaultValue: '',
                validade: {
                    len: {
                        args: [6, 50],
                        msg: 'A senha precisa ter entre 6 e 50 caracteres.',
                    }
                }
            },
        }, {
            sequelize,
            tableName: 'usuarios'
        })

        this.addHook('beforeSave', async user => {
            user.password_hash = await bcryptjs.hash(user.password, 8);
        });

        return this;
    }
}


module.exports = User;