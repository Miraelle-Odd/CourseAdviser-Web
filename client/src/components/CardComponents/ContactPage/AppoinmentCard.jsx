import React from 'react'
import './AppoinmentCard.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AppoinmentCard(props) {
    return (
        <Fragment>
            <div className="appoinment-card-content">
                <div className="appoinment-card-icon-content appoinment-card-center">
                    <FontAwesomeIcon className="appoinment-card-icon" icon={props.icon}></FontAwesomeIcon>
                </div>
                <p className="appoinment-card-detail">{props.content1}{"\n"}{props.content2}</p>
            </div>
        </Fragment>
    )
}