"use server";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Post from "../models/post.model";
import { revalidatePath } from "next/cache";

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
	const skipAmount = (pageNumber - 1) * pageSize;

	const postsQuery = Post.find()
		.sort({ createdAt: "desc" })
		.skip(skipAmount)
		.limit(pageSize);

	const totalPostCount = await Post.countDocuments();

	const posts = await postsQuery.exec();

	const isNext = totalPostCount > skipAmount + posts.length;

	return { posts, isNext };
}

interface Params {
	title: string;
	text: string;
	author: string;
	images: [string];
	path: string;
}

export async function createPost({
	title,
	text,
	author,
	images,
	path,
}: Params) {
	try {
		connectToDB();

		const createdPost = await Post.create({
			title,
			text,
			author,
			images,
		});

		await User.findByIdAndUpdate(author, {
			$push: { posts: createdPost._id },
		});

		revalidatePath(path);
	} catch (error: any) {
		throw new Error(`Failed to create post: ${error.message}`);
	}
}
