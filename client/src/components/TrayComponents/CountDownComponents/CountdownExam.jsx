import React, { useState, useRef, useEffect } from 'react'
import './CountdownText.css'



export default function CountdownExam(props) {
    const [delay, setDelay] = useState(true)
    const [timer, setTimer] = useState(44);
    const [second, setSecond] = useState(60);

    const id = useRef(null);
    const clear = () => {
        window.clearInterval(id.current)
    }
    useEffect(() => {
        if(props.type != 'listening'){
            setTimer(74)
            setDelay(false)
        }
    }, [props.type])
    useEffect(() => {
        if(props.type != 'listening'){
            setTimer(74)
            setDelay(false)
        }
        if (delay === true) {
            setTimeout(function () {
                setDelay(false)
            }, 15000);
        }
        else {
            id.current = window.setInterval(() => {
                setTimer((time) => time - 1)
            }, 60000)
            id.current = window.setInterval(() => {
                setSecond((second) => second - 1)
            }, 1000)
            return () => clear();
        }
    }, [delay])

    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    useEffect(() => {
        if (second === 0) {
            setSecond(60)
        }
    }, [second])

    return (
        <p className='time-remain-text'>{timer} : {second}</p>
    );
}
