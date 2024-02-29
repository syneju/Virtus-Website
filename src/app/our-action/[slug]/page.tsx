import parseMarkdownFile from "@/lib/parseMarkdown";

export default function postPage({ params }: { params: { slug: string } }) {
	return (
		<main className=" mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			<div>My Post: {params.slug}</div>
		</main>
	);
}
