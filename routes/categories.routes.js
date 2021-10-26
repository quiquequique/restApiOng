const express = require('express');

const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories.controller');

const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', [isAuthenticated, isAdmin], createCategory);
router.put('/:id', [isAuthenticated, isAdmin], updateCategory);
router.delete('/:id', [isAuthenticated, isAdmin], deleteCategory);

module.exports = router;
