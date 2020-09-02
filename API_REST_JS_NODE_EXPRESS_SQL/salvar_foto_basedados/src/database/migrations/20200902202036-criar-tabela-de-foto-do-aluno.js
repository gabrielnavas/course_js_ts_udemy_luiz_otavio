'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('fotos', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			originalname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			filename: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			aluno_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'alunos',
					key: 'id',
				},
				onDelete: 'SET NULL', //se apagar um aluno seta null todas fotos também
				onUpdate: 'CASCADE', //quando atualizar um aluno, atualiza as fotos também
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('fotos');
	}
};
