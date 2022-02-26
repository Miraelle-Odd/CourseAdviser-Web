import React from 'react'
import './FloatBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import calendar from '../../assets/icons/calendar-check.png'

export default function FloatBtn(props) {
    return (
        <Fragment>
            <div className="float-btn-content">
                <a href='#' className='float-btn-link'>
                    <button className='float-btn-button'>
                        <img className='float-btn-icon' src={props.icon}></img>
                        <h className="float-btn-name">{props.name}</h>
                    </button>
                </a>
            </div>
        </Fragment>
    )
}