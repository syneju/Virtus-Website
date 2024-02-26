import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<Link href="/" className="btn btn-ghost text-xl">
						daisyUI
					</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/about">about</Link>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
