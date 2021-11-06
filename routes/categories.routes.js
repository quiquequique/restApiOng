const express = require('express');
const { categoryValidator } = require('../middlewares/category.validator');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  newCategory,
  categoryUpdate,
  deleteCategory
} = require('../controllers/categories.controller');
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', categoryValidator, [isAuthenticated, isAdmin], newCategory);
router.delete('/:id', [isAuthenticated, isAdmin], deleteCategory);
router.patch('/:id', categoryValidator, [isAuthenticated, isAdmin], categoryUpdate);


module.exports = router;
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
/**
* @swagger
* tags:
*   name: Categories
*   description: The Categories managing API
*/
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Returns the list of all the categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 */

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get the categorie by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The categorie id
 *     responses:
 *       200:
 *         description: The categorie description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categories'
 *       404:
 *         description: The categorie was not found
 */
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new categorie
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categories'
 *     responses:
 *       200:
 *         description: The categorie was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categories'
 *       403:
 *         description: No authorization token was found.
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Remove the categorie by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The categorie id
 * 
 *     responses:
 *       200:
 *         description: The categorie was deleted
 *       404:
 *         description: The categorie was not found
 *       403:
 *        description: No authorization token was found.
 * 
 */
/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Update data of the categorie by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The categorie id
 * 
 *     responses:
 *       200:
 *         description: The categorie was updated
 *       404:
 *         description: The categorie was not found
 *       403:
 *        description: No authorization token was found.
 * 
 */
