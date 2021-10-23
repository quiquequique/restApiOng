const { Contact } = require('../models');
const sendEmail = require('../Services/welcomeEmail.services');

// eslint-disable-next-line consistent-return
const createContact = async (body) => {
  try {
    const created = await Contact.create(body);
    if (created) {
      sendEmail(body.firstName, body.lastName, body.email, 'newContact');
      return { meta: { msg: { created: true } } };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
};

const getAllContacts = async () => {
  const data = await Contact.findAll();
  let contacts = null;

  if (data[0] !== undefined) {
    contacts = { meta: {
      status: '200',
      link: '/organization/public',
      count: data.length
    },
    data
    };
  }

  return contacts;
};
module.exports = { createContact, getAllContacts };
