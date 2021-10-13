const { updateNew, newsdetail } = require("../services/new");
const errors = require("../helpers/resError.helper");

const getAllNews = (req, res) => {
  res.send("List of News");
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
    res.status(500).json(e.message);
  }
};

const CreateNews = (req, res) => {
  const data = req.body;
  res.json({ msg: "News created", data });
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const newUpdate = await updateNew(data, id);
    if (!newUpdate) {
      return res.status(404).json(errors._400);
    }
    res.status(200).json(newUpdate);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const deleteNews = (req, res) => {
  const { id } = req.params;
  res.send(`news deleted: ${id}`);
};

module.exports = {
  getAllNews,
  getNewsById,
  CreateNews,
  updateNews,
  deleteNews,
};
