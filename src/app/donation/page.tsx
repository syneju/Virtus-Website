import fs from "fs";
import postsData from "@/data/posts.json";
import { Post } from "@/types/models";
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

export default async function donationPage() {
	const posts: Post[] = postsData;
	const content = readMarkdownFile(posts[1].markdownPath);
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
