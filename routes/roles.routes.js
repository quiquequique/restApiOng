const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');
const rolesController = require('../controllers/roles');

const router = express.Router();

/* GET roles listing. */
router.get('/', rolesController.all);
// post
router.post('/', [isAuthenticated, isAdmin], rolesController.create);
// get by id
router.get('/:id', rolesController.findById);
// get by nombre
router.get('/:name', [isAuthenticated, isAdmin], rolesController.findByName);
// patch by id
router.get('/:id', [isAuthenticated, isAdmin], rolesController.update);
// delete by id
router.get('/:id', [isAuthenticated, isAdmin], rolesController.delete);

module.exports = router;
