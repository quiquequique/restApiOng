const { uploadImageService } = require('../services/aws.services');
const errors = require('../helpers/resError.helper');

const uploadImagen = async (req, res) => {
  const { originalname, buffer } = req.file;

  const name = (fileName = originalname.toLowerCase().split(' ').join('-'));
  try {
    const imagen = await uploadImageService(name, buffer);
    res.json({ imgUrl: imagen.Location });
  } catch (err) {
    res.status(500).json(errors._500);
  }
};

module.exports = {
  uploadImagen
};
