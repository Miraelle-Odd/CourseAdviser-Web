import React from 'react'
import './ArchivementCard_Rou.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ArchivementCard_Rou(props) {
    return (
        <Fragment>
            <div className="archivement-card-rou-content">
                <div className='archivement-card-rou-border-outside archivement-card-rou-center'>
                    <div className='archivement-card-rou-border-inside archivement-card-rou-center'>
                        {
                            props.icon ? <FontAwesomeIcon className="archivement-card-rou-icon" icon={props.icon}></FontAwesomeIcon>:
                            <span className="archivement-card-rou-logo">{props.logo}</span>}
                        <h className="archivement-card-rou-title">{props.title}</h>
                    </div>
                </div>
                <p className="archivement-card-rou-detail">{props.content}</p>
            </div>
        </Fragment>
    )
}