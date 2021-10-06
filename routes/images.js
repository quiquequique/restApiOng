const express = require("express");
const route = express.Router();
const multer = require("multer");
const { uploadImage } = require("../services/awsImageService");

const upload = multer();

route.post("/upload", upload.single("file"), async (req, res) => {
  const { originalname, buffer } = req.file;
  const urlImagen = await uploadImage(originalname, buffer);
  res.json(urlImagen.Location);
});

module.exports = route;
