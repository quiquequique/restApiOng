var { Router } = require('express');
const {
  deleteActivity,
  editActivity,
  addActivity,
  getActivities
} = require('../controllers/activities.controller');

const { activityValidator } = require('../middlewares/activity.validator');
const router = Router();

router.get('/', getActivities);
router.post('/', [activityValidator], addActivity);
router.put('/:id', editActivity);
router.delete('/:id', deleteActivity);

module.exports = router;
