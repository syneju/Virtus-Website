import Link from "next/link";

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
							<a>Link</a>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
