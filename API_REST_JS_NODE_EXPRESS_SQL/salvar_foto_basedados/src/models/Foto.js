const Sequelize = require('sequelize');
const Model = Sequelize.Model;

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
        }, {
            sequelize,
            tableName: 'fotos'
        })
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    }
}


module.exports = Foto;