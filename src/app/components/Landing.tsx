'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../page.module.css';

const Landing = ({setIsLoading}:any)=> {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
		tl.to('.lightCyanSlider', {
			x: '-10%',
			duration: 1,
		});

		tl.to(
			'.persianGreenSlider',
			{
				x: '-20%',
				duration: 1.5,
			},
			'-=1'
		);

		tl.to(
			'.whiteSlider',
			{
				x: '-30%',
				duration: 1.5,
			},
			'-=1'
		);

		tl.to('.hideLoader', {
			x: '0%',
			duration: 2,
			opacity: 1,
		});

		tl.to('.preloader', {
			x: '200%',
			duration: 3,
			onComplete: () => setIsLoading(false),
		});

		tl.fromTo(
			'nav',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.8,
			},
			'-=2'
		);

		tl.fromTo(
			'.we',
			{
				opacity: 0,
				x: '-400%',
			},
			{
				opacity: 1,
				ease: 'sine.out',
				duration: 1.2,
				x: 0,
			},
			'-=1.5'
		);
		tl.fromTo(
			'.work',
			{
				opacity: 0,
				y: -300,
			},
			{
				opacity: 1.1,
				duration: 0.8,
				y: 0,
			},
			'-=1.5'
		);
		tl.fromTo(
			'.together',
			{
				opacity: 0,
				x: '400%',
			},
			{
				opacity: 1,
				ease: 'sine.out',
				duration: 1.2,
				x: 0,
			},
			'-=1.5'
		);
		return () => {
			tl.kill();
		};
	}, []);

	return (
		<div className={`allLoader ${styles.allLoader}`}>
			<div className={`preloader ${styles.preloader}`}>
				<div className={`prlLogo ${styles.prlLogo}`}>
					<h1 className={`hideLoader ${styles.hideLoader}`}> RRR. </h1>
				</div>
				<div className={`lightCyanSlider ${styles.lightCyanSlider}`}></div>
				<div
					className={`persianGreenSlider ${styles.persianGreenSlider}`}></div>
				<div className={`whiteSlider ${styles.whiteSlider}`}></div>
			</div>

			<nav className={`nav ${styles.nav}`}>
				<a className={`logo ${styles.logo}`} href='index.html'>
					RRR.
				</a>
				<a href='#' style={{ textDecoration: 'none' }}>
					<p className={styles.menuContact}>contact</p>
				</a>
			</nav>
			<div className={`heroContent ${styles.heroContent}`}>
				<h2 className={`we ${styles.we}`}>Revive</h2>
				<h2 className={`work ${styles.work}`}>Refresh</h2>
				<h2 className={`together ${styles.together}`}>Reveal</h2>
			</div>
		</div>
	);
};

export default Landing;
