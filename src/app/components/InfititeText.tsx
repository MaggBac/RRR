'use client';
import { useRef, useEffect } from 'react';
import styles from '../page.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function InfiniteText() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,

				scrub: 0.5,

				start: 0,

				end: window.innerHeight,

				onUpdate: (e) => (direction = e.direction * -1),
			},

			x: '-500px',
		});

		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		gsap.set(firstText.current, { xPercent: xPercent });

		gsap.set(secondText.current, { xPercent: xPercent });

		requestAnimationFrame(animate);

		xPercent += 0.1 * direction;
	};

	return (
		<main className={styles.mainInfinite}>
			<div className={styles.sliderContainer}>
				<div ref={slider} className={styles.sliderInfinite}>
					<p ref={firstText}>Explore Natural Ingredients -</p>

					<p ref={secondText}>Explore Natural Ingredients -</p>
				</div>
			</div>
		</main>
	);
}
