const { New } = require("../models");
const updateNew = async (body, id) => {
  return await New.update(body, {
    where: {
      id,
    },
  });
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
};
