const { Category } = require('../models');
const errors = require('../helpers/resError.helper');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

  // eslint-disable-next-line no-unneeded-ternary
  return exist ? true : false;
};

const getAllCategory = async () => {
  const allCategories = await Category.findAll({
    attributes: ['name']
  });
  return allCategories;
};

const getCategory = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const categoryDelete = async (id) => {
  try {
    const exist = await categoryExist(id);

    if (exist) {
      const categoryDestroy = await Category.destroy({ where: { id } });

      return categoryDestroy;
    } else {
      return (this.categoryDestroy = 0);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json(errors._500);
  }
};

module.exports = {
  categoryExist,
  getAllCategory,
  getCategory,
  categoryDelete
};
