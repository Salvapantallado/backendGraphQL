import DataLoader from "dataloader";
import BooksDb from "../models/books.js";

// Query batching through dataloader.
export const batchPublisherBooks = async (keys) => {
	const books = keys.map((keys) => {
		return BooksDb.find({ publisherId: keys });
	});
	return books;
};

export const PublisherBooksLoader = () => new DataLoader(batchPublisherBooks);
