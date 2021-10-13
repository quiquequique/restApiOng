const { New } = require("../models");

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
  newsdetail,
};
