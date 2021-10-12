var { Router } = require("express");
const {
	getUsers,
	getUserByID,
	addUser,
	editUser,
	deleteUser,
} = require("../controllers/users.controller");
const { registerValidator } = require("../middlewares/user.validator");

const router = Router();

//Login and Register routes
router.post("/auth/register", [registerValidator], addUser);

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
