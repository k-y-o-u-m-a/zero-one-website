"use client"
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

function ThankYou({ show }) {
    const router = useRouter();

    return (
        <div
            style={{ transition: 'all 400ms ease-in-out' }}
            className={`mt-28 mb-12 pt-10 pb-8 sm:mt-20 sm:mb-10 absolute ${show ? 'visible relative' : 'invisible'
                }`}
        >
            <h1 className="text-7xl sm:text-5xl">
                Thank You!
                <br />
                We&apos;ll be in touch shortly.
            </h1>
            <p className="mt-20 w-3/5 text-lg xl:w-3/5 sm:w-3/4 sm:text-base">
                Feel free to explore some interesting topics on our{' '}
                <span>
                    <a className="text-blue" href="#">
                        blog
                    </a>
                </span>{' '}
                and roam around the{' '}
                <span>
                    <a className="text-blue" href="/">
                        website
                    </a>
                </span>
            </p>
            <div className="mt-16">
                <Button
                    onClick={() => router.push('/')}
                    style={{ border: 'none' }}
                    className="bg-primary-light text-primary hover:text-primary-light"
                >
                    <span
                        style={{
                            color: 'inherit',
                            transition: 'all 300ms ease-in-out',
                        }}
                        className="z-10"
                    >
                        Back to home
                    </span>
                </Button>
            </div>
        </div>
    );
}

const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        setShow(true);
        window.scrollTo(0, 0)
        e.preventDefault();
        // emailjs
        //   .sendForm(
        //     process.env.NEXT_PUBLIC_SERVICE_ID,
        //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
        //     form.current,
        //     process.env.NEXT_PUBLIC_USER_ID,
        //   )
        //   .finally(() => {
        //     setShow(true);
        //     setName('');
        //     setEmail('');
        //     setMessage('');
        //     window.scrollTo(0, 0);
        //   });
    };

    return (
        <section className="container-70 overflow-hidden">
            <ThankYou show={show} />
            <div className={`${show ? 'invisible hidden' : 'visible'} z-10`}>
                <div className="mt-28 mb-12 pt-10 pb-8 sm:mt-20 sm:mb-10">
                    <h1 className="text-7xl sm:text-5xl">
                        Interested?
                        <br />
                        Let&apos;s talk!
                    </h1>
                    <p className="mt-20 w-2/5 text-lg xl:w-3/5 sm:w-3/4 sm:text-base">
                        Just fill this simple form in and we will contact you promptly.
                        Hate forms? Drop us a line at{' '}
                        <span>
                            <a
                                className="text-blue"
                                href="mailto:zerooneofficial.mce@gmail.com"
                            >
                                zerooneofficial.mce@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
                <div className="mt-16">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex justify-between items-center flex-wrap xl:flex-col xl:justify-start xl:items-start">
                            <StyledInput
                                id="nameInput"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                label="Your name"
                                required
                                className="w-3/5"
                            />
                            <StyledInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                label="Your email"
                                required
                                className="w-3/5"
                            />
                        </div>
                        <StyledInput
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            label="Your message"
                            required
                            className="w-4/5"
                        />
                        <button type="submit" className="mt-16 flex rounded-full">
                            <Button
                                style={{ border: 'none' }}
                                className="bg-primary-light text-primary hover:text-primary-light"
                            >
                                <span
                                    style={{
                                        color: 'inherit',
                                        transition: 'all 300ms ease-in-out',
                                    }}
                                    className="z-10"
                                >
                                    Submit
                                </span>
                            </Button>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactPage