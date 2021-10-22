const { Comment } = require("../models");

const getallcomments = async () => {
  const comments = await Comment.findAll({
    attributes: ["body"],
    order: [["createdAt", "DESC"]],
  });
  console.log(comments);
  return comments;
};

module.exports = {
  getallcomments,
};
