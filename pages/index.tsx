import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Home({
    allPostsData
}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {

    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const meetRef = useRef(null);
    const scrollRef = useRef(null);
    const heroDesignRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(contentRef.current, {
            y: '-30%',
            opacity: 0,
            duration: 2,
            ease: 'power4.out',
        });

        tl.from(headerRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.out',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');
        tl.from(meetRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.out',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');
        tl.from(scrollRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.out',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');

        tl.from(heroDesignRef.current, {
            opacity: 0,
            y: 50,
            ease: 'power4.out',
            duration: 1
        }, '-=2');
    }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Hero */}
            <div className='hero'>
                <div ref={contentRef} className='content'>
                    <h1 ref={headerRef} className=''>Thoughtfully Crafted Software Solutions</h1>
                    <div ref={meetRef} className='meet'>
                        <span>👇</span>
                        <p>Meet Ryan Coble</p>
                    </div>

                    {/* Scroll icon svg */}
                    {/* <svg className='scroll' width="32" height="61" viewBox="0 0 32 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="28" height="57" rx="14" stroke="white" stroke-width="4"/>
                    <path className='circle' d="M25 15C25 19.9706 20.9706 24 16 24C11.0294 24 7 19.9706 7 15C7 10.0294 11.0294 6 16 6C20.9706 6 25 10.0294 25 15Z" fill="#D9D9D9"/>
                    </svg> */}
                    <svg ref={scrollRef} className='scroll' width='40' height='77' viewBox='0 0 40 77' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g id='scroll' transform="translate(-253 -787)">
                            <g id='Rectangle_1' data-name="Rectangle 1" transform="translate(253 787)" fill='none' stroke='white' strokeWidth='4'>
                                <rect width='40' height='77' rx='20' stroke='none'/>
                                <rect width='36' height='73' x='2' y='2' rx='18' fill='none'/>
                            </g>
                            <circle className='circle' id='Ellipse_1' data-name='Ellipse 1' cx='11' cy='11' r='11' transform="translate(262 798)" fill='#fff' />
                        </g>
                    </svg>

                </div>
                
                {/* hero design svg */}
                <svg ref={heroDesignRef} className='hero-design' width="639" height="640" viewBox="0 0 639 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M319 400C319 444.183 283.183 480 239 480C194.817 480 159 444.183 159 400C159 355.817 194.817 320 239 320C283.183 320 319 355.817 319 400Z" fill="#00F7FF" fillOpacity="0.65" shapeRendering="crispEdges"/>
                    <path d="M480 240C480 284.183 444.183 320 400 320C355.817 320 320 284.183 320 240C320 195.817 355.817 160 400 160C444.183 160 480 195.817 480 240Z" fill="#FF64CB" fillOpacity="0.65"/>
                    <rect x="161" y="160" width="160" height="160" fill="white"/>
                    <rect x="161" y="480" width="160" height="160" fill="white"/>
                    <rect x="319" width="160" height="160" fill="#6E00FF"/>
                    <rect x="319" y="320" width="160" height="160" fill="#6E00FF"/>
                    <rect y="320" width="160" height="160" fill="#FF64CB" fillOpacity="0.1"/>
                    <rect x="480" y="160" width="160" height="160" fill="#6E00FF" fillOpacity="0.1"/>
                </svg>

            </div>

            {/* Featured project */}
            <section className='featured'>
                <div className='left'>
                    <div className='inner transition2'>
                        <p className='subtitle'>Featured Project</p>
                        <a href='#' className='title'>Automated Trading Platform</a>

                        <p className='description'>
                            Automated trading platform for stock market and cryptocurrency trading. Built with Rust, React, Node, Laravel, Kafka and MySQL.
                        </p>
                    </div>
                </div>
                <img className='right transition2' src='/images/featured.png' alt='Featured project' />
            </section>

            {/* Skills */}
            <section className='skills'>
                <div className='skills-container'>
                    <ul>
                        <li className='transition2'>
                            <div className='icon-container one'>
                                <img src='/images/icons/architect.svg' alt='System Architecture Icon' />
                            </div>
                            <p className='title'>System Architecture</p>
                            <p className='description'>
                                Transform Your Business with a Senior Engineer's Expertise. Discover top-notch system architecture in our portfolio. Benefit from optimized performance, scalability, and security. Partner with a seasoned developer today.
                            </p>
                        </li>
                        <li className='transition2'>
                            <div className='icon-container two'>
                                <img src='/images/icons/frontend.svg' alt='Frontend Icon' />
                            </div>
                            <p className='title'>Frontend Development</p>
                            <p className='description'>
                                Elevate Your User Experience with Frontend Development Expertise. Explore our portfolio to see the results of seamless design and technical excellence. Partner with us to bring your vision to life and create an exceptional user experience.
                            </p>
                        </li>
                        <li className='transition2'>
                            <div className='icon-container three'>
                                <img src='/images/icons/backend.svg' alt='Backend Icon' />
                            </div>
                            <p className='title'>Backend Development</p>
                            <p className='description'>
                                Unleash the Potential of Your Backend with Expert Development. Explore our portfolio and see the power of robust, scalable, and secure backend solutions. Partner with us to streamline your operations and drive your business forward.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Portfolio */}
            <section className='portfolio'>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">Ticketing Service</p>
                            <p className="title">HometownTicketing.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/hometownticketing.png' alt='Hometown Ticketing' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">Covid Testing</p>
                            <p className="title">SanescoHealth.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/sanescohealth.png' alt='Sanesco Health' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">Shopify Experts Marketplace</p>
                            <p className="title">Storetasker.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/storetasker.png' alt='Storetasker' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">SMS Marketing</p>
                            <p className="title">MobileDrip.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/mobiledrip.png' alt='Mobile Drip' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">eCommerce Brand</p>
                            <p className="title">ChubbiesShorts.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/chubbies.png' alt='Chubbies Shorts' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">eCommerce Brand</p>
                            <p className="title">47Brand.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/47brand.png' alt='47 Brand' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">eCommerce Brand</p>
                            <p className="title">RiptApparel.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/ript-apparel.png' alt='Ript Apparel' /></a>
                </div>
                <div className='portfolio-container transition3'>
                    <div className="portfolio-left">
                        <div className="inner">
                            <p className="subtitle">eCommerce Brand</p>
                            <p className="title">Spicely.com</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <a href='#'><img src='images/spicely.png' alt='Spicely' /></a>
                </div>
            </section>

            {/* Contact */}
            {/* <section className='contact'>
                <div className='contact-container transition3'>
                    <div className="contact-left">
                        <div className="inner">
                            <p className="subtitle">Let's Talk</p>
                            <p className="title">Contact Us</p>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!</p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="inner">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" cols={30} rows={10}></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}