import React from 'react'
import './LocationSwitch.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LocationSwitch(props) {
    return (
        <Fragment>
            <div className={props.stat===true ? 'location-card-content-active location-card-center' : "location-card-content location-card-center"}
            onClick={props.onClick}>
                <div className={props.stat===true ? 'location-card-border-active location-card-center' :"location-card-border location-card-center"}>
                    <FontAwesomeIcon className={props.stat===true ? 'location-card-icon-active' : "location-card-icon"} icon={props.stat===true ? ['fas', 'pause'] : ['fas', 'caret-right']}></FontAwesomeIcon>
                </div>
                <p className={props.stat===true ? 'location-card-name-active' :"location-card-name"}>{props.name}</p>
            </div>
        </Fragment>
    )
}