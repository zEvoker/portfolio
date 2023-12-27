import './index.scss'
import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [rotation, setRotation] = useState({ hour: 0, minute: 0, second: 0 });
    useEffect(() => {
        const updateClock = () => {
            const day = new Date();
            const hh = (day.getHours() % 12) * 30;
            const mm = day.getMinutes() * 6;
            const ss = day.getSeconds() * 6;
            setRotation({
                hour: hh,
                minute: mm,
                second: ss,
            });
        }
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <div className="hour">
                <div className="hr" style={{ transform: `rotateZ(${180 + rotation.hour}deg)` }}></div>
            </div>
            <div className="min">
                <div className="mn" style={{ transform: `rotateZ(${180 + rotation.minute}deg)` }}></div>
            </div>
            <div className="sec">
                <div className="sc" style={{ transform: `rotateZ(${180 + rotation.second}deg)` }}></div>
            </div>
        </div>
    )
}

export default Clock;