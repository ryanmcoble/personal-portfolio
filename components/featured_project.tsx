import { useEffect, useRef } from "react";

export default function FeaturedProject({
        project: {title, description, featured_image, links},
        transitionRef: {current: currentRef}
    }: {
        project: {title: string, description: string, featured_image: string, links: {website: string, code: string}},
        transitionRef: {current: any[]}
    }) {

    return <section className='featured'>
        <div className='left'>
            <div ref={ref => currentRef.push(ref)} className='inner transition2'>
                <p className='subtitle'>Featured Project</p>
                <p className='title'>{title}</p>
                {links && <ul>
                    {links.code && <li><a href={links.code} target="_blank" title="Check out the code"><i className="fab fa-github fa-lg"></i></a></li>}
                    {links.website && <li><a href={links.website} target="_blank" title="Visit the website"><i className="fa-solid fa-link fa-lg"></i></a></li>}
                </ul>}
                <p className='description'>{description}</p>
            </div>
        </div>
        {(links && (links.website || links.code)) ? <a href={links.website || links.code} target="_blank">
            <img ref={ref => currentRef.push(ref)} className='right transition2' src={featured_image} alt='Featured project' />
        </a> : <img ref={ref => currentRef.push(ref)} className='right transition2' src={featured_image} alt='Featured project' />}
    </section>;
}