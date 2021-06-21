'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    startPos: DataTypes.INTEGER,
    endPos: DataTypes.INTEGER
  }, {});
  Annotation.associate = function (models) {
    // associations can be defined here
    Annotation.belongsTo(models.Song, { foreignKey: 'songId' })
    Annotation.belongsTo(models.User, { foreignKey: 'userId' })
    const columnMapping = {
      through: 'AnnotationUpvote',
      foreignKey: 'annotationId',
      otherKey: 'userId'
    }
    Annotation.belongsToMany(models.User, columnMapping)
  };
  return Annotation;
};
