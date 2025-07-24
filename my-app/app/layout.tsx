import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

export const metadata: Metadata = {
	title: "Writing That Resonates - A Modern Blog",
	description:
		"Explore insightful articles on technology, culture, and lifestyle. Discover a modern blog that resonates with your interests.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${playfair.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
