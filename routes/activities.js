var { Router } = require("express");
const {
	deleteActivity,
	editActivity,
	addActivity,
	getActivities,
} = require("../controllers/activities");

const router = Router();

router.get("/activities", getActivities);
router.post("/activities", addActivity);
router.put("/activities/:id", editActivity);
router.delete("/activities/:id", deleteActivity);

module.exports = router;
