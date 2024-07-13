import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { albert_sans, albert_sans_init } from "./utils/fonts";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bofxul",
	description: "Boxful form",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={albert_sans_init.variable}>
			<body className="font-albert_sans">
				<AntdRegistry>{children}</AntdRegistry>
			</body>
		</html>
	);
}
