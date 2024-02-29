import parseMarkdownFile from "@/lib/parseMarkdown";
import postsData from "../../../data/posts.json";

const posts = postsData;

export default function donationPage() {
	return (
		<main className="mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			<article className="prose bg-base-100 m-8 p-8">
				<div
					dangerouslySetInnerHTML={{
						__html: parseMarkdownFile(posts[0].markdownPath),
					}}
				/>
			</article>
		</main>
	);
}
