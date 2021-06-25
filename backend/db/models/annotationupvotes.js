'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnnotationUpvotes = sequelize.define('AnnotationUpvote', {
    userId: DataTypes.INTEGER,
    annotationId: DataTypes.INTEGER
  }, {});
  AnnotationUpvotes.associate = function (models) {
    // associations can be defined here
    // AnnotationUpvotes.belongsTo(models.Annotation, { foreignKey: 'annotationId' })
  };
  return AnnotationUpvotes;
};
