'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubAnnotationUpvotes = sequelize.define('SubAnnotationUpvote', {
    userId: DataTypes.INTEGER,
    subAnnotationId: DataTypes.INTEGER
  }, {});
  SubAnnotationUpvotes.associate = function (models) {
    // associations can be defined here
  };
  return SubAnnotationUpvotes;
};
