'use client';

import React from 'react';

// customs
import styles from '@/src/styles/Navbar.module.css';
import { Text } from '../ui/text';
import { AnimatedTabs } from '../ui/animated-tabs';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	const onPressWaitlist = () => {
		router.push('/waitlist');
	};

	const handleTabClick = (tab: string) => {
		const routes: { [key: string]: string } = {
			Home: '/',
			Waitlist: '/waitlist',
			About: '/about',
		};
		const route = routes[tab];
		if (route) router.push(route);
	};

	// Map current path to tab name
	const tabByPath: { [key: string]: string } = {
		'/': 'Home',
		'/waitlist': 'Waitlist',
		'/about': 'About',
	};
	const activeTab = tabByPath[pathname] || 'Home';

	return (
		<div className={styles.container}>
			<Image
				src='/images/callus-logo-fffaec.png'
				alt='Narao logo'
				width={42}
				height={42}
				className={styles.logo}
			/>
			<Text variant='hover-enter' className={styles.name}>
				Narao
			</Text>
			<div className={styles.rightPart}>
				<div className={styles.tabs}>
					<AnimatedTabs
						tabs={['Home', 'Waitlist', 'About']}
						onTabClick={handleTabClick}
						activeTab={activeTab}
					/>
				</div>
				<Button
					variant='default'
					className={styles.button}
					onClick={() => onPressWaitlist()}
				>
					Join up!
				</Button>
			</div>
		</div>
	);
}

export default Navbar;
