import React from 'react'
import './TimeRemain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountdownExam from '../../TrayComponents/CountDownComponents/CountdownExam'

export default function TimeRemain(props) {
    return (
        <div className="time-remain-container select-item-center">
            <FontAwesomeIcon className='time-remain-icon' icon={['fas', 'fa-clock']}></FontAwesomeIcon>
            <CountdownExam type = {props.type}></CountdownExam>
            <p className='time-remain-text'>/</p>
            <p className='time-remain-text'>
                {
                    props.type == 'listening' 
                    ? '45:00' : '75:00' 
                }</p>
        </div>
    )
}