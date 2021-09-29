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

const updateNews = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ msg: `updated news: ${id}`, data });
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
