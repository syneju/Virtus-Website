import Image from "next/image";
import Link from "next/link";
import mountains from "../../public/mountains.jpeg";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			<div
				className="hero min-h-screen pm-8"
				style={{ backgroundImage: "url(mountains.jpeg)" }}
			>
				<div className="hero-overlay bg-opacity-60" />
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
			{/* 缔造梦想 */}
			<div className="container flex flex-col items-center justify-center bg-base-100">
				<article className="prose text-center text-neutral-content mt-8">
					<h1> than last month</h1>
					<p className="">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</article>
				<div className="divider px-8" />
				<div className="stats container stats-vertical sm:stats-horizontal mb-8">
					<div className="stat place-items-center">
						<div className="stat-figure text-primary" />
						<div className="stat-title">Total Likes</div>
						<div className="stat-value text-primary">25.6K</div>
						<div className="stat-desc">21% more than last month</div>
					</div>

					<div className="stat place-items-center">
						<div className="stat-figure text-secondary" />
						<div className="stat-title">Page Views</div>
						<div className="stat-value text-secondary">2.6M</div>
						<div className="stat-desc">21% more than last month</div>
					</div>
					<div className="stat place-items-center">
						<div className="stat-figure text-secondary" />
						<div className="stat-value">86%</div>
						<div className="stat-title">Tasks done</div>
						<div className="stat-desc text-secondary">31 tasks remaining</div>
					</div>
				</div>
			</div>
			{/* 活动行 */}
			<div className="container flex flex-col items-center justify-center bg-base-100">
				<article className="prose text-center text-neutral-content mt-8">
					<h1> than 带带h</h1>
				</article>
				<div className="divider px-8" />
				<div className="container grid gap-8 grid-cols-3 px-8">
					<div className="card card-compact bg-base-100 shadow-xl ">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact  bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<a className="link" href="/">
									more info
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
