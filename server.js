import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./resolvers/index.js";
import bodyParser from "body-parser";

import { AuthorBooksLoader } from "./loaders/authorBooksLoader.js";
import { AuthorsLoader } from "./loaders/authorsLoader.js";
import { PublisherBooksLoader } from "./loaders/publisherBooksLoader.js";
import { authLoader } from "./loaders/authentificationChecker.js";

async function startServer() {
	const app = express();
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: async ({ req }) => ({
			authCheck: await authLoader(req),
			authorBooksLoader: AuthorBooksLoader(),
			publisherBooksLoader: PublisherBooksLoader(),
			authorsLoader: AuthorsLoader(),
		}),
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app: app, path: "/" });

	app.use(bodyParser.urlencoded({ extended: true }));

	app.listen(4000, () =>
		console.log("Server up in port http://localhost:4000/")
	);
}

startServer();
