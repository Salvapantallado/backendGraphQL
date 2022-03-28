// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
	id: {
		type: Number,
		trim: true,
	},
	firstName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
	},
	country: {
		type: String,
	},
});

const AuthorsDb = mongoose.model("AuthorsDb", authorSchema);

export default AuthorsDb;
