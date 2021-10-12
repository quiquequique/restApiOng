const {
  categoryExist,
  getAllCategory,
  categoryDelete
} = require('../Services/dbCategories');
const errors = require('../helpers/resErrors');

//get all categories
const getAllCategories = async (_, res) => {
  try {
    const categories = await getAllCategory();
    res.json(categories);
  } catch (error) {
    console.error(error);

    res.status(500).json(errors._500);
  }
};

//get a single category
const getCategoryById = (req, res) => {
  const { id } = req.params;

  try {
    res.send('category by id:' + id);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//create category
const createCategory = (req, res) => {
  const { newCategory } = req.body;

  try {
    res.send('new category created: ' + newCategory);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//update category
const updateCategory = (req, res) => {
  const { id } = req.params;

  try {
    res.send('category updated: ' + id);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//delete category
const deleteCategory = async (req, res) => {
  const idToDelete = req.params.id;

  try {
    const exist = await categoryExist(idToDelete);

    if (exist) {
      const deletedCategory = await categoryDelete(idToDelete);

      if (deletedCategory === 1) {
        res.status(200).json({ meta: { deleted: true } });
      } else {
        res.status(400).json(errors._400);
      }
    } else {
      res.status(404).json(errors._404);
    }
  } catch (err) {
    console.log(err);

    res.status(500).json(errors._500);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
