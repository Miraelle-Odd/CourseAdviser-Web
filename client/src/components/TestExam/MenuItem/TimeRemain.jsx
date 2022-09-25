import React from 'react'
import './TimeRemain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TimeRemain(props) {
    return (
        <div className="time-remain-container select-item-center">
            <FontAwesomeIcon className='time-remain-icon' icon={['fas', 'fa-clock']}></FontAwesomeIcon>
            <p className='time-remain-text'>00:00</p>
            <p className='time-remain-text'>/</p>
            <p className='time-remain-text'>00:00</p>
        </div>
    )
}