// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	username: {
		type: String,
	},
});

const UserDb = mongoose.model("UserDb", userSchema);

export default UserDb;
