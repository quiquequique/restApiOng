const { Router } = require("express");

const router = Router();

const {
  createTestimony,
  updateTestimony,
  deleteTestimony,
  getAllTestimonies,
} = require("../controllers/testimony.controller");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/isAdmin");
router.post("/", [isAuthenticated, isAdmin], createTestimony);
router.put("/:id", [isAuthenticated, isAdmin], updateTestimony);
router.delete("/:id", [isAuthenticated, isAdmin], deleteTestimony);

module.exports = router;
/**
 * @swagger
 * components:
 *  schemas:
 *    Testimony:
 *      type: object
 *      required:
 *        - name
 *        - content
 *        - image
 *      properties:
 *        id:
 *          type: string
 *          description: a number that is unique for this New
 *        name:
 *          type: string
 *          description: name of the new
 *        image:
 *          type: string
 *          description: image of the new
 *        content:
 *          type: string
 *          description: description of the new
 *      example:
 *        id: "1"
 *        name: "novedades ong 2021"
 *        content: "novedades del año 2021 para nuestra ong"
 *        image: "www.news.com/image/1"
 * */

/**
 * @swagger
 * tags:
 *   name: Testimony
 *   description: The Testimony managing API
 */
/**
 * @swagger
 * /testimonials:
 *   post:
 *     summary: Create a new Testimony
 *     tags: [Testimony]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimony'
 *     responses:
 *       200:
 *         description: The Testimony was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Testimony'
 *       500:
 *         description: Some server error
 *       403:
 *         description: No authorization token was found.
 */
/**
 * @swagger
 * /testimonials/{id}:
 *  put:
 *    summary: Update the Testimony by the id
 *    tags: [Testimony]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Testimony id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Testimony'
 *    responses:
 *      200:
 *        description: The Testimony was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Testimony'
 *      404:
 *        description: The Testimony was not found
 *      500:
 *        description: Some error happened
 *      403:
 *        description: No authorization token was found.
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   delete:
 *     summary: Remove the testimony by id
 *     tags: [Testimony]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Testimony id
 *
 *     responses:
 *       200:
 *         description: The Testimony was deleted
 *       403:
 *         description: No authorization token was found.
 *       404:
 *         description: The Testimony was not found
 */
