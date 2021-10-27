const { create_testimony } = require("../Services/testimony.services");
const errors = require("../helpers/resError.helper");
const createTestimony = async (req, res) => {
  try {
    const data = req.body;
    const newtestimony = await create_testimony(data);
    if (!newtestimony) {
      return res.status(400).json(errors._400);
    }
    res.status(201).json(newtestimony);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};

module.exports = {
  createTestimony,
};
