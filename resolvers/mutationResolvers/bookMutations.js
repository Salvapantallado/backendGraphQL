import BooksDb from "../../models/books.js";

// Add book mutation.
export const addBookMutation = async (root, args, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	const { input } = args;
	const booksLength = await BooksDb.collection.countDocuments();
	const newBook = new BooksDb({
		...input,
		id: booksLength + 1,
	});
	return await newBook.save();
};

// Edit book mutation.
export const editBookMutation = async (root, args, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	const { input } = args;
	return await BooksDb.findOneAndUpdate(
		{ id: input.id },
		{ ...input },
		{ new: true }
	);
};

// Delete book mutation
export const deleteBookMutation = async (root, args, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	return await BooksDb.findOneAndDelete({ id: args.id });
};
