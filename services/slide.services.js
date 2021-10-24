const { Slide } = require('../models');
const errors = require('../helpers/resError.helper');
const {
  checkIfExistOrg
} = require('../Services/dbOrganization.services'); 
const { Organization } = require('../models');
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

const getSlidesByOrg = async (id) => {

  const allSlides = await Slide.findAll({
    where: {
      organizationId: id
    }
  });

  try {
    if(Object.keys(allSlides).length !== 0){
      return allSlides; 
    }else{
      return false; 
    }
  } catch (error) {
    console.log(error);

    res.status(500).json(errors._500);
  }
}

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

const putSlide = async (body,id) => {
  const exist = await SlideExist(id); 
  if(exist){
    return await Slide.update(body,{ where:{
      id,
    }})
  }
  return false; 
}

module.exports = {
  SlideExist,
  getAllSlide,
  getSlide,
  SlideDelete,
  putSlide,
  getSlidesByOrg
};
