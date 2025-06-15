'use client';

import React from 'react';

// customs
import styles from '@/src/styles/Navbar.module.css';
import { Text } from '../ui/text';
import { AnimatedTabs } from '../ui/animated-tabs';
import { Button } from '../ui/button';

function Navbar() {
	const onPress = () => {};

	return (
		<div className={styles.container}>
			<Text variant='hover-enter' className={styles.name}>
				Narao
			</Text>
			<div className={styles.rightPart}>
				<AnimatedTabs tabs={['Home', 'Pricing']} />
				<Button variant='shine' className={styles.button} onClick={() => onPress()}>
					Join up!
				</Button>
			</div>
		</div>
	);
}

export default Navbar;
