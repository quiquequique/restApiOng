/* eslint-disable no-underscore-dangle */

const errors = require('../helpers/resError.helper');

const { createContact, getAllContacts } = require('../Services/contacts.services');

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
  },

  getAllContacts: async (req, res) => {
    try {
      const contacts = await getAllContacts();
      if (contacts === null) {
        return res.status(404).json(errors._404);
      }
      return res.status(200).json(contacts);
    } catch (error) {
      return res.status(500).json(errors._500);
    }
  }
};

module.exports = controller;
