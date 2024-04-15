import PostCar from "@/components/forms/PostCar";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
	const user = await currentUser();

	if (!user) return null;

	const userInfo = await fetchUser(user.id);

	if (!userInfo?.onboarded) redirect("/onboarding");
	return (
		<>
			<h1 className=" text-3xl">Create Post</h1>
			<PostCar userId={user.id} />
		</>
	);
}

export default Page;
