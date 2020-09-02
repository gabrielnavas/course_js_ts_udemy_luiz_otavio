const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const appConfig = require('../config/appConfig');

class Foto extends Model {
    static init(sequelize) {
        super.init({
            originalname: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                validade: {
                    notEmpty: {
                        msg: 'Arquivo deve ter um nome.',
                    }
                }
            },
            filename: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                validade: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.',
                    }
                }
            },
            url: {
                type:Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`
                }
            }
        }, {
            sequelize,
            tableName: 'fotos'
        })
    }

    // Comentei aqui, pois foi colocado que o aluno tem muitas fotos.
    // static associate(models) {
    //     this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // }
}


module.exports = Foto;