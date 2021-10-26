const { Router } = require('express');
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
  getAllNews,
} = require('../controllers/new');

const router = Router();
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.put('/:id', [isAuthenticated, isAdmin], updateNews);
router.get('/:id', getNewsById);
router.post('/', [isAuthenticated, isAdmin], CreateNews);
router.get('/', getAllNews);
router.delete('/:id', [isAuthenticated, isAdmin], DeleteNews);
module.exports = router;
