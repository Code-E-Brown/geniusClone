'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      {
        artistId: 1,
        userId: 6,
        title: 'Flashing Lights',
        tagId: 1,
        lyrics: "Flashing lights (lights, lights, lights) Flashing lights(lights, lights, lights) Flashing lights(lights, lights, lights) Flashing lights(lights, lights) She don't believe in shooting stars But she believe in shoes & cars Wood floors in the new apartment Couture from the store's department You more like L'eau de Stardee shit I'm more of the, trips to Florida Order the h'orderves, views of the water Straight from the page of your favorite author And the weather so breezy Man why can't life always be this easy She in the mirror dancing so sleazy",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71+JZba5PuL._AC_UL600_SR600,600_.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=mWtIxc38xNE'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
