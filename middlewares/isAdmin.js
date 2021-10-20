const { NOT_ADMIN } = require("../helpers/messages");
const { decodeToken } = require("../Services/jwt.services");

exports.isAdmin = (req, res, next) => {
	const authToken = req.headers.authorization;
	const token = authToken.replace(/['"]+/g, "");

	const { roleId } = decodeToken(token);

	console.log(roleId);

	if (roleId !== 1) {
		return res.status(401).json({ ok: false, msg: NOT_ADMIN });
	}

	next();
};
