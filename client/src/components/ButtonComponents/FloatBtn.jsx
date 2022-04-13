import React, { useState } from 'react'
import './FloatBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Chatbot from '../Chatbot/Chatbot';

export default function FloatBtn(props) {
    const [open, setOpen] = useState(false)
    const callChatbot = () => {
        if (!open)
            setOpen(true)
        else
            setOpen(false)
    }
    return (
        <Fragment>
            <div className="float-btn-content">
                <Link to={props.link ? props.link : "#"} className='float-btn-link' onClick={props.onClick ? props.onClick : (props.chatbot ? callChatbot : "")}>
                    <button className='float-btn-button'>
                        <FontAwesomeIcon className='float-btn-icon' icon={props.icon}></FontAwesomeIcon>
                        <h className="float-btn-name">{props.name}</h>
                    </button>
                </Link>
            </div>
            <Chatbot isOpen={open} onClose={()=>setOpen(false)}></Chatbot>
        </Fragment>
    )
}