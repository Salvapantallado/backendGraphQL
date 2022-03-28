import DataLoader from "dataloader";
import BooksDb from "../models/books.js";

// Query batching through dataloader.
const batchAuthorBooks = async (keys) => {
	const books = keys.map((keys) => {
		return BooksDb.find({ authorId: keys });
	});
	return books;
};

export const AuthorBooksLoader = () => new DataLoader(batchAuthorBooks);
