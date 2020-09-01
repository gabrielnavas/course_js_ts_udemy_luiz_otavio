'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		await queryInterface.addColumn('alunos', 'idade', {
			type: Sequelize.INTEGER,
			allowNull: false,
		});

	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
	}
};
