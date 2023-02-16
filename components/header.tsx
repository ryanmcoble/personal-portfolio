import Scroll from 'react-scroll'

const ScrollLink = Scroll.Link


export default function Header({}) {
    return <div className='nav-container'>
        <header>
            <a href='/' className='logo'>Ryan Coble</a>

            <nav>
                <ul>
                    <li>
                        <ScrollLink to='portfolio' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                            My work
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='skills' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                            My skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='contact' className='hire-me' href='#' spy={true} smooth={true} duration={500} offset={-100}>
                            Hire me
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div className='social-header'>
            <ul>
                <li>
                    <a target='_blank' href='https://www.github.com/ryanmcoble'>
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/rcoble/'>
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className="fa-brands fa-freelancer fa-lg"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>;
}