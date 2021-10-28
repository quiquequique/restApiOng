/* eslint-disable consistent-return */

const { NOT_ADMIN } = require('../helpers/messages');

exports.isAdmin = (req, res, next) => {
  const { roleId } = req.user;


  if (roleId !== 1) {
    return res.status(401).json({ ok: false, msg: NOT_ADMIN });
  }

  next();
};
