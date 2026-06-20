'use strict';

const { default: ModelManager } = require('sequelize/lib/model-manager');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      ModelNumber : 'Airbus A310',
      capacity : 837,
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      ModelNumber : 'Airbus A320',
      capacity : 788,
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      ModelNumber : 'Boeing 737',
      capacity : 737,
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      ModelNumber : 'Boeing 767',
      capacity : 767,
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      ModelNumber : 'Boeing 777',
      capacity : 777,
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
