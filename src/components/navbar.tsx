import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.webp";

const Navbar = () => {
	return (
		<header className="mx-auto bg-base-100">
			<nav className="navbar container">
				<div className="flex-1 pl-8">
					<Link href="/">
						<Image src={Logo} alt="daisyUI logo" priority={true} height={42} />
					</Link>
				</div>
				<div className="flex-wrap">
					<ul className="menu menu-horizontal px-4">
						{/* <li>
							<Link href="/build-dream">缔造梦想</Link>
						</li> */}
						<li>
							<Link href="/our-action">助学行</Link>
						</li>
						<li>
							<Link href="/donation">捐款渠道</Link>
						</li>
						<li>
							<Link href="/about">关于我们</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
