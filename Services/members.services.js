const { Member } = require('../models');

const addMember = (data) => {
	try {
		return Member.create(data);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addMember,
};
