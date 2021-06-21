'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Annotations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Songs" }
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      startPos: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endPos: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Annotations');
  }
};
