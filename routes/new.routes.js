const { Router } = require("express");
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
  getAllNews,
} = require("../controllers/new.controller");

const router = Router();
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/isAdmin");
router.get("/", getAllNews);
router.get("/:id", getNewsById);
router.put("/:id", [isAuthenticated, isAdmin], updateNews);
router.post("/", [isAuthenticated, isAdmin], CreateNews);
router.delete("/:id", [isAuthenticated, isAdmin], DeleteNews);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    News:
 *      type: object
 *      required:
 *        - name
 *        - content
 *        - image
 *        - type
 *      properties:
 *        id:
 *          type: string
 *          description: a number that is unique for this New
 *        name:
 *          type: string
 *          description: name of the new
 *        type:
 *          type: string
 *          description: type of the new
 *        image:
 *          type: string
 *          description: image of the new
 *        content:
 *          type: string
 *          description: description of the new
 *        categoryId:
 *          type: string
 *          description: id of the category
 *      example:
 *        id: "1"
 *        name: "novedades ong 2021"
 *        content: "novedades del año 2021 para nuestra ong"
 *        categoryId: "4"
 *        type: "nacional"
 *        image: "www.news.com/image/1"
 * */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: The News managing API
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Returns the list of all the news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: The list of the news
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 */

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Get the news by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The new id
 *     responses:
 *       200:
 *         description: The new description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: The New was not found
 */
/**
 * @swagger
 * /news/{id}:
 *  put:
 *    summary: Update the New by the id
 *    tags: [News]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The New id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/News'
 *    responses:
 *      200:
 *        description: The New was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/News'
 *      404:
 *        description: The New was not found
 *      500:
 *        description: Some error happened
 *      403:
 *        description: No authorization token was found.
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Create a new New
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: The New was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       500:
 *         description: Some server error
 *       403:
 *         description: No authorization token was found.
 */
/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Remove the new by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The New id
 *
 *     responses:
 *       200:
 *         description: The New was deleted
 *       403:
 *         description: No authorization token was found.
 *       404:
 *         description: The New was not found
 */
