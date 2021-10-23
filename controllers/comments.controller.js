const {
  getallcomments,
  create_comment,
  update_comment,
} = require("../Services/comments.services");
const { UPDATED_DONE } = require("../helpers/messages");
const errors = require("../helpers/resError.helper");

const getAllComments = async (req, res) => {
  try {
    const resp = await getallcomments();
    res.send(resp);
  } catch (err) {
    console.log("error aqui");
    res.status(500).send(errors._500);
  }
};
const createComment = async (req, res) => {
  try {
    const data = req.body;
    const newcomment = await create_comment(data);
    if (!newcomment) {
      return res.status(400).json(errors._400);
    }
    res.status(201).json(newcomment);
  } catch (e) {
    res.status(500).send(errors._500);
  }
  /* const comment = {
    post_id: req.body.post_id,
    user_id: req.body.user_id,
    body: req.body.body,
  }; */
};
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const resp = await update_comment(data, id);
    if (!resp) {
      return res.status(404).json(errors._404);
    }
    res.status(200).json(UPDATED_DONE);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};
module.exports = {
  getAllComments,
  createComment,
  updateComment,
};
