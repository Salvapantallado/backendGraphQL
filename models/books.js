// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	title: {
		type: String,
	},
	ISBN: {
		type: String,
	},
	synopsis: {
		type: String,
	},
	genres: {
		type: String,
	},
	publicationYear: {
		type: Number,
	},
	authorId: {
		type: Number,
	},
	publisherId: {
		type: Number,
	},
});

const BooksDb = mongoose.model("BooksDb", bookSchema);

export default BooksDb;
