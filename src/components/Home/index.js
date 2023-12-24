import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Loader from 'react-loaders';
import Game from '../Game';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [blinkClass, setBlinkClass] = useState('text-animate')
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState([]);
    const [delta, setDelta] = useState(200);

    const nameArray = ['I', '', 'a', 'm', ' ', 'J', 'o', 'h', 'a', 'n', 'n', ' ', 'B', ' ', 'S', 'i', 'm', 'o', 'n']
    const jobStr = "Aspiring Software Engineer"
    const jobArray = [...jobStr];
    const welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
            setBlinkClass('blinker');
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, []);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let curText = isDeleting ? welcome.slice(0, text.length - 1) : welcome.slice(0, text.length + 1);
        setText(curText);
        if (!isDeleting && curText.length === welcome.length) {
            setIsDeleting(true);
            setDelta(400);
        } else if (isDeleting && curText.length === 0) {
            setIsDeleting(false);
            setDelta(800);
        }
    }

    return (
        <>
            <div className="home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={text} idx={10} />
                        <AnimatedLetters letterClass={blinkClass} strArray={['!']} idx={54} />
                    </h1>
                    <h2>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                    </h2>
                    <h3>Student at NIT Calicut</h3>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Game />
            <Loader type="pacman" />
        </>
    )
}

export default Home;