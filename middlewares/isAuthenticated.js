const { AUTH_TOKEN_ERROR } = require("../helpers/messages");

exports.isAuthenticated = (req, res, next) => {
	const authorization = req.headers.authorization;

	if (!authorization) {
		return res.status(403).json({ ok: false, msg: AUTH_TOKEN_ERROR });
	}

	next();
};
