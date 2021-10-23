const express = require('express');

const router = express.Router();

const { createContact } = require('../controllers/contacts.controller');

const { contactsValidator } = require('../middlewares/contacts.validator');


router.post('/', contactsValidator, createContact);

module.exports = router;
