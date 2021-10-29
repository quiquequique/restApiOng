/* eslint-disable no-console */
const { Category } = require('../models');
// const errors = require('../helpers/resError.helper');

const categoryExist = async (id) => {
  const exist = await Category.findByPk(id);

  return !!exist;
};

const getAllCategory = async (pageQuery) => {
  const page = (parseInt(pageQuery, 10));
  const siteUrl = process.env.SITE_URL;
  const limitOf = 10;
  const offsetOf = limitOf * (page - 1);
  try {
    if (page < 1) {
      return 'out';
    }
    const allCategories = await Category.findAndCountAll({
      attributes: ['id', 'name', 'description', 'image'],
      limit: limitOf,
      offset: offsetOf
    });
    let previousUrl = null;
    if ((page - 1) >= 1) {
      previousUrl = `${siteUrl}categories?page=${page - 1}`;
    }
    let nextUrl = null;
    if ((page - 1) < (Math.floor(allCategories.count / 10))) {
      nextUrl = `${siteUrl}categories?page=${page + 1}`;
    }
    const pageFrom = 1;
    const pageTo = (Math.floor((allCategories.count / 10) + 1));
    if (page > pageTo) {
      return 'out';
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
