const { Member } = require('../models');

const addMember = (data) => {
	try {
		return Member.create(data);
	} catch (error) {
		throw error;
	}
};

const editMember = async (id, data) => {
	try {
		Object.keys(data).forEach((i) => data[i] === '' && delete data[i]);

		const isUpdated = await Member.update(data, {
			where: { id },
		});

		if (isUpdated[0] === 0) {
			return false;
		}

		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addMember,
	editMember,
};
