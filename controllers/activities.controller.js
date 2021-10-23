const { createActivity } = require('../services/activities.services');

const { CREATED_DONE, CREATE_FAIL } = require('../helpers/messages');

const getActivities = (req, res) => {
  res.send('Get all Activities');
};

const addActivity = async (req, res) => {
  try {
    const data = req.body;
    const newActivity = await createActivity(data);

    return res.status(201).json({ msg: CREATED_DONE, newActivity });
  } catch (error) {
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

const editActivity = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  res.json({ msg: `Edit activity with ID = ${id}`, data });
};

const deleteActivity = (req, res) => {
  const { id } = req.params;

  res.send(`Delete activity with ID = ${id}`);
};

module.exports = {
  getActivities,
  addActivity,
  editActivity,
  deleteActivity
};
