const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_TOKEN_KEY;

const createAccessToken = (data) => {
	const { id, firstName, lastName, email, photo, roleId } = data;

	const payload = {
		id,
		firstName,
		lastName,
		email,
		photo,
		roleId,
	};

	return jwt.sign(payload, secretKey, { expiresIn: '12h' });
};

const decodeToken = (token) => {
	return jwt.verify(token, secretKey);
};

module.exports = {
	createAccessToken,
	decodeToken,
};
