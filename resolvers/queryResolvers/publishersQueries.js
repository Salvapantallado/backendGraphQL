import PublishersDb from "../../models/publishers.js";

// Get all publishers
export const allPublishers = async () => {
	return await PublishersDb.find({});
};

// Get publisher by id
export const publisherById = async (root, args) => {
	if (args.id) return await PublishersDb.find(() => id == args.id);
	return console.log("No existe una editorial con ese id");
};

// Get publisher's array of books
export const publisherBooks = async (root, _, context) => {
	return await context.publisherBooksLoader.load(root.id);
};
