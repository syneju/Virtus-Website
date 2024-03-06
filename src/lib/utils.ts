import fs from "fs";
import path from "path";
import markdownit from "markdown-it";

// 解析 Markdown 文件
const markdownParser = new markdownit();

function parseMarkdownFile(filePath: string): string {
	const markdownContent = fs.readFileSync(path.resolve(filePath), "utf-8");
	return markdownParser.render(markdownContent);
}

export async function readMarkdownFile(filePath: string) {
	try {
		// 读取 Markdown 文件内容
		const markdownContent = fs.readFileSync(filePath, "utf-8");
		return markdownContent;
	} catch (error) {
		console.error("Error reading Markdown file:", error);
		return ""; // 返回空字符串或者其他默认内容
	}
}
export default parseMarkdownFile;
readMarkdownFile;
