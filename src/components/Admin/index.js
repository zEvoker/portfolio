import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { database } from "../firebaseConfig";
import { ReactCanvasPatternLock } from 'react-canvas-pattern-lock';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [delClass, setDelClass] = useState("del-button disabled");
    const [flatClass, setFlatClass] = useState("flat-button");
    const [fltClass, setFltClass] = useState("flat-button disabled");
    const [loggedIn, setLoggedIn] = useState(false);
    const [idx, setIdx] = useState(0);
    const [mesgs, setMesgs] = useState(['n', 'e', 's', 'm']);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mesgCollection = collection(database, 'messages');
                const mesgSnapshot = await getDocs(mesgCollection);
                const mesgData = mesgSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setMesgs(mesgData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);
    const getNext = () => {
        setDelClass("del-button");
        setFltClass("flat-button");
        if (idx === mesgs.length - 2) setFlatClass("flat-button disabled");
        if (idx < (mesgs.length - 1)) {
            setIdx(idx + 1);
        }
    }
    const getPrev = () => {
        setFlatClass("flat-button");
        if (idx === 1) {
            setFltClass("flat-button disabled");
            setDelClass("del-button disabled");
        }
        if (idx > 0) {
            setIdx(idx - 1);
        }
    }

    const deleteData = async () => {
        try {
            if (mesgs && mesgs.length > 0 && idx >= 0 && idx < mesgs.length) {
                const mesgIdToDelete = mesgs[idx].id;
                const delData = doc(database, 'messages', mesgIdToDelete);
                await deleteDoc(delData);
                const updatedMesgCollection = collection(database, 'messages');
                const updatedMesgSnapshot = await getDocs(updatedMesgCollection);
                const updatedMesgData = updatedMesgSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setMesgs(updatedMesgData);
                setIdx(0);
                setFlatClass("flat-button");
                setFltClass("flat-button disabled");
            } else {
                console.error('Invalid index or mesgs array is empty.');
            }
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    }

    const handleSubmit = (pattern) => {
        if(pattern.length === 7 && pattern.every((value,index) => value === [4,7,8,5,2,1,3][index])) setLoggedIn(true);
        else navigate("/")
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);
    const adm = ['A', 'd', 'm', 'i', 'n', ' ', 'p', 'a', 'g', 'e'];
    const ttl = ['M', 'e', 's', 's', 'a', 'g', 'e', 's'];

    return (
        loggedIn === true ?
            <>
                <div className="admin-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters letterClass={letterClass} strArray={adm} idx={10} />
                        </h1>
                    </div>
                    <div className="contain-msgs">
                        <h1><AnimatedLetters letterClass={letterClass} strArray={ttl} idx={10} /></h1>
                        <div className="contact-form">
                            <ul>
                                <li>
                                    <span>{mesgs[idx].name}</span>
                                </li>
                                <li>
                                    <span>{mesgs[idx].email}</span>
                                </li>
                                <li>
                                    <span>{mesgs[idx].subject}</span>
                                </li>
                                <li>
                                    <span className='textarea'>{mesgs[idx].message}</span>
                                </li>
                                <li>
                                    <button className={delClass} onClick={deleteData}>DEL</button>
                                    <button className={flatClass} onClick={getNext}>NEXT</button>
                                    <button className={fltClass} onClick={getPrev}>PREV</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Loader type="pacman" />
            </>
            :
            <div className='loginBody'>
                <div className='loginBox'>
                    <span className='borderline'></span>
                    <div className='loginForm'>
                        <h2>Login</h2>
                        <div className='patternlock'>
                            <ReactCanvasPatternLock width={200} height={200} onComplete={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Admin;