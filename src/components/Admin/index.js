import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { app, database } from "../firebaseConfig";

const Admin = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [idx, setIdx] = useState(0);
    const [mesgs, setMesgs] = useState(['n', 'e', 's', 'm']);

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
        if (idx < (mesgs.length - 1)) {
            setIdx(idx + 1);
        }
    }
    const getPrev = () => {
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
            } else {
                console.error('Invalid index or mesgs array is empty.');
            }
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);
    const adm = ['A', 'd', 'm', 'i', 'n'];
    const ttl = ['M', 'e', 's', 's', 'a', 'g', 'e', 's'];

    return (
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
                                <button className="del-button" onClick={deleteData}>DEL</button>
                                <button className="flat-button" onClick={getNext}>NEXT</button>
                                <button className="flat-button" onClick={getPrev}>PREV</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Admin;