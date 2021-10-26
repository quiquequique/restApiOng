const express = require('express');
const slidesController = require('../controllers/slides');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

/* GET roles listing. */
router.get('/', /* [isAdmin], */ slidesController.getAllSlides);
// post
// router.post("/", slidesController.create);
// get by id
router.get('/:id', /* [isAdmin], */ slidesController.getSlideById);
// get by nombre
// router.get("/:name", slidesController.findByName);
// patch by id
router.put('/:id', [isAuthenticated, isAdmin], slidesController.updateSlide);
// delete by id
router.delete('/:id', [isAuthenticated, isAdmin], slidesController.deleteSlide);
// get all slides by organization id
router.get('/organization/:id', slidesController.slidesByOrg);


module.exports = router;
