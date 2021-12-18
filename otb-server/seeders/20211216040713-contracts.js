'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contracts', [
      {
        "id": 1,
        "name": "Test Contract 9",
        "content": "Some contract info to come",
        "startDate": "01-02-2021",
        "endDate": "01-06-2021",
        "totalSessions": "10",
        "userId": 1,
        "customerId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 2,
        "name": "Test Contract 6",
        "content": "Some contract info to come",
        "startDate": "01-02-2021",
        "endDate": "01-06-2021",
        "totalSessions": "10",
        "userId": 2,
        "customerId": 2,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 3,
        "name": "Test Contract 7",
        "content": "Some contract info to come",
        "startDate": "01-02-2021",
        "endDate": "01-06-2021",
        "totalSessions": "10",
        "userId": 3,
        "customerId": 3,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 4,
        "name": "Test Contract 8",
        "content": "Some contract info to come",
        "startDate": "01-02-2021",
        "endDate": "01-06-2021",
        "totalSessions": "10",
        "userId": 1,
        "customerId": 2,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contracts', null, {});
  }
};
