import fs from "fs";
import path from "path";
import markdownit from "markdown-it";

// 解析Markdown文件
const markdownParser = new markdownit();

function parseMarkdownFile(filePath: string): string {
	const markdownContent = fs.readFileSync(path.resolve(filePath), "utf-8");
	return markdownParser.render(markdownContent);
}

export default parseMarkdownFile;
