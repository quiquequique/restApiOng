const { Activities } = require('../models');

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

module.exports = {
  createActivity
};
