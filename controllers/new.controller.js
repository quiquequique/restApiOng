const {
  updateNew,
  newsdetail,
  createNews,
  deleteNews,
  getallnews,
} = require("../Services/new.services");
const { DELETED_DONE, UPDATED_DONE } = require("../helpers/messages");

const errors = require("../helpers/resError.helper");

const getAllNews = async (req, res) => {
  try {
    const pag = req.query.pag;
    const resp = await getallnews(pag);
    res.send(resp);
  } catch (err) {
    res.status(500).send(errors._500);
  }
};

const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await newsdetail(id);
    if (!details) {
      return res.status(404).json(errors._400);
    }
    res.status(200).json(details);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};

const CreateNews = async (req, res) => {
  try {
    const data = req.body;
    const newcreated = await createNews(data);
    if (!newcreated) {
      return res.status(400).json(errors._400);
    }
    res.status(201).json(newcreated);
  } catch (e) {
    res.status(500).send(errors._500);
  }
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const newUpdate = await updateNew(data, id);
    if (!newUpdate) {
      return res.status(404).json(errors._404);
    }
    res.status(200).json({ meta: { msg: UPDATED_DONE } });
  } catch (e) {
    res.status(500).send(errors._500);
  }
};

const DeleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const newdelete = await deleteNews(id);
    if (!newdelete) {
      return res.status(404).json(errors._404);
    }
    res.status(200).json({ meta: { msg: DELETED_DONE } });
  } catch (e) {
    res.status(500).send(errors._500);
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  CreateNews,
  updateNews,
  DeleteNews,
};
