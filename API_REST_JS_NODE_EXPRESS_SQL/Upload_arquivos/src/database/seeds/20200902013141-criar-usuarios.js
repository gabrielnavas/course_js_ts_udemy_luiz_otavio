const bcryptjs = require('bcryptjs');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuarios',
      [
        {
          nome: 'Luiz',
          email: 'luiz123@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          nome: 'Luiz123',
          email: 'luiz1234@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          nome: 'Luiz12345',
          email: 'luiz1235@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          nome: 'Luiz12345',
          email: 'luiz1236@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => { }
};
