import { useEffect, useRef } from "react";

export default function FeaturedProject({
        project: {title, description, featured_image},
        transitionRef: {current: currentRef}
    }: {
        project: {title: string, description: string, featured_image: string},
        transitionRef: {current: any[]}
    }) {

    return <section className='featured'>
        <div className='left'>
            <div ref={ref => currentRef.push(ref)} className='inner transition2'>
                <p className='subtitle'>Featured Project</p>
                <a href='#' className='title'>{title}</a>

                <p className='description'>{description}</p>
            </div>
        </div>
        <img ref={ref => currentRef.push(ref)} className='right transition2' src={featured_image} alt='Featured project' />
    </section>;
}