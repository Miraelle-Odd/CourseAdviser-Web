import React from 'react'
import './FloatBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

export default function FloatBtn(props) {
    return (
        <Fragment>
            <div className="float-btn-content">
                <Link to='/temp' className='float-btn-link'>
                    <button className='float-btn-button'>
                        <FontAwesomeIcon className='float-btn-icon' icon={props.icon}></FontAwesomeIcon>
                        <h className="float-btn-name">{props.name}</h>
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}