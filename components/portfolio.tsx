import { useEffect } from "react";
import { Element } from 'react-scroll'


export default function Portfolio({
        projects,
        transitionRef: {current: currentRef}
    }: {
        projects: {title: string, subtitle: string, description: string, image: string, links: {website: string, code: string}}[],
        transitionRef: {current: any[]}
    }) {
 
    return <Element id-='portfolio' name='portfolio'>
        <section className='portfolio'>
            {projects.map((project, index) => (<div key={index} ref={ref => currentRef.push(ref)} className='portfolio-container transition3'>
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">{project.subtitle}</p>
                        <p className="title">{project.title}</p>
                        {project.links && <ul>
                            {project.links.code && <li><a href={project.links.code} target="_blank" title="Check out the code"><i className="fab fa-github fa-lg"></i></a></li>}
                            {project.links.website && <li><a href={project.links.website} target="_blank" title="Visit the website"><i className="fa-solid fa-link fa-lg"></i></a></li>}
                        </ul>}
                        <p className="description">{project.description}</p>
                    </div>
                </div>
                {(project.links && project.links.website) ? <a href={project.links.website} target="_blank">
                    <img src={project.image} alt={project.title} />
                </a> : <a href="" onClick={(el) => el.preventDefault()}><img src={project.image} alt={project.title} /></a>}
            </div>))}
        </section>
    </Element>;
}