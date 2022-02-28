import React from 'react'
import './MethodSwitch.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';

export default function MethodSwitch(props) {
    return (
        <Fragment>
            <div className={props.stat===true ? "method-switch-content-active method-switch-center" : "method-switch-content method-switch-center"}
            onClick={props.onClick}>
                <p className={props.stat===true ? "method-switch-name-active" : "method-switch-name"}>{props.name}</p>
            </div>
        </Fragment>
    )
}