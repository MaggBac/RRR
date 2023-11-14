'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import ImgWithText from './components/ImgWithText';
import Landing from './components/Landing';
import InfiniteText from './components/InfititeText';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<>
			<Head>
				<title>RRR</title>
				<meta
					name='description'
					content='ReviveRefreshReveal - soap'
				/>
				<meta property='og:title' content='RRR' />
				<meta
					property='og:description'
					content='ReviveRefreshReveal - soap'
				/>
				<meta property='og:type' content='website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Landing setIsLoading={setIsLoading} />
				{isLoading === false && (
					<>
						<ImgWithText />
						<InfiniteText />
						<ContactForm />
						<Footer />
					</>
				)}
			</main>
		</>
	);
}
