/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const {
  getAllCategory,
  getCategory,
  categoryDelete,
  createCategory,
  updateCategory
} = require('../Services/dbCategories.services');
const errors = require('../helpers/resError.helper');

// get all categories
const getAllCategories = async (req, res) => {
  const { page } = req.query;
  try {
    const categories = await getAllCategory(page);
    if (categories === 'out') {
      return res.status(416).json(errors._416);
    }
    if (categories !== null) {
      return res.status(200).json(categories);
    }
    return res.status(404).json(errors._404);
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
const newCategory = async (req, res) => {
  const newCat = req.body;
  try {
    await createCategory(newCat);
    return res.status(201).json({
      meta: { created: true }
    });
  } catch (err) {
    console.error(err); // prep for logger
    return res.status(500).json(errors._500);
  }
};

// update category
const categoryUpdate = async (req, res) => {
  const idToUpdate = req.params.id;
  const data = req.body;
  try {
    const updated = await updateCategory(idToUpdate, data);
    if (updated) {
      return res.status(200).json({ meta: { updated: true } });
    }
    return res.status(404).json(errors._404);
  } catch (err) {
    console.error(err); // prep for logger
    return res.status(500).json(errors._500);
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
  categoryUpdate,
  deleteCategory
};
