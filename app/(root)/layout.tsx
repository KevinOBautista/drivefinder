import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import Searchbar from "@/components/shared/Searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Drive Finder",
	description: "Best marketplace for cars",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider afterSignInUrl="/" afterSignUpUrl="/onboarding">
			<html lang="en">
				<body className={inter.className}>
					<Topbar />
					{/* <Searchbar/> */}
					<main className="flex flex-row">
						<LeftSidebar />
						<section className="main-container px-6">
							<div className="w-full max-w-4xl">{children}</div>
						</section>
					</main>
					<Bottombar />
				</body>
			</html>
		</ClerkProvider>
	);
}
