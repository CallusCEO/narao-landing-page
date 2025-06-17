'use client';

import React from 'react';
import { Clock } from '@deemlol/next-icons';

// customs
import styles from '@/src/styles/Hero.module.css';
import { Text } from '../ui/text';
import { AnimatedTabs } from '../ui/animated-tabs';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Image from 'next/image';

function Hero() {
	const onPress = () => {};

	return (
		<div className={styles.container}>
			<Badge variant='animated-border' className={styles.badge}>
				<div className='flex items-center gap-2'>
					<Clock size={20} color={'#6666ff'} />
					<p>Coming soon...</p>
				</div>
			</Badge>
			<div className={styles.titleContainer}>
				<p className={styles.title}>When Writing Becomes Learning</p>
			</div>

			<div className={styles.buttonsContainer}>
				<Button variant='default' className={styles.button}>
					Learn more
				</Button>
				<Button variant='glitch-brightness' className={styles.button}>
					Join the waitlist
				</Button>
			</div>

			<div className={styles.grid}>
				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							Note-taking
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							Explore the new website that simplifies the creation of sophisticated
							components.
						</span>
					</div>
				</Card>

				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							To-do List
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							Explore the new website that simplifies the creation of sophisticated
							components.
						</span>
					</div>
				</Card>

				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							Timer
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							Explore the new website that simplifies the creation of sophisticated
							components.
						</span>
					</div>
				</Card>

				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							Android First
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							We chose to launch on Android first, with an Apple version planned
							post-launch.
						</span>
					</div>
				</Card>

				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							Sober but{' '}
							<Text className={`${styles.customText} text-xl`}>Customizable</Text>
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							Love green, purple, blue, or yellow? Customize your workspace with ease!
						</span>
					</div>
				</Card>

				<Card variant='revealed-pointer' className={styles.card}>
					<div className='flex flex-col gap-2'>
						<span className='text-xl font-semibold text-black dark:text-neutral-200'>
							Free to Use
						</span>
						<span className='text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400'>
							A guarantied free plan, and affordable paid plans.
						</span>
					</div>
				</Card>
			</div>

			<div className={styles.logo}>
				<Image src='/images/callus-logo-fffaec.png' alt='' fill className={styles.logo} />
			</div>
		</div>
	);
}

export default Hero;
