const {
  create_testimony,
  delete_testimony,
  update_testimony,
  get_all_testimonies,
} = require("../Services/testimony.services");
const errors = require("../helpers/resError.helper");
const { DELETED_DONE } = require("../helpers/messages");

const getAllTestimonies = async (req, res) => {
  try {
    const pag = req.query.pag;
    const resp = await get_all_testimonies(pag);
    res.send(resp);
  } catch (err) {
    res.status(500).send(errors._500);
  }
};

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
const deleteTestimony = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonydelete = await delete_testimony(id);
    if (!testimonydelete) {
      return res.status(404).json(errors._404);
    }
    res.status(200).json(DELETED_DONE);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};
module.exports = {
  createTestimony,
  updateTestimony,
  deleteTestimony,
  getAllTestimonies,
};
