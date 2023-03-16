import "./globals.css";

export const metadata = {
	title: "Dictionary Web App",
	description: "Dictionary Web App",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="h-[100vh] w-[100vw]">{children}</body>
		</html>
	);
}
