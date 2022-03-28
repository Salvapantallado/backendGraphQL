import "../db.js";

import { typeDefs } from "../schemas/schemas.js";

import {
	addBookMutation,
	deleteBookMutation,
	editBookMutation,
} from "./mutationResolvers/bookMutations.js";
import {
	createUserMutation,
	loginMutation,
} from "./mutationResolvers/userMutations.js";
import {
	bookById,
	booksAuthors,
	booksPublisher,
	booksReducer,
	Myuser,
} from "./queryResolvers/booksQueries.js";
import {
	allAuthors,
	authorBooks,
	authorById,
} from "./queryResolvers/authorsQueries.js";
import {
	allPublishers,
	publisherBooks,
	publisherById,
} from "./queryResolvers/publishersQueries.js";

const resolvers = {
	Query: {
		me: Myuser,
		books: booksReducer,
		book: bookById,
		authors: allAuthors,
		author: authorById,
		publishers: allPublishers,
		publisher: publisherById,
	},
	Author: {
		books: authorBooks,
	},
	Book: {
		author: booksAuthors,
		publisher: booksPublisher,
	},
	Publisher: {
		books: publisherBooks,
	},
	Mutation: {
		addBook: addBookMutation,
		editBook: editBookMutation,
		deleteBook: deleteBookMutation,
		createUser: createUserMutation,
		login: loginMutation,
	},
};

export { typeDefs, resolvers };
