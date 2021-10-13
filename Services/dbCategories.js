const { Category } = require('../models/');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

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
  const categoryDestroy = await Category.destroy({ where: { id } });
  return categoryDestroy;
};

module.exports = {
  categoryExist,
  getAllCategory,
  getCategory,
  categoryDelete
};
