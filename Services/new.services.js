const { New } = require("../models");
const { paginado } = require("../utils/pagination");
const getallnews = async (page) => {
  const news = await New.findAll();
  const resp = paginado(page, news);
  return resp;
};
const createNews = async (body) => {
  body.type = "news";
  const name = typeof body.name !== "undefined";
  const content = typeof body.content !== "undefined";
  const image = typeof body.image !== "undefined";
  if (name && content && image) {
    const resp = await New.create(body);
    return resp;
  }
  return false;
};
const newsdetail = async (id) => {
  const exist = await checkExistNew(id);
  if (exist) {
    return await New.findOne({
      where: {
        id,
      },
    });
  }
  return false;
};
const updateNew = async (body, id) => {
  const exist = await checkExistNew(id);
  if (exist) {
    return await New.update(body, {
      where: {
        id,
      },
    });
  }
  return false;
};
const checkExistNew = async (id) => {
  const exist = await New.findByPk(id);
  if (!exist) {
    return false;
  }
  return true;
};
const deleteNews = async (id) => {
  const exist = await checkExistNew(id);
  if (exist) {
    const resp = await New.destroy({
      where: { id },
    });
    return resp;
  }
  return false;
};
module.exports = {
  updateNew,
  checkExistNew,
  createNews,
  getallnews,
  newsdetail,
  deleteNews,
};
