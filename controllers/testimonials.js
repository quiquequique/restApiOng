const getTestimonials = (req, res) => {
	res.send("Get all testimonials");
};

const getTestimonialByID = (req, res) => {
	const { id } = req.params;
	res.send(`Get testimonial by ID = ${id}`);
};

const addTestimonial = (req, res) => {
	const data = req.body;

	res.json({ msg: "Add new testimonial", data });
};

const editTestimonial = (req, res) => {
	const { id } = req.params;
	const data = req.body;

	res.json({ msg: `Edit testimonial with ID = ${id}`, data });
};

const deleteTestimonial = (req, res) => {
	const { id } = req.params;

	res.json({ msg: `Delete testimonial with ID = ${id}` });
};

module.exports = {
	getTestimonials,
	getTestimonialByID,
	addTestimonial,
	editTestimonial,
	deleteTestimonial,
};