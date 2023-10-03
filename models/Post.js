const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
