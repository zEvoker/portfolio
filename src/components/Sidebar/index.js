import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import bat from '../assets/images/2396.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faFolderClosed, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [iconCh, setIconCh] = useState(false);
    const toggleIcon = () => {
        setIconCh(true);
    };
    const toggleIcon2 = () => {
        setIconCh(false);
    };

    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={bat} alt="http://www.freepik.com Designed by vectorpocket / Freepik" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" onClick={toggleIcon2}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={toggleIcon2}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={toggleIcon}>
                    <div className="anon">
                        <FontAwesomeIcon icon={iconCh ? faFolderOpen : faFolderClosed} color="#4d4d4e" />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={toggleIcon2}>
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
}

export default Sidebar;