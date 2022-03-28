import DataLoader from "dataloader";
import AuthorsDb from "../models/authors.js";

// Query batching through dataloader.
export const batchAuthors = async (keys) => {
	const authors = keys.map((keys) => {
		return AuthorsDb.find({ id: keys });
	});
	return authors;
};

export const AuthorsLoader = () => new DataLoader(batchAuthors);
