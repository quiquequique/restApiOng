const { Contact } = require('../models');

// eslint-disable-next-line consistent-return
const createContact = async (body) => {
  try {
    const created = await Contact.create(body);
    if (created) {
      return { meta: { msg: { created: true } } };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
};
module.exports = { createContact };
