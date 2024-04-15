"use server";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Post from "../models/post.model";
import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string) {
	try {
		connectToDB();

		return await User.findOne({ id: userId }).populate({
			path: "posts",
			model: Post,
		});
	} catch (error: any) {
		throw new Error(`Failed to fetch user: ${error.message}`);
	}
}

interface Params {
	userId: string;
	name: string;
	image: string;
	bio: string;
	path: string;
}

export async function updateUser({ userId, name, image, bio, path }: Params) {
	try {
		connectToDB();

		await User.findOneAndUpdate(
			{ id: userId },
			{
				name,
				image,
				bio,
				onboarded: true,
			},
			{ upsert: true }
		);

		revalidatePath(path);
	} catch (error: any) {
		throw new Error(`Failed to create/update user: ${error.message}`);
	}
}

export async function fetchUserPosts(userId: string) {
	try {
		connectToDB();

		const posts = await User.findOne({ id: userId }).populate({
			path: "posts",
			model: Post,
		});
		return posts;
	} catch (error: any) {
		throw new Error(`Failed to fetch user posts: ${error.message}`);
	}
}
