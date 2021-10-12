const { Category } = require('../models/');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

  return exist ? true : false;
};

const getAllCategory = async () => {
  return await Category.findAll();
};

const categoryDelete = async (id) => {
  const categoryDestroy = await Category.destroy({ where: { id } });

  return categoryDestroy;
};

module.exports = {
  categoryExist,
  getAllCategory,
  categoryDelete
};
