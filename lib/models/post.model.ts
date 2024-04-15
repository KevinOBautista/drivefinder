import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	images: [{ type: String }],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
