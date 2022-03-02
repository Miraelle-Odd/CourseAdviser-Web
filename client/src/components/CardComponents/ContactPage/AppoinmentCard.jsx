import React from 'react'
import './AppoinmentCard.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function AppoinmentCard(props) {
    return (
        <Fragment>
            <div className="appoinment-card-content">
                <div className="appoinment-card-icon-content appoinment-card-center">
                    <img className="appoinment-card-icon" src={props.icon}></img>
                </div>
                <p className="appoinment-card-detail">{props.content1}{"\n"}{props.content2}</p>
            </div>
        </Fragment>
    )
}