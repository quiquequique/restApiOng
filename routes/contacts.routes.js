const express = require('express');

const router = express.Router();

const { createContact, getAllContacts } = require('../controllers/contacts.controller');

const { contactsValidator } = require('../middlewares/contacts.validator');

const { isAdmin } = require('../middlewares/isAdmin');

const { isAuthenticated } = require('../middlewares/isAuthenticated');


router.post('/', contactsValidator, createContact);
router.get('/', [isAuthenticated, isAdmin], getAllContacts);

module.exports = router;
