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
        if(result!=0){
          res.json(result);
          res.status(200);
        }
        res.json('La imagen no existe');
        res.status(404);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  findById: (req, res) => {
    Slide.findByPk(req.params.id)
      .then((post) => {
        if(post=="null"){
          res.json(post);
          res.status(200);
        }
        res.json('El slide no existe');
        res.status(404);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = controller;