import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
	return (
		<header className="mx-auto bg-base-100">
			<nav className="navbar container">
				<div className="flex-1 ">
					<Link href="/" className="btn btn-ghost text-xl">
						daisyUI
					</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-4">
						<li>
							<Link href="/build-dream">Build Dream</Link>
						</li>
						<li>
							<Link href="/our-action">Our Action</Link>
						</li>
						<li>
							<Link href="/donation">Donation</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<ThemeToggle />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
