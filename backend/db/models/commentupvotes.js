'use strict';
module.exports = (sequelize, DataTypes) => {
  const commentUpvotes = sequelize.define('CommentUpvote', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  commentUpvotes.associate = function(models) {
    // associations can be defined here
  };
  return commentUpvotes;
};
