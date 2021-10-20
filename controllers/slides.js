const {
  getAllSlide,
  getSlide,
  SlideDelete,
  putSlide
} = require('../Services/slide.services');
const errors = require('../helpers/resError.helper');

// get all slides
const getAllSlides = async (_, res) => {
  try {
    const categories = await getAllSlide();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};
// get a single slide
const getSlideById = async (req, res) => {
  let { id } = req.params;

  try {
    const slide = await getSlide(id);
    res.json(slide);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

/*
// create category
const createCategory = (req, res) => {
  const { newCategory } = req.body;

  try {
    res.send('new category created: ' + newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};
*/

// update category
const updateSlide = async  (req, res) => {
	const { id } = req.params;
	const body = req.body;
  try {
    const updatedSlide = await putSlide(body, id);
    if(updatedSlide){
      res.status(200).json({ meta: { deleted: true } });
    } else {
      res.status(404).json(errors._404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

// delete category
const deleteSlide = async (req, res) => {
  const idToDelete = req.params.id;

  try {
    const deletedSlide = await SlideDelete(idToDelete);

    if (deletedSlide === 1) {
      res.status(200).json({ meta: { deleted: true } });
    } else {
      res.status(404).json(errors._404);
    }
  } catch (err) {
    console.log(err);

    res.status(500).json(errors._500);
  }
};
module.exports = {
  getAllSlides,
  getSlideById,
  //createCategory,
  updateSlide,
  deleteSlide
};
/*
'use strict';
const { Slide } = require('../models');

var controller = {
    all: (res) => {
    Slide.findAll({
      attributes: ['imageUrl'],
    })
      //Aqui cuando recibimos la respuesta tengo que organizarlo 
      .then((resul) => {
        res.json(resul);
        res.status(200);
      })
      .catch((error) => {
        res.json(error);
      });
  },
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
*/