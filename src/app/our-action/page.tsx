import postsData from "@/data/posts.json";
import Link from "next/link";

const posts = postsData.sort((a, b) => b.order - a.order);

export default function Home() {
	return (
		<main className=" mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			{/* 活动行 */}
			<section className="container flex flex-col items-center justify-center bg-base-100 my-8">
				<article className="prose text-center text-neutral-content mt-8">
					<h1> than 带带 h</h1>
				</article>
				<div className="divider px-8" />
				<section className="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
					{posts.map((post) => (
						<div key={post.id} className="card card-compact bg-base-100 shadow-xl">
							<figure>
								<img src={post.imageSrc} alt="Card" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{post.title}</h2>
								<p>{post.description}</p>
								<div className="card-actions justify-end">
									<Link href={`/our-action/${post.id}`}>more info</Link>
								</div>
							</div>
						</div>
					))}
				</section>
			</section>
		</main>
	);
}
