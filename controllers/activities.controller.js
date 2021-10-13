const getActivities = (req, res) => {
	res.send("Get all Activities");
};

const addActivity = (req, res) => {
	const data = req.body;

	res.json({ msg: "Add new activity", data });
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
	deleteActivity,
};
