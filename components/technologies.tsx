

export default function Technologies({
    technologies
}: {technologies: {title: string, icon: string}[]}) {
    
    return <section className='technologies'>
        <p className='title'>Industry tools</p>
        <p className='subtitle'>The industry leading technologies and tools that I have used to bring my client's projects to life</p>
    
        <ul>
            {technologies.map((technology, index) => (<li key={index}>
                <i className={'fab ' + technology.icon + ' fa-lg'}></i>
                {/* <p>{technology.title}</p> */}
            </li>))}
        </ul>
    </section>;
}