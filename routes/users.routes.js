var { Router } = require("express");
const {
	addUser,
	loginUser,
	disableUser,
} = require("../controllers/users.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const {
	registerValidator,
	loginValidator,
} = require("../middlewares/user.validator");

const router = Router();

//Login and Register routes
router.post("/auth/register", [registerValidator], addUser);
router.post("/auth/login", [loginValidator], loginUser);

router.delete("/:id", disableUser);
// router.get('/', getUsers);
// router.get('/:id', getUserByID);
// router.put('/:id', editUser);

module.exports = router;
