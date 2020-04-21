'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
      queryInterface.addColumn(
        'Users',
        'password', {
          type: Sequelize.STRING,
          after: "email"
        }
       ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
