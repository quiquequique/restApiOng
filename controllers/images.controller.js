const { uploadImageService } = require('../Services/awsImageService');
const errors = require('../helpers/resError.helper');

const uploadImagen = async (req, res) => {
  const { originalname, buffer } = req.file;
  try {
    const imagen = await uploadImageService(originalname, buffer);
    res.json({ imgUrl: imagen.Location });
  } catch (err) {
    res.status(500).json(errors._500);
  }
};

module.exports = {
  uploadImagen
};
