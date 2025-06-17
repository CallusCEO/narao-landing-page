'use client';

import React from 'react';
import { ArrowDown, Clock } from '@deemlol/next-icons';

// customs
import styles from '@/src/styles/AboutScreen.module.css';
import { Text } from '../ui/text';
import { AnimatedTabs } from '../ui/animated-tabs';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

function AboutScreen() {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>AI or not AI?</p>
            </div>

            {/* <div className={styles.buttonsContainer}>
                <Button variant='default' className={styles.button}>
                    Learn more
                </Button>
                <Button variant='glitch-brightness' className={styles.button}>
                    Join the waitlist
                </Button>
            </div> */}

            <Text variant='generate-effect' className={styles.text}>We planned some tricks for you!</Text>

            <div className={styles.lightOne}></div>
            <div className={styles.lightTwo}></div>
            <div className={styles.lightThree}></div>

            <ArrowDown className={styles.arrowDown} size={24} color={'var(--fourth-gray)'}></ArrowDown>

            <div className={styles.questionsSection}>
                <Accordion
                className={styles.accordion}
                type="single"
                defaultValue="item-1"
                collapsible
                >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It's unstyled by default, giving you freedom over the look and
                    feel.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can it be animated?</AccordionTrigger>
                    <AccordionContent>
                    Yes! You can animate the Accordion with CSS or JavaScript.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default AboutScreen;
