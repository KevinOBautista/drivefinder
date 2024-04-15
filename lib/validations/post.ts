import * as z from "zod";

export const PostValidation = z.object({
	title: z.string().min(5),
	text: z.string().min(10).max(1000),
	// images:
});
