'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    title: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Artist.associate = function (models) {
    // associations can be defined here
    Artist.hasMany(models.Song, { foreignKey: 'artistId' })
  };
  return Artist;
};
