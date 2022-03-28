import { gql } from "apollo-server";

export const typeDefs = gql`
	# Schemas
	type Book {
		id: ID!
		title: String!
		ISBN: String!
		synopsis: String!
		genres: String!
		publicationYear: Int!
		author: [Author]
		publisher: Publisher
	}

	type Author {
		id: ID!
		firstName: String!
		lastName: String!
		country: String!
		books: [Book]
	}

	type Publisher {
		id: ID!
		name: String!
		foundationYear: Int!
		books: [Book]
	}
	# Auth
	type User {
		id: ID!
		username: String!
	}
	type Token {
		value: String!
	}

	# type Mutation {
	# 	addBook(title: String!, genre: String!): Book
	# }
	input BookInput {
		id: ID
		title: String!
		ISBN: Int!
		synopsis: String!
		genres: String!
		publicationYear: Int!
		authorId: Int!
		publisherId: Int!
	}

	## Sort

	enum SortOrder {
		ASC
		DESC
	}

	enum SortableField {
		title
		publicationYear
	}

	# input Sort {
	# 	field: SortableField
	# 	order: SortOrder = ASC
	# }

	type Query {
		books(
			title: String
			publisherId: ID
			publicationYear: Int
			# sort: [Sort!]
			orderBy: SortableField
			order: SortOrder = ASC
			# authorOrPublisher: String
			authorFilter: String
			publisherFilter: String
			skip: Int = 0
			limit: Int = 10
		): [Book]

		me: User

		book(id: ID): [Book]

		authors: [Author]
		author(id: ID): [Author]

		publishers: [Publisher]
		publisher(id: ID): Publisher
	}
	type Mutation {
		addBook(input: BookInput): Book
		createUser(username: String!): User
		deleteBook(id: Int!): Book
		login(username: String!, password: String!): Token
		editBook(input: BookInput): Book
	}
`;
