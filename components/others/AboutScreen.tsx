'use client';

import React from 'react';
import { ArrowDown, ArrowLeft } from '@deemlol/next-icons';
import { useRouter } from 'next/navigation';

// customs
import styles from '@/src/styles/AboutScreen.module.css';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

function AboutScreen() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<Text variant='generate-effect' className={styles.title}>
					AI or not AI?
				</Text>
			</div>

			<Text variant='generate-effect' className={styles.text}>
				We planned some tricks for you!
			</Text>

			<div className={styles.lightOne}></div>
			<div className={styles.lightTwo}></div>
			<div className={styles.lightThree}></div>
			<div className={styles.lightFour}></div>
			<div className={styles.lightFive}></div>

			<ArrowDown
				className={styles.arrowDown}
				size={24}
				color={'var(--fourth-gray)'}
			></ArrowDown>

			<div className={styles.questionsSection}>
				<div className={styles.questionContainer}>
					<Text variant='generate-effect' className={styles.questionTitle}>
						I. What about AI?
					</Text>
					<Accordion
						className={styles.accordion}
						type='single'
						defaultValue='item-1'
						collapsible
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Will there be one?</AccordionTrigger>
							<AccordionContent>
								Yes. It will be one of the core features of the app.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Which model will be used?</AccordionTrigger>
							<AccordionContent>
								We plan on using OpenAI&#39;s models and Gemini&#39;s models.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>What will be its role?</AccordionTrigger>
							<AccordionContent>
								It will be used to create notes, modify them, or even make you
								learn!
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className={styles.questionContainer}>
					<Text variant='generate-effect' className={styles.questionTitle}>
						II. The purpose?
					</Text>
					<Accordion
						className={styles.accordion}
						type='single'
						defaultValue='item-1'
						collapsible
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								What are the benefits of using this app?
							</AccordionTrigger>
							<AccordionContent>
								Narao is a tool that will help learn faster and more efficiently.
								But most importantly, it will enable you to not forget what
								you&#39;ve learnt.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>
								What is the originality of this app?
							</AccordionTrigger>
							<AccordionContent>
								This application is unique because it is learning-oriented. Not just
								a simple note-taking app.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>How can it help me?</AccordionTrigger>
							<AccordionContent>
								If you sometimes struggle to revise for a test or exam, you should
								probably sign up. It is a gain of time and a gain of efficiency.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className={styles.questionContainer}>
					<Text variant='generate-effect' className={styles.questionTitle}>
						III. Coolest features?
					</Text>
					<Accordion
						className={styles.accordion}
						type='single'
						defaultValue='item-1'
						collapsible
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								Will I be able to record audio notes?
							</AccordionTrigger>
							<AccordionContent>
								Yes. With even a real-time voice-to-text feature.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger className='text-left'>
								Isn&#39;t there a risk of forgetting notes?
							</AccordionTrigger>
							<AccordionContent className='text-left'>
								No. With a TikTok-style scrolling features, you will be able to see
								the notes you&#39;ve wrote 2 years ago!
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>
								As a student, will I be able to manage my time?
							</AccordionTrigger>
							<AccordionContent>
								That is why we created a timetable/calendar feature!
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<Button
						variant='animated-border'
						className={styles.button}
						onClick={() => router.push('/waitlist')}
					>
						Join now!
					</Button>
				</div>
			</div>
			<div className={styles.linksContainer}>
				<div className={styles.linkContainer}>
					<ArrowLeft size={16} color={'var(--fourth-gray)'} />
					<Text
						onClick={() => router.push('/')}
						className={styles.link}
						variant='hover-decoration'
					>
						Return to home
					</Text>
				</div>
			</div>
		</div>
	);
}

export default AboutScreen;
