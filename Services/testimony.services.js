const { Testimony } = require("../models");
const { paginado } = require("../utils/pagination");

const create_testimony = async (body) => {
  const name = typeof body.name !== "undefined";
  const content = typeof body.content !== "undefined";
  if (name && content) {
    const resp = await Testimony.create(body);
    return resp;
  }
  return false;
};
const update_testimony = async (body, id) => {
  const exist = await check_exist_testimony(id);
  if (exist) {
    await Testimony.update(body, {
      where: { id },
      returning: true,
      plain: true,
    });
    const res = await Testimony.findByPk(id);
    return res;
  }
  return false;
};
const check_exist_testimony = async (id) => {
  const exist = await Testimony.findByPk(id);
  if (exist) {
    return true;
  }
  return false;
};
const delete_testimony = async (id) => {
  const exist = await check_exist_testimony(id);
  if (exist) {
    const resp = await Testimony.destroy({
      where: { id },
    });
    return resp;
  }
  return false;
};
const get_all_testimonies = async (page) => {
  const testimonies = await Testimony.findAll();
  const resp = paginado(page, testimonies);
  return resp;
};
module.exports = {
  create_testimony,
  check_exist_testimony,
  update_testimony,
  delete_testimony,
  get_all_testimonies,
};
