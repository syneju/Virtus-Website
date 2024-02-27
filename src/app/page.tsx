import Image from "next/image";
import Link from "next/link";
import mountains from "../../public/mountains.jpeg";

export default function Home() {
	return (
		<main className="mx-auto flex min-h-screen flex-col items-center justify-between">
			<div className="hero min-h-screen" style={{ backgroundImage: "url(mountains.jpeg)" }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
							deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
				</div>
			</div>
			<div className="container  flex flex-col items-center justify-center py-8">
				<article className="prose pb-8">
					<h1>21% more than last month</h1>
				</article>
				<div className="stats shadow container">
					<div className="stat">
						<div className="stat-figure text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-8 h-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								></path>
							</svg>
						</div>
						<div className="stat-title">Total Likes</div>
						<div className="stat-value text-primary">25.6K</div>
						<div className="stat-desc">21% more than last month</div>
					</div>

					<div className="stat">
						<div className="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-8 h-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
						<div className="stat-title">Page Views</div>
						<div className="stat-value text-secondary">2.6M</div>
						<div className="stat-desc">21% more than last month</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<div className="avatar online">
								<div className="w-16 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
						</div>
						<div className="stat-value">86%</div>
						<div className="stat-title">Tasks done</div>
						<div className="stat-desc text-secondary">31 tasks remaining</div>
					</div>
				</div>
			</div>
		</main>
	);
}
