const { updateNew, checkExistNew } = require("../services/new");
const errors = require("../helpers/resErrors");

const getAllNews = (req, res) => {
  res.send("List of News");
};

const getNewsById = (req, res) => {
  const { id } = req.params;
  res.send("News by id:" + id);
};

const CreateNews = (req, res) => {
  const data = req.body;
  res.json({ msg: "News created", data });
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const exist = checkExistNew(id);
  if (exist) {
    const newUpdate = await updateNew(data, id);
    res.send(newUpdate);
  } else {
    res.status(404).json(errors._400);
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
