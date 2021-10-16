'use strict';
const { Role } = require('../models');

var controller = {
  all: (res) => {
    Role.findAll({
      attributes: ['name'],
    })
      .then((resul) => {
        res.json(resul);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  create: (req, res) => {
    Role.create({
      name: req.body.name,
      description: req.body.descripcion,
    })
      .then((result) => {
        res.json(result);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  findById: (req, res) => {
    Role.findByPk(req.params.id)
      .then((post) => {
        res.json(post);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  findByName: (req, res) => {
    Role.findOne({ where: { name: req.params.name } })
      .then((result) => {
        res.json(result);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  update: (req, res) => {
    Role.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((result) => {
        res.json(result);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  delete: (req, res) => {
    Role.destroy({
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
