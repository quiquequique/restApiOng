/* eslint-disable no-console */
const { Category } = require('../models');
// const errors = require('../helpers/resError.helper');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

  return !!exist;
};

const getAllCategory = async (page) => {
  const siteUrl = process.env.SITE_URL;
  const limitOf = 10;
  const offsetOf = limitOf * (page - 1);
  try {
    const allCategories = await Category.findAndCountAll({
      attributes: ['id', 'name', 'description', 'image'],
      limit: limitOf,
      offset: offsetOf
    });
    let previousUrl = null;
    if ((parseInt(page, 10) - 1) >= 1) {
      previousUrl = `${siteUrl}categories?page=${parseInt(page, 10) - 1}`;
    }
    let nextUrl = null;
    if ((parseInt(page, 10) - 1) < (Math.floor(allCategories.count / 10))) {
      nextUrl = `${siteUrl}categories?page=${parseInt(page, 10) + 1}`;
    }
    const pageFrom = 1;
    const pageTo = (Math.floor((allCategories.count / 10) + 1));
    if ((parseInt(page, 10) > pageTo)) {
      return null;
    }
    const responce = {
      meta: {
        count: allCategories.count,
        previousPage: previousUrl,
        nextPage: nextUrl,
        firstPage: pageFrom,
        lastPage: pageTo
      },
      data: {
        rows: allCategories.rows
      }
    };
    return responce;
  } catch (error) {
    console.log(error); // prep for logger
    return null;
  }
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
