const { Organization } = require('../models');

const getOrganization = async () => {
  const organization = await Organization.findAll({ attributes: ['name', 'image', 'phone', 'address', 'urlFace', 'urlInsta', 'urlLinked'] });

  const organizations = { meta: {
    status: '200',
    link: '/organization/public',
    count: organization.length
  },
  data: organization
  // return organizations;
  };

  return organizations;
};

const checkIfExistOrg = async (id) => {
  const exist = await Organization.findByPk(id);
  return !!exist;
};

const updateOrganization = async (body, orgId) => {
  try {
    const exist = await checkIfExistOrg(orgId);
    if (exist) {
      const updated = await Organization.update(body, { where: { id: orgId } });
      if (updated[0] === 1) {
        return { msg: { updated: true } };
      }
    }
    return null;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getOrganization,
  updateOrganization,
  checkIfExistOrg
};
