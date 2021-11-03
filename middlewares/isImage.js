const multer = require('multer');
const { ONLY_IMAGES } = require('../helpers/messages');

exports.isImage = async (req, res, next) => {
  const { mimetype } = req.file;
  if (
    mimetype == 'image/jpeg' ||
    mimetype == 'image/png' ||
    mimetype == 'image/jpg'
  ) {
    next();
  } else {
    return res.status(404).json({ ok: false, msg: ONLY_IMAGES });
  }
};
