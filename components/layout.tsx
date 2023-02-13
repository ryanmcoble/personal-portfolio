import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import Scroll from 'react-scroll'

const  ScrollLink = Scroll.Link

const name = 'Ryan Coble'
export const siteTitle = 'Ryan Coble\'s Portfolio'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // gsap.to()
    }, []);

    return (
        <div className='container'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Ryan Coble's Portfolio"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/*  Site header */}
            <div className='nav-container'>
                <header>
                    <a href='/' className='logo'>Ryan Coble</a>

                    <nav>
                        <ul>
                            <li>
                                <ScrollLink to='portfolio' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                                    My work
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='skills' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                                    My skills
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to='contact' className='hire-me' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                                    Hire me
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className='social-header'>
                    <ul>
                        <li><a target='_blank' href='https://www.github.com/ryanmcoble'><i className="fa-brands fa-github fa-lg"></i></a></li>
                        <li><a target='_blank' href='https://www.linkedin.com/in/rcoble/'><i className="fa-brands fa-linkedin fa-lg"></i></a></li>
                        <li><a href='#'><i className="fa-brands fa-freelancer fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
            <main>{children}</main>
            {!home && (
                <div className='backToHome'>
                <Link href="/">← Back to home</Link>
                </div>
            )}

            {/*  Site footer */}
            <footer>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <h3>Ryan Coble</h3>
                        <p>Senior Engineer</p>
                        <p><a href='mailto:ryan.m.coble@gmail.com'>ryan.m.coble@gmail.com</a></p>
                    </div>
                    <div className='footer-right'>
                        <div className='social-footer'>
                            <ul>
                                <li><a target='_blank' href='https://www.github.com/ryanmcoble'><i className="fa-brands fa-github fa-lg white"></i></a></li>
                                <li><a target='_blank' href='https://www.linkedin.com/in/rcoble/'><i className="fa-brands fa-linkedin fa-lg white"></i></a></li>
                                <li><a href='#'><i className="fa-brands fa-freelancer fa-lg white"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <Script src="https://kit.fontawesome.com/1fe7179e06.js" crossOrigin="anonymous"></Script>
        </div>
    )
}