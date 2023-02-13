import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import Hero from '../components/hero'
import FeaturedProject from '../components/featured_project'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'

export default function Home({
    allProjectsData
}: {
    allProjectsData: {
        date: string
        title: string
        id: string
    }[]
}) {

    const transition2Refs = useRef([]);
    const transition3Refs = useRef([]);

    useEffect(() => {
        gsap.from(transition2Refs.current, {
            scrollTrigger: {
                trigger: transition2Refs.current,
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3
        });

        gsap.from(transition3Refs.current, {
            scrollTrigger: {
                trigger: transition3Refs.current,
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.6
        });
    }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Hero section */}
            <Hero />

            {/* Featured project */}
            <FeaturedProject
                transitionRef={transition2Refs}
                project={{
                    title: 'Automated Trading Platform',
                    description: 'I have built an automated trading platform for the stock market and cryptocurrency trading utilizing the latest technologies, including Rust, React, Node, Laravel, Kafka, and MySQL. This technology stack offers speed, stability, and scalability, providing traders with more accurate and efficient trading signals and a seamless user experience.',
                    featured_image: '/images/featured.png'
                }}
            />

            {/* Skills */}
            <Element id-='skills' name='skills'>
                <Skills
                    transitionRef={transition2Refs}
                    skills={[
                        {
                            title: 'Frontend Development',
                            description: "I have a passion for crafting beautiful and user-friendly websites that offer a seamless experience to users.", 
                            // With a strong understanding of HTML, CSS, and JavaScript, I have built various projects that showcase my ability to turn design concepts into reality. From creating responsive layouts to implementing interactive components, I am experienced in the full spectrum of front-end development. I am always looking to stay up-to-date with the latest technologies and am committed to producing clean, maintainable, and efficient code. Whether working independently or as part of a team, I have a strong work ethic and a drive to create the best possible outcome for each project.
                            image: '/images/icons/frontend.svg'
                        },
                        {
                            title: 'Backend Development',
                            description: "I have a strong understanding of server-side technologies and the ability to build scalable and efficient systems.",
                            // I have experience with various programming languages, including Python, PHP, and JavaScript, and have worked with databases such as MySQL, PostgreSQL, and MongoDB. I am skilled in creating RESTful APIs that provide a seamless connection between the front-end and back-end of a web application. I also have experience in developing and deploying applications on cloud platforms such as Amazon Web Services (AWS) and Netlify. With a focus on security and performance, I am committed to delivering high-quality back-end solutions that meet the needs of both users and businesses. Whether working independently or as part of a team, I am a problem-solver and a driven individual who is always looking for ways to improve and enhance the systems I work on.
                            image: '/images/icons/backend.svg'
                        },
                        {
                            title: 'Software Architecture',
                            description: "As a software architect, I have a passion for designing and building robust and scalable systems.",
                            // I have a deep understanding of software design patterns and best practices, and know how to apply these concepts to real-world situations. I have experience with various technologies and programming languages, and have worked on both small and large-scale projects. I am skilled in creating software architecture that considers the needs of both users and businesses, taking into account performance, security, and maintainability. I have a talent for breaking down complex problems into manageable components and for creating clear and concise documentation that guides development teams. Whether working independently or as part of a team, I am a natural leader who is able to communicate complex technical concepts to non-technical stakeholders in a way that they can understand. I am always looking to stay up-to-date with the latest trends and technologies in the field of software architecture, and am committed to delivering high-quality systems that meet the needs of all parties involved.
                            image: '/images/icons/architect.svg'
                        }
                    ]}
                />
            </Element>

            {/* Portfolio */}
            <Element id-='portfolio' name='portfolio'>
                <Portfolio
                    transitionRef={transition3Refs}
                    projects={[
                        {
                            // link: 'https://hometownticketing.com',
                            title: 'Hometown Ticketing',
                            subtitle: 'Digital Ticketing Platform',
                            description: "As a senior software engineer at Hometown Ticketing, I leveraged my extensive experience with technologies such as Kafka, Laravel, AWS, Microservices, and others to lead the development team in the redesign and rebuild of the company's platform. My contributions helped Hometown Ticketing create a highly functional, user-friendly platform that utilized a variety of cutting-edge technologies and best practices.",
                            image: '/images/hometownticketing.png'
                        },
                        {
                            title: 'Sanesco Health',
                            subtitle: 'Covid Testing',
                            description: 'As the sole engineer at Sanesco Health, I was responsible for a variety of complex technical projects, including the integration and automation of patient data with lab management software and the development of a mobile application for tracking test results. Using my expertise in Laravel, I was able to effectively manage these projects and deliver high-quality solutions that met the needs of the company and its patients.',
                            image: '/images/sanescohealth.png'
                        },
                        {
                            title: 'Storetasker',
                            subtitle: 'Shopify Experts Marketplace',
                            description: 'At Storetasker, I was the driving force behind the creation of a new software platform that connected Shopify store owners with expert talent. My expertise in Laravel and React allowed me to build a platform that provided seamless integrations with the Shopify API, Paypal, Stripe, Mailchimp, and more, to deliver a complete solution for our customers.',
                            image: '/images/storetasker.png'
                        },
                        {
                            title: 'Mobile Drip',
                            subtitle: 'SMS Drip Marketing',
                            description: 'At Mobiledrip, I was the sole engineer responsible for developing a powerful SMS drip marketing campaign management platform that processed millions of messages daily. I utilized Laravel with a MongoDB database and built a complex queueing system to handle the high volume of messages. Working directly with the owners, I was able to bring their vision to life by delivering a performant platform that offered advanced features such as detecting stop words and tracking campaign performance through a click funnel system. With integration capabilities for multiple SMS APIs, including Twilio, Mobiledrip was a comprehensive solution for businesses looking to reach their target audience effectively.',
                            image: '/images/mobiledrip.png'
                        },
                        {
                            title: 'Chubbies Shorts',
                            subtitle: 'Ecommerce Brand',
                            description: 'Built a custom Shopify app and API for Chubbies Shorts that integrated with their Shopify store, allowing customers to vote on male models and for men to submit portfolios for a modeling contest. Worked on a highly customized Shopify theme for Chubbies store.',
                            image: '/images/chubbies.png'
                        },
                        /*{
                            title: '47 Brand',
                            subtitle: 'Ecommerce Brand',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!',
                            image: '/images/47brand.png'
                        },
                        {
                            title: 'Ript Apparel',
                            subtitle: 'Ecommerce Brand',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!',
                            image: '/images/ript-apparel.png'
                        },
                        {
                            title: 'Spicely Organics',
                            subtitle: 'Ecommerce Brand',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas consectetur dolore, fugit quidem, nesciunt molestiae animi est facere esse, blanditiis vitae quos libero consequuntur velit. Nihil vitae hic quis!',
                            image: '/images/spicely.png'
                        },*/
                    ]}
                />
            </Element>

            {/* Technologies gallery */}
            

            {/* Contact */}
            {/* <section className='contact'>
                <div className='contact-container transition3'>
                    <div className="contact-left">
                        <div className="inner">
                            <p className="subtitle">Let's Talk</p>
                            <p className="title">Connect with me to learn more about my experience and expertise</p>
                            <p className="description">Whether you're looking to collaborate on a project, discuss potential job opportunities, or just want to say hello, I'd love to hear from you. Fill out the form below or send me an email at ryan.m.coble@gmail.com and I'll get back to you as soon as I can.</p>
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
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}