import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";

const Topbar = () => {
	return (
		<nav className="top-0 z-30 flex w-full items-center justify-between px-6 py-3 ">
			<div className="flex justify-between gap-3">
				<FontAwesomeIcon
					icon={faBars}
					className="cursor-pointer object-contain md:hidden"
				/>
				<Link href="/" className="flex items-center gap-4">
					<Image
						src="/assets/logo.svg"
						alt="logo"
						width={64}
						height={64}
						className="object-contain"
					/>
				</Link>
			</div>
			<div className="flex items-center gap-5">
				<Link href="/add">
					<FontAwesomeIcon icon={faPlus} width={24} />
				</Link>
				<Link href="/favorites">
					<FontAwesomeIcon icon={faHeart} width={24} />
				</Link>
				<UserButton />
			</div>
		</nav>
	);
};

export default Topbar;
