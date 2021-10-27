const { Category } = require('../models');
// const errors = require('../helpers/resError.helper');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

  return !!exist;
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
    }
    this.categoryDestroy = 0;
    return this.categoryDestroy;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);

    throw error;
  }
};

const createCategory = async (newCategory) => {
  try {
    const categoryCreated = await Category.create(newCategory);
    return categoryCreated;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (id, data) => {
  try {
    const exist = await categoryExist(id);
    if (exist) {
      const updated = await Category.update(data, { where: { id } });
      console.log(updated);
      return updated;
    }
    return exist;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  categoryExist,
  getAllCategory,
  getCategory,
  categoryDelete,
  createCategory,
  updateCategory
};
