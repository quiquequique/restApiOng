const {
  createActivity,
  selectAllActivities,
  update
} = require('../services/activities.services');

const {
  CREATED_DONE,
  CREATE_FAIL,
  UPDATED_DONE,
  UPDATE_FAIL
} = require('../helpers/messages');

const getAllActivities = async (req, res) => {
  try {
    const activities = await selectAllActivities();
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({ ok: false, msg: error.message });
  }
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

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedActivity = await update(data, id);

    if (!updatedActivity) {
      return res.status(404).json({ msg: UPDATE_FAIL });
    }

    return res.status(200).json({ msg: UPDATED_DONE });
  } catch (error) {
    return res.status(500).json({ error: UPDATE_FAIL });
  }
};

const deleteActivity = (req, res) => {
  const { id } = req.params;

  res.send(`Delete activity with ID = ${id}`);
};

module.exports = {
  getAllActivities,
  addActivity,
  updateActivity,
  deleteActivity
};
