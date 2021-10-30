const { Router } = require('express');
const {
  deleteActivity,
  updateActivity,
  addActivity,
  getAllActivities
} = require('../controllers/activities.controller');
const { activityValidator } = require('../middlewares/activity.validator');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

const router = Router();

router.get('/', getAllActivities);
router.post('/', [activityValidator], [isAuthenticated, isAdmin], addActivity);
router.put(
  '/:id',
  [activityValidator],
  [isAuthenticated, isAdmin],
  updateActivity
);
router.delete('/:id', [isAuthenticated, isAdmin], deleteActivity);

module.exports = router;
