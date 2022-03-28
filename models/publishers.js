// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
	id: {
		type: Number,
		trim: true,
	},
	name: {
		type: String,
		trim: true,
	},
	foundationYear: {
		type: Number,
		trim: true,
	},
});

const PublishersDb = mongoose.model("PublishersDb", publisherSchema);

export default PublishersDb;
