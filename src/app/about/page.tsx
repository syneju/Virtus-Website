export default function aboutPage() {
	return (
		<main className=" mx-auto min-h-screen flex flex-col space-y-8 px-8 items-center justify-between">
			<section className="container mx-auto flex flex-col items-center justify-center bg-base-100">
				<article className="prose text-center text-pretty mt-8">
					<h1>我们的信念和使命</h1>
					<p>
						明德基金发起人是一群来自内地、香港的朋友
						<br />
						虽然我们来自不同的背景，我们有很多共通点
					</p>
					<p>
						我们热爱生命，我们感谢给予我们无悔支持的家人
						<br />
						我们感谢在我们成长过程中，对我们循循善诱、默默奉献的老师们
						<br />
						我们感谢给予我们扶持、帮助，乃至为我们的成长创造条件的长辈们和朋友们
						<br />
						我们深信知识可以改变人的命运，也可以造福于抚育我们的社会
					</p>
					<p>
						我们有一共同的心愿，回报社会，承担更多的社会责任
						<br />
						为了让这一心愿得以实现、持续发展，我们在香港注册成立了明德基金
					</p>
					<p>
						明德的宗旨是
						<br />
						帮助具备明日社会栋梁潜质、有志服务社会、品学兼优、家境困难的学生完成大学本科教育
					</p>
				</article>
			</section>

			<section className="container mx-auto flex flex-col items-center justify-center bg-base-100">
				<article className="prose text-center  text-pretty mt-8">
					<h1>我们的足迹</h1>
					<p>
						Next.js is a React framework for building full-stack web applications. You
						use React Components to build user interfaces, and Next.js for additional
						features and optimizations.
					</p>
				</article>
			</section>
			<section className="container grid gap-8 grid-cols-2">
				<article className="prose text-pretty mt-8">
					<h2>赞助机构</h2>
					<p>
						明德基金感谢下列机构赞助
						<br />
						名誉公司秘书：金华顾问有限公司
						<br />
						名誉法律顾问：李伟斌律师行
						<br />
						网站设计及开发：明德资助生志愿者团队
					</p>
				</article>

				<article className="prose text-pretty mt-8">
					<h2>联系我们</h2>

					<p>
						邮箱：enquiry@virtusfoundation.org
						<br />
						地址：香港中環域多利皇后街 15-16 号裕成商業大厦 801 室
						<br />
						明德基金有限公司
					</p>
				</article>
			</section>
		</main>
	);
}
