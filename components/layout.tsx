import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import Scroll from 'react-scroll'
import Header from './header'
import Footer from './footer'

const  ScrollLink = Scroll.Link

const name = 'Ryan Coble'
export const siteTitle = name + '\'s Portfolio'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {

    gsap.registerPlugin(ScrollTrigger);

    return (
        <div className='container'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="The personal portfolio of Ryan Coble"
                />
                <meta property="og:url" content="https://ryanmcoble.com" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content="The personal portfolio of Ryan Coble" />
                <meta property="og:image" content="https://ryanmcoble.com/images/site.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="ryanmcoble.com" />
                <meta property="twitter:url" content="https://ryanmcoble.com" />
                <meta name="twitter:title" content="Ryan Coble's Portfolio" />
                <meta name="twitter:description" content="The personal portfolio of Ryan Coble" />
                <meta name="twitter:image" content="https://ryanmcoble.com/images/site.png" />
            </Head>

            {/*  Site header */}
            <Header />

            <main>{children}</main>

            {/*  Site footer */}
            <Footer />


            <Script src="https://kit.fontawesome.com/1fe7179e06.js" crossOrigin="anonymous"></Script>
        </div>
    )
}