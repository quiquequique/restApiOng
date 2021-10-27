const { Router } = require('express');
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
  getAllNews,
} = require('../controllers/new');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = Router();
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


router.put('/:id', [isAuthenticated, isAdmin], updateNews);
router.get('/:id', getNewsById);
router.post('/', [isAuthenticated, isAdmin], CreateNews);
router.get('/', getAllNews);
router.delete('/:id', [isAuthenticated, isAdmin], DeleteNews);


module.exports = router;
