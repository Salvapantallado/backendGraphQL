import jwt from "jsonwebtoken";

import UserDb from "../models/user.js";

const JWT_SECRET = "ESTA_ES_UNA_VARIABLE_DE_ENTORNO";

// Authentification through JsonWebToken for certain actions.
export const authLoader = async (req) => {
	const auth = req ? req.headers.authorization : null;
	if (auth && auth.toLowerCase().startsWith("bearer ")) {
		const token = auth.substring(7);
		const { id } = jwt.verify(token, JWT_SECRET);
		const currentUser = await UserDb.findById(id);
		return { currentUser };
	}
};
