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
    const [delta, setDelta] = useState(50);
    const [idx, setIdx] = useState(0);

    const nameArray = ['I', '', 'a', 'm', ' ', 'J', 'o', 'h', 'a', 'n', 'n', ' ', 'B', ' ', 'S', 'i', 'm', 'o', 'n']
    const jobStr = "This is my portfolio website"
    const jobArray = [...jobStr];
    const welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e']
    const txt1 = "Student at NIT Calicut"
    const txt2 = "Aspiring Software Engineer"
    const txt3 = "Competitive Programmer"
    const txt = [[...txt1], [...txt2], [...txt3]]

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
        let curText = isDeleting ? txt[idx].slice(0, text.length - 1) : txt[idx].slice(0, text.length + 1);
        setText(curText);
        if (!isDeleting && curText.length === txt[idx].length) {
            setIsDeleting(true);
            setDelta(50);
        } else if (isDeleting && curText.length === 0) {
            setIsDeleting(false);
            setIdx((1 + idx) % 3);
            setDelta(200);
        }
    }

    return (
        <>
            <div className="home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={welcome} idx={10} />
                        <AnimatedLetters letterClass={'blinker'} strArray={['!']} idx={54} />
                    </h1>
                    <h2>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                    </h2>
                    <h3>-{text}</h3>
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