const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const senhaCriptografada = bcrypt.hashSync('teste', 10);
    return queryInterface.bulkInsert('admins', [
      {
        nome: 'Teste 1',
        email: 'teste@eteste.com',
        senha: senhaCriptografada,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};