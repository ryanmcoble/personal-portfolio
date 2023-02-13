import { useEffect } from "react";


export default function Portfolio({
        projects,
        transitionRef: {current: currentRef}
    }: {
        projects: {title: string, subtitle: string, description: string, image: string}[],
        transitionRef: {current: any[]}
    }) {
 
    return <section className='portfolio'>
        {projects.map((project, index) => (<div key={index} ref={ref => currentRef.push(ref)} className='portfolio-container transition3'>
            <div className="portfolio-left">
                <div className="inner">
                    <p className="subtitle">{project.subtitle}</p>
                    <p className="title">{project.title}</p>
                    <p className="description">{project.description}</p>
                </div>
            </div>
            <a href='#'><img src={project.image} alt={project.title} /></a>
        </div>))}
    </section>;
}