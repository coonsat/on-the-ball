'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "firstName": "Andrew",
        "lastName": "Cooney",
        "emailAddress": "andscool@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "firstName": "Michael",
        "lastName": "Mayer",
        "emailAddress": "mm@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "firstName": "Robert",
        "lastName": "Mayer",
        "emailAddress": "rm@hotmail.com",
        "password": "test123",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
