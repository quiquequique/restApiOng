const express = require('express');
const { categoryValidator } = require('../middlewares/category.validator');

const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  newCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories.controller');

const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', categoryValidator, [isAuthenticated, isAdmin], newCategory);
router.put('/:id', [isAuthenticated, isAdmin], updateCategory);
router.delete('/:id', [isAuthenticated, isAdmin], deleteCategory);

module.exports = router;
