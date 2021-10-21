const { createActivity } = require('../services/activities.services');

const getActivities = (req, res) => {
  res.send('Get all Activities');
};

const addActivity = async (req, res) => {
  try {
    const { name, content, image } = req.body;
    const newActivity = await createActivity({ name, content, image });

    return res.status(201).json({ msg: newActivity });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
