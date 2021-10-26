var { Router } = require("express");
const {
	addUser,
	loginUser,
	updateUser,
	disableUser,
} = require("../controllers/users.controller");
const {
	registerValidator,
	loginValidator,
} = require("../middlewares/user.validator");
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = Router();

//Login and Register routes
router.post("/auth/register", [registerValidator], addUser);
router.post("/auth/login", [loginValidator], loginUser);

router.patch("/:id", [isAuthenticated, isAdmin], updateUser);
router.delete("/:id", [isAuthenticated, isAdmin], disableUser);

// router.get('/', getUsers);
// router.get('/:id', getUserByID);

module.exports = router;
