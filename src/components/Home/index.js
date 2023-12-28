import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Loader from 'react-loaders';
import Clock from '../Clock';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState([]);
    const [delta, setDelta] = useState(857);
    const [idx, setIdx] = useState(0);

    const nameArray = ['I', '', 'a', 'm', ' ', 'J', 'o', 'h', 'a', 'n', 'n', ' ', 'B', ' ', 'S', 'i', 'm', 'o', 'n']
    const jobStr = "Aspiring Software Engineer"
    const jobArray = [...jobStr];
    const welcome = [['W', 'e', 'l', 'c', 'o', 'm', 'e'], ['H', 'e', 'l', 'l', 'o']]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
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
        let curText = isDeleting ? welcome[idx].slice(0, text.length - 1) : welcome[idx].slice(0, text.length + 1);
        setText(curText);
        if (!isDeleting && curText.length === welcome[idx].length) {
            setIsDeleting(true);
            setDelta(1000 / welcome[idx].length);
        } else if (isDeleting && curText.length === 0) {
            setIsDeleting(false);
            setIdx(1 - idx);
            setDelta(1000);
        }
    }

    return (
        <>
            <div className="home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={text} idx={10} />
                        <AnimatedLetters letterClass={'blinker'} strArray={['!']} idx={54} />
                    </h1>
                    <h2>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                    </h2>
                    <h3>Student at NIT Calicut</h3>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <div className="contain-clock">
                    <Clock />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;