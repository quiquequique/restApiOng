const dayjs = require("dayjs");
const { AUTH_TOKEN_ERROR, AUTH_TOKEN_EXPIRED } = require("../helpers/messages");
const { decodeToken } = require("../services/jwt.services");

exports.isAuthenticated = (req, res, next) => {
	const authorization = req.headers.authorization;

	if (!authorization) {
		return res.status(403).json({ ok: false, msg: AUTH_TOKEN_ERROR });
	}

	const token = authorization.replace(/['"]+/g, "");

	const payload = decodeToken(token);

	if (payload.exp <= dayjs().unix()) {
		return res.status(401).json({ ok: false, msg: AUTH_TOKEN_EXPIRED });
	}

	next();
};
