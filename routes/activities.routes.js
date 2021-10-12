var { Router } = require("express");
const {
	deleteActivity,
	editActivity,
	addActivity,
	getActivities,
} = require("../controllers/activities.controller");

const router = Router();

router.get("/", getActivities);
router.post("/", addActivity);
router.put("/:id", editActivity);
router.delete("/:id", deleteActivity);

module.exports = router;
