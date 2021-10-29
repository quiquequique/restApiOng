var { Router } = require('express');
const {
	createUser,
	loginUser,
	getAllUsers,
	updateUserByID,
	deleteUserByID,
	getUserData,
} = require('../controllers/users.controller');
const {
	registerValidator,
	loginValidator,
} = require('../middlewares/user.validator');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = Router();

//Login and Register routes
router.post('/auth/register', [registerValidator], createUser);
router.post('/auth/login', [loginValidator], loginUser);
router.get('/auth/me', [isAuthenticated], getUserData);

//User Endpoints
router.get('/', [isAuthenticated/* , isAdmin*/], getAllUsers);
router.patch('/:id', [isAuthenticated/* , isAdmin*/], updateUserByID);
router.delete('/:id', [isAuthenticated/* , isAdmin*/], deleteUserByID);

module.exports = router;
