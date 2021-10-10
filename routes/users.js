var { Router } = require("express");
const {
	getUsers,
	getUserByID,
	addUser,
	editUser,
	deleteUser,
} = require("../controllers/users.js");
const { registerValidator } = require("../middlewares/userValidator");

const router = Router();

//Login and Register routes
router.post("/auth/register", [registerValidator], addUser);

router.get("/users", getUsers);
router.get("/users/:id", getUserByID);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
