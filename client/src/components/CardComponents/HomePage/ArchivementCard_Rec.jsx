import React from 'react'
import './ArchivementCard_Rec.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function ArchivementCard_Rec(props) {
    return (
        <Fragment>
            <div className="archivement-card-rec-content">
                <div className="archivement-card-rec-icon-content archivement-card-rec-center">
                    <img className="archivement-card-rec-icon" src={props.icon}></img>
                </div>
                <h className="archivement-card-rec-title archivement-card-rec-center">{props.title}</h>
                <h className="archivement-card-rec-p archivement-card-rec-center">{props.content}</h>
            </div>
        </Fragment>
    )
}