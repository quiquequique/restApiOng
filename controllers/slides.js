'use strict';
const { Slide } = require('../models');

var controller = {
  delete: (req, res) => {
    Slide.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.json(result);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = controller;
