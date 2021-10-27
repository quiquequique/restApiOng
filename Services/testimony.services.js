const { Testimonials } = require("../models");

const create_testimony = async (body) => {
  console.log(body);
  const name = typeof body.name !== "undefined";
  const content = typeof body.content !== "undefined";
  if (name && content) {
    const resp = await Testimonials.create(body);
    return resp;
  }
  return false;
};
module.exports = {
  create_testimony,
};
