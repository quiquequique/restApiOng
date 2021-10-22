const { Member } = require('../models');

const addMember = (data) => {
	try {
		return Member.create(data);
	} catch (error) {
		throw error;
	}
};

const getMembers = async () => {
	try {
		return await Member.findAll();
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addMember,
	getMembers,
};
