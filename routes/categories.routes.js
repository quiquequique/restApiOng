const express = require('express');
const { categoryValidator } = require('../middlewares/category.validator');

const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  newCategory,
  categoryUpdate,
  deleteCategory
} = require('../controllers/categories.controller');
/**
 * @swagger
 * components:
 *  schemas:
 *    Categories:
 *      type: object
 *      required:
 *        - name
 *        - description
 *        - image
 *      properties:
 *        id:
 *          type: string
 *          description: a number that is unique for the category
 *        name:
 *          type: string
 *          description: name of the categorie
 *        description:
 *          type: string
 *          description: description of the categorie
 *        image:
 *          type: string
 *          description: image of the categorie
 *      example:
 *        id: "1"
 *        name: "polirubro"
 *        description: "una ong polirubro"
 *        image: "www.fotolog.com/image/1"
 * */

const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', categoryValidator, [isAuthenticated, isAdmin], newCategory);
router.patch('/:id', categoryValidator, [isAuthenticated, isAdmin], categoryUpdate);
router.delete('/:id', [isAuthenticated, isAdmin], deleteCategory);

module.exports = router;
