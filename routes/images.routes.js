const express = require('express');

const router = express.Router();
const multer = require('multer');
const { uploadImagen } = require('../controllers/images.controller');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const upload = multer();

router.post(
  '/upload', /* verify if admin (middleware) */ [isAuthenticated, isAdmin], upload.single('file'),
  uploadImagen
);

module.exports = router;
