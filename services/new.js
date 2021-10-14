const { New } = require("../models");

const CreateNews = async (body) => {
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

module.exports = {
  updateNew,
  checkExistNew,
  CreateNews,
  newsdetail,
};
