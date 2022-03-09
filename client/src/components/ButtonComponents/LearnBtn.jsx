import React from 'react'
import './LearnBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import line from '../../assets/icons/line.png'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LearnBtn(props) {
    return (
        <Fragment>
            <div className="learn-btn-content">
                <Link to = '/temp' className='learn-btn-link'>
                    <button className='learn-btn-button'>
                        <span className='learn-btn-name'>{props.name}</span>               
                        <img className='learn-btn-line' src={line}></img>
                        <FontAwesomeIcon className='learn-btn-arrow' icon={['fas', 'arrow-right']}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}