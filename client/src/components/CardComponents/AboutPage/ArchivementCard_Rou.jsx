import React from 'react'
import './ArchivementCard_Rou.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function ArchivementCard_Rou(props) {
    return (
        <Fragment>
            <div className="archivement-card-rou-content">
                <div className='archivement-card-rou-border-outside archivement-card-rou-center'>
                    <div className='archivement-card-rou-border-inside archivement-card-rou-center'>
                        <img className="archivement-card-rou-icon" src={props.icon}></img>
                        <h className="archivement-card-rou-title">{props.title}</h>
                    </div>
                </div>
                <p className="archivement-card-rou-detail">{props.content}</p>
            </div>
        </Fragment>
    )
}