'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    startPos: DataTypes.INTEGER,
    endPos: DataTypes.INTEGER
  }, {});
  Annotation.associate = function(models) {
    // associations can be defined here
  };
  return Annotation;
};