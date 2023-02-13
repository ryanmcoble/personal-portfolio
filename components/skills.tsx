import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Skills({
        skills,
        transitionRef: {current: currentRef}
    }) {
    

    return <section className='skills'>
        <div className='skills-container'>
            <ul>
                {skills.map((skill, index) => (<li key={index} ref={ref => currentRef.push(ref)} className='transition2'>
                    <div className='icon-container one'>
                        <img src={skill.image} alt={skill.title + ' Icon'} />
                    </div>
                    <p className='title'>{skill.title}</p>
                    <p className='description'>{skill.description}</p>
                </li>))}
            </ul>
        </div>
    </section>;
}