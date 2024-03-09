import fs from "node:fs";
import postsData from "@/data/posts.json";
import type { Post } from "@/types/models";
import ReactMarkdown from "react-markdown";

function readMarkdownFile(filePath: string): string {
	try {
		const markdownContent = fs.readFileSync(filePath, "utf-8");
		return markdownContent;
	} catch (error) {
		console.error("Error reading Markdown file:", error);
		return "";
	}
}
export default function Page({ params }: { params: { slug: string } }) {
	const posts: Post[] = postsData;
	const post = posts.find((p) => p.id === params.slug);
	if (!post) {
		return <div>Post not found</div>;
	}
	const content = readMarkdownFile(post.markdownPath);
	if (!content) {
		return <div>Loading...</div>;
	}
	return (
		<main className="mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			<article className="prose bg-base-100 m-8 p-8">
				<ReactMarkdown>{content}</ReactMarkdown>
			</article>
		</main>
	);
}
