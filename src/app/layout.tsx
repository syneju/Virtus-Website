import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
