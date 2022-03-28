import AuthorsDb from "../../models/authors.js";
import BooksDb from "../../models/books.js";
import { AuthenticationError } from "apollo-server";

// Get all authors
export const allAuthors = async (root, args, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	return await AuthorsDb.find({});
};

// Get author by id
export const authorById = async (root, args, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	if (args.id) {
		console.log(args);
		return await AuthorsDb.find({ id: args.id });
	}
	return console.log("No existe un autor con ese id");
};

// Get author's array of books
export const authorBooks = async (root, _, context) => {
	return await context.authorBooksLoader.load(root.id, { cache: true });
};
