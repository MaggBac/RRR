import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'RRR',
	description: 'REVIVE, REFRESH, REVEAL - SOAP ',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className} style={{margin:0}}>
				{children}
			</body>
		</html>
	);
}
