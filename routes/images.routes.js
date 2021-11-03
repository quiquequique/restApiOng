const express = require('express');

const router = express.Router();
const multer = require('multer');
const { uploadImagen } = require('../controllers/images.controller');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');
const { isImage } = require('../middlewares/isImage');

const upload = multer();

router.post(
  '/upload',
  [isAuthenticated, isAdmin],
  upload.single('file'),
  [isImage],
  uploadImagen
);

module.exports = router;
