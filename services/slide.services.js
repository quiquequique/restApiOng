const { Slide } = require('../models');
const errors = require('../helpers/resError.helper');

const SlideExist = async (id) => {
  const exist = await Slide.findByPk(id);

  // eslint-disable-next-line no-unneeded-ternary
  return exist ? true : false;
};

const getAllSlide = async () => {
  const allCategories = await Slide.findAll({
    attributes: ['imageUrl','order']
  });
  return allCategories;
};

const getSlide = async (id) => {
  const slide = await Slide.findByPk(id);
  return slide;
};

const SlideDelete = async (id) => {
  try {
    const exist = await SlideExist(id);

    if (exist) {
      const SlideDestroy = await Slide.destroy({ where: { id } });

      return SlideDestroy;
    } else {
      return (this.SlideDestroy = 0);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json(errors._500);
  }
};

module.exports = {
  SlideExist,
  getAllSlide,
  getSlide,
  SlideDelete
};
