import Loader from "react-loaders";
import Game from "../Game";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [data, setData] = useState({ name: '', email: '', subject: '', message: '' })

    const dbInst = collection(database, 'messages');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };
        setData({ ...data, ...inputs });
    }

    const handleSubmit = () => {
        addDoc(dbInst, data)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
            <div className="contain contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        You can use the below form to contact me regarding available projects or opportunities to collaborate...
                    </p>
                    <div className="contact-form">
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" onChange={event => handleInputs(event)} required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" onChange={event => handleInputs(event)} required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" onChange={event => handleInputs(event)} required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" onChange={event => handleInputs(event)} required></textarea>
                            </li>
                            <li>
                                <button className="flat-button" onClick={handleSubmit}>SEND</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info-map">
                    Johann B Simon
                    <br />
                    NIT Calicut, Kerala
                    <br />
                    <span>jbsimon03@gmail.com</span>

                </div>
                <div className="map-wrap">
                    <Game />
                    <MapContainer center={[11.31735, 75.93801]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[11.31735, 75.93801]}>
                            <Popup>NITC</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;