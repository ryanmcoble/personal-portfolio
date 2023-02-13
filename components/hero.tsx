import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const meetRef = useRef(null);
    const scrollRef = useRef(null);
    const heroDesignRef = useRef(null);
    const squareRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(contentRef.current, {
            y: '-30%',
            opacity: 0,
            duration: 2,
            ease: 'power4.easeOut',
        });

        tl.from(headerRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.easeOut',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');
        tl.from(meetRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.easeOut',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');
        tl.from(scrollRef.current, {
            opacity: 0,
            y: -50,
            ease: 'power4.easeOut',
            stagger: 0.3,
            duration: 2,
        }, '-=1.5');

        tl.from(heroDesignRef.current, {
            opacity: 0,
            y: 50,
            ease: 'power4.easeOut',
            duration: 1
        }, '-=2');

        gsap.from(squareRefs.current, {
            stagger: 0.2,
            scale: 0.1,
            duration: 1,
            ease: 'back.easeOut.config(1.7)'
        });
    }, []);

    return <div className='hero'>
        <div ref={contentRef} className='content'>
            <h1 ref={headerRef} className=''>Thoughtfully Crafted Software Solutions</h1>
            <div ref={meetRef} className='meet'>
                <span>👇</span>
                <p>Meet Ryan Coble</p>
            </div>

            {/* Scroll icon svg */}
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
            {/* <g id="blockdesign" transform="translate(-935 -289)"> */}
                <path ref={ref => squareRefs.current.push(ref)} className="square-anim" d="M319 400C319 444.183 283.183 480 239 480C194.817 480 159 444.183 159 400C159 355.817 194.817 320 239 320C283.183 320 319 355.817 319 400Z" fill="#00F7FF" fillOpacity="0.65" shapeRendering="crispEdges"/>
                <path ref={ref => squareRefs.current.push(ref)} className="square-anim" d="M480 240C480 284.183 444.183 320 400 320C355.817 320 320 284.183 320 240C320 195.817 355.817 160 400 160C444.183 160 480 195.817 480 240Z" fill="#FF64CB" fillOpacity="0.65"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" x="161" y="160" width="160" height="160" fill="white"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" x="161" y="480" width="160" height="160" fill="white"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" x="319" width="160" height="160" fill="#6E00FF"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" x="319" y="320" width="160" height="160" fill="#6E00FF"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" y="320" width="160" height="160" fill="#FF64CB" fillOpacity="0.1"/>
                <rect ref={ref => squareRefs.current.push(ref)} className="square-anim" x="480" y="160" width="160" height="160" fill="#6E00FF" fillOpacity="0.1"/>
            {/* </g> */}
        </svg>

    </div>;
}