import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Narao - When writing becomes learning',
	description:
		'Created by Sirius Szwedura. Narao is not yet released but is intented to facilitate learning through note-taking.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.variable} antialiased`}>{children}</body>
		</html>
	);
}
