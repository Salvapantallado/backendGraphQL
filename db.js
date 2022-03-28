import mongoose from "mongoose";

const MONGODB_URI =
	"mongodb+srv://title:title@cluster0.4kzkr.mongodb.net/TEST?retryWrites=true&w=majority";

mongoose
	.connect(MONGODB_URI, {
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongo database connected");
	})
	.catch((error) => {
		console.error("Fatal error at mongo connection", error.message);
	});
