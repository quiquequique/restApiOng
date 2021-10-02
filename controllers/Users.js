'use strict'

const User = require("../models/user");
var controller = {
    all: (req, res) => {
        User.findAll({
        attributes: ["firstName","roleId"],
        }).then((resul) => {
        res.json(resul);
        res.status(200);
        })
        .catch((err) => {res.json(err);})
    },
    create : (req, res) => {
        User.create(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email: req.body.email, 
            image: req.body.image, 
            password: req.body.password, 
            roleId: req.body.roleId,
        },
        {
            include: "role",
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
    findById: (req, res) => {
        User.findByPk(req.params.id)
        .then((post) => {
        res.json(post);
        res.status(200);
        })
        .catch((error) => {res.json(error)});
    },
    findByName: (req,res)=>{
        User.findOne({where: {nombre: req.params.nombre}})
        .then((result) => {
            res.json(result);
            res.status(200);
        })
        .catch((err) => {res.json(err)})
    },
    update: (req, res) => {
        User.update(
        {
            nombre: req.body.name,
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
        .catch((err) => {res.json(err)})
    },
    delete: (req, res) => {
        User.destroy({
        where: {
            id: req.params.id,
        },
        })
        .then((result) => {
        res.json(result);
        res.status(200);
        })
        .catch((error) => {res.json(error)})
    }
}

module.exports = controller;