'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        "id": 1,
        "firstName": "Maximillian",
        "lastName": "Muester",
        "emailAddress": "mm@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 2,
        "firstName": "Tobias",
        "lastName": "Muester",
        "emailAddress": "tm@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 3,
        "firstName": "Rebecca",
        "lastName": "Muester",
        "emailAddress": "rm@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
