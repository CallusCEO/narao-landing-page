'use client';

import React from 'react';
import { AirPlaneTakeOff, AlertTriangle, ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, Flag, Info, XCircle } from '@deemlol/next-icons';

// customs
import styles from '@/src/styles/WaitlistScreen.module.css';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';

function WaitlistScreen() {

    const router = useRouter();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [touched, setTouched] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [isSent, toggleSent] = React.useState(false);

    const checkValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setTouched(true);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setTouched(true);
    };


    const handleSubmit = async (
        event: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
    event.preventDefault(); // Prevent the default form submission
    if (!email || !name) {
        return; // Stop if the email is invalid
    }
    if (!checkValidEmail()) {
        return; // Stop if the email is invalid
    }

    toggleSent(true);

    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name }),
        });

        if (response.ok) {
            setMessage(`Welcome ${name}!`);
        } else {
            setMessage("Oops, already in?");
        }
    } catch (error) {
        console.error('Fetch error:', error);
        setMessage('Oops! Try again later.');
    }
};

    return (
        <div className={styles.container}>
            <div className={styles.topPart}>
                <Badge variant='animated-border' className={styles.badge}>
                                <div className='flex items-center gap-2'>
                                    <AirPlaneTakeOff size={20} color={'#6666ff'} />
                                    <p>First version on Android</p>
                                </div>
                            </Badge>
                <Text variant='generate-effect' className={styles.title}>
                    Join the Waitlist
                </Text>
            </div>


            <div className={styles.bottomPart}>
                <Input placeholder='example@gmail.com' onChange={(e) => handleChange(e)} value={email} maxLength={35} className={`${styles.input} ${isSent && styles.untouchable}`} />
                {email !== '' && (checkValidEmail()
                ? 
                <div className={styles.infoMessage}><Flag size={16} color={'#66ff66'}/><Text variant='generate-effect' className={styles.validEmail}>Valid Email</Text></div>
                : 
                <div className={styles.infoMessage}><Info size={16} color={'#ff6666'}/><Text variant='generate-effect' className={styles.invalidEmail}>Invalid Email</Text></div>
                )}
                
                <Input placeholder='Bruce Wayne' onChange={(e) => handleChangeName(e)} value={name} maxLength={35} className={`${styles.input} ${isSent && styles.untouchable}`}/>

                {(checkValidEmail() && name !== '') || !touched
                ? 
                <Button variant='glitch-brightness' className={`${styles.button} ${isSent && styles.untouchable}`} onClick={(e) => handleSubmit(e)}><p>Submit</p></Button> 
                : 
                <Button variant='shine' disabled className={`${styles.button} ${isSent && styles.untouchable}`}><AlertTriangle size={16} color={'#ff6666'}/><p>Unable to submit</p></Button>
                }
                {isSent && (
                    <div className={styles.loadingContainer}>
                        {message ? (
                            <>
                                <Text variant='generate-effect'
                                    className={`${styles.message} ${
                                        message.includes('Oops') &&
                                        styles.messageError
                                    }`}
                                >
                                    {message}
                                </Text>
                                <Text variant='generate-effect' className={styles.messageAlt}>
                                    {message.includes('Welcome')
                                        ? 'You were successfully signed in.'
                                        : 'An error occured while signing you in'}
                                </Text>
                                <Button
                                    variant='default'
                                    onClick={() => {toggleSent(false); setMessage('')}}
                                    className={styles.buttonLoading}
                                >
                                    <XCircle size={16} color={'#fffaec'}/>
                                    <p>Close</p>
                                </Button>
                            </>
                        ) : (
                            <>
                                <div className={styles.loadingCircle}></div>
                                <Text variant='generate-effect' className={styles.messageLoading}>
                                    Signing you in...
                                </Text >
                            </>
                        )}
                    </div>
                )}
                <div className={styles.linksContainer}>
                    <div className={styles.linkContainer}>
                        <ArrowLeft size={16} color={'var(--fourth-gray)'}/>
                        <Text onClick={() => router.push('/')} className={styles.link} variant='hover-decoration'>Return to home</Text>
                    </div>
                    <div className={styles.linkContainer}>
                        <Text onClick={() => router.push('/about')} className={styles.link} variant='hover-decoration'>Learn more</Text>
                        <ArrowRight size={16} color={'var(--fourth-gray)'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaitlistScreen;
