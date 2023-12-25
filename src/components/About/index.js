import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            <div className='contain about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am Johann B Simon, an aspiring Software Engineer pursuing my B.Tech in Computer Science and Engineering at National Institute of Technology, Calicut.
                    </p>
                    <p>
                        My tech stack includes HTML, CSS, React, NodeJS, Git and more. I am also interested in competitive programming and have included the link to my LeetCode account in the sidebar.
                    </p>
                    <p>
                        I thoroughly enjoy problem solving and system design and also working with others to come up with efficient solutions to common problems.
                    </p>
                </div>
                <div className="bubbles">
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 22 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 21 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 17 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 22 }}></span>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" rotation={270} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#282322" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;