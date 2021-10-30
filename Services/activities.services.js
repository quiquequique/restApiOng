const { Activities } = require('../models');

const selectAllActivities = async () => {
  try {
    return await Activities.findAll();
  } catch (error) {
    throw error;
  }
};

const createActivity = ({ name, content, image }) => {
  const newActivity = {
    name,
    content,
    image
  };
  try {
    const createdActivity = Activities.create(newActivity);
    if (!createdActivity) {
      return null;
    }
    return createdActivity;
  } catch (error) {
    throw error;
  }
};

const update = (data, id) => {
  const updatedActivity = Activities.update(data, {
    where: { id }
  });
  try {
    if (!updatedActivity) {
      return null;
    }
    return updatedActivity;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createActivity,
  selectAllActivities,
  update
};
