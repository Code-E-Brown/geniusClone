'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnnotationUpvotes = sequelize.define('AnnotationUpvotes', {
    userId: DataTypes.INTEGER,
    annotationId: DataTypes.INTEGER
  }, {});
  AnnotationUpvotes.associate = function(models) {
    // associations can be defined here
  };
  return AnnotationUpvotes;
};