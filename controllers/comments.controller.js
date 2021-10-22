const { getallcomments } = require("../Services/comments.services");
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
module.exports = {
  getAllComments,
};
