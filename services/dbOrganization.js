const { Organization } = require('../models/');

const getAllOrganization = async () => {
  return await Organization.findAll();
};

/*const postOrganization = async body => {
  return await organization.create(body);
};

const updateOneOrganization = async (body, id) => {
  return await organization.update(body, {
    where: {
      id,
    },
  });
};*/


module.exports = {
  getAllOrganization
};