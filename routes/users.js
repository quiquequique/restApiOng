var { Router } = require("express");
const {
	getUsers,
	getUserByID,
	addUser,
	editUser,
	deleteUser,
} = require("../controllers/users");

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserByID);
router.post("/users", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
