import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import bat from '../assets/images/batjpg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHome, faMobile, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={bat} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activecclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faMobile} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/johann-simon-ba19aa280/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/zEvoker'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://leetcode.com/evoker-/'>
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;