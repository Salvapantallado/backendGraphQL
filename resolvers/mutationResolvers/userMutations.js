import UserDb from "../../models/user.js";

// Create user for authentification
export const createUserMutation = async (root, args) => {
	const userLength = await UserDb.collection.countDocuments();
	const user = new UserDb({ username: args.username, id: userLength + 1 });

	return user.save().catch((error) => {
		throw new UserInputError(error.message, {
			invalidArgs: args,
		});
	});
};

// Login using -created user username- + "passpass" to get auth token.
export const loginMutation = async (root, args) => {
	const user = await UserDb.findOne({
		username: args.username,
	});

	if (!user || args.password !== "passpass") {
		throw new UserInputError("Wrong credentials");
	}

	const userForToken = {
		username: user.username,
		id: user._id,
	};

	return {
		value: jwt.sign(userForToken, JWT_SECRET),
	};
};
