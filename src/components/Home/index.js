import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I', '', 'a', 'm', ' ', 'J', 'o', 'h', 'a', 'n', 'n', ' ', 'B', ' ', 'S', 'i', 'm', 'o', 'n']
    const jobStr = "Aspiring Software Engineer"
    const jobArray = [...jobStr];
    const welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={welcome} idx={10} />

                </h1>
                <h2>
                    {/* <span className={letterClass}>H</span> */}
                    {/* <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                </h2>
                <h3>Student at NIT Calicut</h3>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;