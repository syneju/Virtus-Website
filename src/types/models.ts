export interface Post {
	id: string;
	order: number;
	imageSrc: string;
	title: string;
	description: string;
	markdownPath: string;
}

export interface Donor {
	id: string;
	name: string;
	data: string;
	project: string;
	amount: number;
}
