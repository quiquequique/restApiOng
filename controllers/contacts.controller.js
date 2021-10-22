
const errors = require('../helpers/resError.helper');

const { createContact } = require('../Services/contacts.services');

const controller = {

  createContact: async (req, res) => {
    const newContact = req.body;
    const createdContact = await createContact(newContact);
    if (createContact !== null) {
      res.status(200).json(createdContact);
    } else {
      // eslint-disable-next-line no-underscore-dangle
      res.status(500).json(errors._500);
    }
  }
};

module.exports = controller;
