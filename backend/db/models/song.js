'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    artistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    tagId: DataTypes.INTEGER,
    lyrics: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    youtubeUrl: DataTypes.STRING
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
  };
  return Song;
};
