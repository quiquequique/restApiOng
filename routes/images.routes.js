const express = require('express');

const router = express.Router();
const multer = require('multer');
const { uploadImagen } = require('../controllers/images.controller');

const upload = multer();

router.post(
  '/upload',
  /* verify if admin (middleware) */ upload.single('file'),
  uploadImagen
);

module.exports = router;
