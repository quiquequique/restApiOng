const { Comment } = require("../models");

const getallcomments = async () => {
  const comments = await Comment.findAll({
    attributes: ["body"],
    order: [["createdAt", "DESC"]],
  });
  console.log(comments);
  return comments;
};

const create_comment = async (body) => {
  const user_id = typeof body.user_id !== "undefined";
  const post_id = typeof body.post_id !== "undefined";
  const bodyc = typeof body.body !== "undefined";
  if (user_id && post_id && bodyc) {
    const resp = await Comment.create(body);
    return resp;
  }
  return false;
};
module.exports = {
  getallcomments,
  create_comment,
};
