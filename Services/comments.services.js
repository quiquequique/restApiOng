const { Coments } = require("../models");

const getallcomments = async () => {
  const comments = await Coments.findAll({
    attributes: ["body"],
    order: [["createdAt", "DESC"]],
  });
  return comments;
};

module.exports = getallcomments;
