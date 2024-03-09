import postsData from "@/data/posts.json";
import Link from "next/link";

const posts = postsData.sort((a, b) => b.order - a.order).slice(0, 6);

export default function Home() {
	return (
		<main className=" mx-auto  flex flex-col space-y-8">
			<section
				className="hero min-h-svh"
				style={{ backgroundImage: "url(mountains.jpeg)" }}
			>
				<div className="hero-overlay bg-opacity-60" />
				<div className="container hero-content  text-neutral-content text-pretty flex-row left-0 top-0">
					<div className="max-w-3xl text-left ">
						<h1 className="mb-5 text-5xl font-bold">明德基金是在香港注册的慈善机构</h1>
						<p className="line-clamp-3 text-2xl">
							明德的宗旨是帮助具备明日社会栋梁潜质、有志服务社会、品学兼优、家境困难的学生完成大学本科教育
						</p>
					</div>
				</div>
			</section>

			{/* 缔造梦想 */}
			<section className="container flex flex-col items-center  bg-base-100">
				<article className="prose text-center text-pretty mt-8">
					<h1> “缔造梦想”公益项目</h1>
					<p className="px-8 ">
						资助内容为大学本科期间（4 年或 5 年）学费，每学年不高于 6000
						元人民币，入选学生每年提供成绩单、学费发票、学习生活总结申领后拨款至学生本人银行账户
					</p>
				</article>
				<div className="divider px-8" />
				<div className="stats container stats-vertical sm:stats-horizontal mb-8">
					<div className="stat place-items-center">
						<div className="stat-figure text-primary" />
						<div className="stat-title">我们的项目启动于</div>
						<div className="stat-value text-primary">2006 年</div>
						{/* <div className="stat-desc">21% more than last month</div> */}
					</div>
					<div className="stat place-items-center">
						<div className="stat-figure text-secondary" />
						<div className="stat-title">我们累计资助学生超过</div>
						<div className="stat-value text-secondary">900 人</div>
						{/* <div className="stat-desc">21% more than last month</div> */}
					</div>
					<div className="stat place-items-center">
						<div className="stat-figure text-secondary" />
						<div className="stat-title">我们踏足城市</div>
						<div className="stat-value text-orange-600">9 个</div>
						{/* <div className="stat-desc ">31 tasks remaining</div> */}
					</div>
				</div>
			</section>
			{/* 活动行 */}
			<section className="container flex flex-col items-center justify-center bg-base-100">
				<article className="prose text-center text-pretty mt-8">
					<h1>“助学行”活动</h1>
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
