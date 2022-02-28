import React from 'react'
import './LocationSwitch.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import caret_right from "../../assets/icons/caret-right.png"
import pause from "../../assets/icons/pause.png"

export default function LocationSwitch(props) {
    return (
        <Fragment>
            <div className={props.stat===true ? 'location-card-content-active location-card-center' : "location-card-content location-card-center"}
            onClick={props.onClick}>
                <div className={props.stat===true ? 'location-card-border-active location-card-center' :"location-card-border location-card-center"}>
                    <img className={props.stat===true ? 'location-card-icon-active' :"location-card-icon"} src={props.stat===true ? pause : caret_right}></img>
                </div>
                <p className={props.stat===true ? 'location-card-name-active' :"location-card-name"}>{props.name}</p>
            </div>
        </Fragment>
    )
}