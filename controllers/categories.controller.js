/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const {
  getAllCategory,
  getCategory,
  categoryDelete,
  createCategory
} = require('../Services/dbCategories.services');
const errors = require('../helpers/resError.helper');

// get all categories
const getAllCategories = async (_, res) => {
  try {
    const categories = await getAllCategory();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

// get a single category
const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await getCategory(id);
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};
// create category
const newCategory = (req, res) => {
  const newCat = req.body;
  try {
    createCategory(newCat);
    return res.status(201).json({
      meta: { created: true }
    });
  } catch (err) {
    console.error(err); // prep for logger
    return res.status(500).json(errors._500);
  }
};

// update category
const updateCategory = (req, res) => {
  const { id } = req.params;

  try {
    res.send('category updated: ');
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

// delete category
const deleteCategory = async (req, res) => {
  const idToDelete = req.params.id;

  try {
    const deletedCategory = await categoryDelete(idToDelete);

    if (deletedCategory === 1) {
      res.status(200).json({ meta: { deleted: true } });
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
  newCategory,
  updateCategory,
  deleteCategory
};
