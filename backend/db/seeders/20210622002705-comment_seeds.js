'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      { userId: 1, songId: 1, body: 'Another Kanye classic. Legend' },
      { userId: 1, songId: 1, body: 'Banger' },
      { userId: 2, songId: 1, body: 'LOVE IT' },
      { userId: 1, songId: 3, body: 'Legendary' },
      { userId: 2, songId: 2, body: 'Tight' },
      { userId: 2, songId: 3, body: 'Ye' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
