import React, { useState, useRef, useEffect } from 'react'
import './CountdownText.css'



export default function CountdownText() {
    const [timer, setTimer] = useState(3);

    const id = useRef(null);
    const clear = () => {
        window.clearInterval(id.current)
    }
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    useEffect(() => {
        if (timer === 0) {
            clear()
        }

    }, [timer])


    return (
        <span className='time-countdown'>{timer}</span>
    );
}