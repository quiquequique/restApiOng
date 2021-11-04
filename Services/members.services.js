const dayjs = require('dayjs');
const { Member } = require('../models');
const { paginado } = require('../utils/pagination');

const getMembers = async (page) => {
	try {
		const members = await Member.findAll();
		return paginado(page, members);
	} catch (error) {
		throw error;
	}
};

const insertMember = (data) => {
	try {
		return Member.create(data);
	} catch (error) {
		throw error;
	}
};

const updateMember = async (id, data) => {
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

const deleteMember = async (id) => {
	try {
		const isDeleted = await Member.update(
			{ deletedAt: dayjs().format('YYYY-MM-DD hh:mm:ss') },
			{ where: { id, deletedAt: null } }
		);

		if (isDeleted[0] === 0) {
			return false;
		}

		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	insertMember,
	updateMember,
	getMembers,
	deleteMember,
};
