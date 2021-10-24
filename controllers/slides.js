const {
  getAllSlide,
  getSlide,
  SlideDelete,
  putSlide,
  getSlidesByOrg
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

// update slide
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

const slidesByOrg = async (req, res) => {
  const idOrganization = req.params.id; 
  try {
    const organizationSlide = await getSlidesByOrg(idOrganization); 

    if (organizationSlide) {
      res.status(200).json(organizationSlide);
    } else {
      res.status(404).json(errors._404);
    }
  } catch (err) {
    console.log(err);

    res.status(500).json(errors._500);
  }
}

/*


*/ 
module.exports = {
  getAllSlides,
  getSlideById,
  //createCategory,
  updateSlide,
  deleteSlide,
  slidesByOrg
};