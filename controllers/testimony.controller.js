const {
  create_testimony,
  update_testimony,
} = require("../Services/testimony.services");
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
const updateTestimony = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const testimony = await update_testimony(data, id);
    if (!testimony) {
      return res.status(404).json(errors._404);
    }
    res.status(200).json(testimony);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};
module.exports = {
  createTestimony,
  updateTestimony,
};