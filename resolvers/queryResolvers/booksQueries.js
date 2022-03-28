import AuthorsDb from "../../models/authors.js";
import BooksDb from "../../models/books.js";
import PublishersDb from "../../models/publishers.js";
import { AuthenticationError } from "apollo-server";

// Check user corresponding to current auth token
export const Myuser = (root, args, context) => {
	return context.authCheck.currentUser;
};

export const booksReducer = async (root, args) => {
	// Case insensitive filter by name.
	if (args.title) return BooksDb.find(args.title);

	// Get author by firstname / lastname
	if (args.authorFilter) {
		const authinfo = await AuthorsDb.find(
			{ firstName: args.authorFilter } || { lastName: args.authorFilter }
		);
		return await BooksDb.find({ authorId: authinfo[0].id });
	}

	// Get publisher by name
	if (args.publisherFilter) {
		const publisherInfo = await PublishersDb.find({
			name: args.publisherFilter,
		});

		return await BooksDb.find({ publisherId: publisherInfo[0].id });
	}

	// Book's publication year filter
	if (args.publicationYear) return BooksDb.find(args.publicationYear);

	// ASC or DESC books search filter by title. ASC by default
	if (args.order === "ASC" && args.orderBy === "title") {
		const titleFilter = await BooksDb.find().sort(args.title);
		return titleFilter;
	}
	if (args.order === "DESC" && args.orderBy === "title") {
		const titleFilter = await BooksDb.find().sort(args.title);
		return titleFilter.reverse();
	}

	// ASC or DESC books search filter by publication year. ASC by default
	if (args.order === "ASC" && args.orderBy === "publicationYear") {
		const publicationYearFilter = await BooksDb.find().sort(
			args.publicationYear
		);
		return publicationYearFilter;
	}

	if (args.order === "DESC" && args.orderBy === "publicationYear") {
		const publicationYearFilter = await BooksDb.find().sort(
			args.publicationYear
		);
		return publicationYearFilter.reverse();
	}

	// If no arguments found, return all books with limit and offset (pagination)
	return await BooksDb.find({}).limit(args.limit).skip(args.skip);
};

// Get book by id
export const bookById = async (root, args) => {
	if (args.id) return await BooksDb.find({ id: args.id });
	return console.log("No existe un libro con ese id");
};

// get books' authors
export const booksAuthors = async (root, _, context) => {
	const { currentUser } = context.authCheck;
	if (!currentUser) throw new AuthenticationError("not authenticated");

	return await context.authorsLoader.load(root.authorId);
};

export const booksPublisher = (root) => {
	return PublishersDb.collection.find(root.publisherId == id);
};
