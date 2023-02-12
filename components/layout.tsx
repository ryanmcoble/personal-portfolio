import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

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
    gsap.registerPlugin(ScrollToPlugin);

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
                            <li><a href='#'>My work</a></li>
                            <li><a href='#'>My skills</a></li>
                            <li><a href='#'>Hire me</a></li>
                        </ul>
                    </nav>
                </header>
                <div className='social-header'>
                    <ul>
                        <li><a target='_blank' href='https://www.github.com/ryanmcoble'><i className="fa-brands fa-github"></i></a></li>
                        <li><a target='_blank' href='https://www.linkedin.com/in/rcoble/'><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href='#'><i className="fa-brands fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* <header className={styles.header}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/images/ryan.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <Image
                        priority
                        src="/images/ryan.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                    />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    </Link>
                    </h2>
                </>
                )}
            </header> */}
            <main>{children}</main>
            {!home && (
                <div className='backToHome'>
                <Link href="/">← Back to home</Link>
                </div>
            )}


            <Script src="https://kit.fontawesome.com/1fe7179e06.js" crossOrigin="anonymous"></Script>
        </div>
    )
}