const { uploadImageService } = require('../services/awsImageService');

//upload image
const uploadImagen = async (req, res) => {
  const { originalname, buffer } = req.file;
  try {
    const imagen = await uploadImageService(originalname, buffer);
    res.json({ imgUrl: imagen.Location });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  uploadImagen
};
