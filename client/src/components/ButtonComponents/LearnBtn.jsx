import React from 'react'
import './LearnBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import arrow_icon from '../../assets/icons/arrow-right.png'
import line from '../../assets/icons/line.png'
import {Link} from 'react-router-dom';

export default function LearnBtn(props) {
    return (
        <Fragment>
            <div className="learn-btn-content">
                <Link to = '/temp' className='learn-btn-link'>
                    <button className='learn-btn-button'>{props.name}                   
                        <img className='learn-btn-line' src={line}></img>
                        <img className='learn-btn-arrow' src={arrow_icon}></img>
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}