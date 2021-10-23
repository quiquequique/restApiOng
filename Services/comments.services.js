const { Comment } = require("../models");

const getallcomments = async () => {
  const comments = await Comment.findAll({
    attributes: ["body"],
    order: [["createdAt", "DESC"]],
  });
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
const update_comment = async (body, id) => {
  const exist = await check_exist_comment(id);
  if (exist) {
    const resp = await Comment.update(body, {
      where: {
        id,
      },
    });
    return resp;
  }
  return false;
};
const delete_comment = async (id) => {
  const exist = await check_exist_comment(id);
  if (exist) {
    const resp = await Comment.destroy({
      where: { id },
    });
    return resp;
  }
  return false;
};
const check_exist_comment = async (id) => {
  const exist = await Comment.findByPk(id);
  if (!exist) {
    return false;
  }
  return true;
};
const comments_by_post_id = async (id) => {
  return await Comment.findAll({
    where: {
      post_id: id,
    },
  });
};

const comments_by_id = async (id) => {
  return await Comment.findAll({
    where: {
      id,
    },
  });
};

module.exports = {
  getallcomments,
  create_comment,
  update_comment,
  delete_comment,
  comments_by_post_id,
  comments_by_id,
};
