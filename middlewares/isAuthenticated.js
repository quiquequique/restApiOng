const dayjs = require('dayjs');
const {
	AUTH_TOKEN_ERROR,
	AUTH_TOKEN_EXPIRED,
	AUTH_TOKEN_INVALID,
} = require('../helpers/messages');
const { decodeToken } = require('../Services/jwt.services');
const { validateUser } = require('../Services/users.services');

exports.isAuthenticated = async (req, res, next) => {
	const authorization = req.headers.authorization;

	if (!authorization) {
		return res.status(403).json({ ok: false, msg: AUTH_TOKEN_ERROR });
	}

	const token = authorization.replace(/['"]+/g, '');

	const userData = decodeToken(token);

	if (userData.exp <= dayjs().unix()) {
		return res.status(401).json({ ok: false, msg: AUTH_TOKEN_EXPIRED });
	}

	const isValid = await validateUser(userData.id);

	if (!isValid) {
		return res.status(403).json({ ok: false, msg: AUTH_TOKEN_INVALID });
	}

	req.user = userData;

	next();
};
