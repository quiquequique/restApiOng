const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadImagen } = require("../controllers/images");

const upload = multer();

router.post("/upload", upload.single("file"), uploadImagen);

module.exports = router;
