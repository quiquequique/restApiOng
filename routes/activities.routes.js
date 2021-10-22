var { Router } = require('express');
const {
  deleteActivity,
  updateActivity,
  addActivity,
  getActivities
} = require('../controllers/activities.controller');

const { activityValidator } = require('../middlewares/activity.validator');
const router = Router();

router.get('/', getActivities);
router.post('/', [activityValidator], addActivity);
router.put('/:id', [activityValidator], updateActivity);
router.delete('/:id', deleteActivity);

module.exports = router;
