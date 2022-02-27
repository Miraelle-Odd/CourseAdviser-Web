import React from 'react'
import './ParallelogramBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function ParallelogramCard(props) {
    return (
        <Fragment>
            <div className="parallelogram-card-content">
                <Link to = '/temp' className='parallelogram-card-link'>
                    <button className='parallelogram-card-button' style={{background: `url(${props.img})`, backgroundPosition: `right center`}}>
                        <div className="parallelogram-card-modal"></div>
                        <p className='parallelogram-card-name'>{props.name}</p>
                        <p className='parallelogram-card-des'>{props.des}</p>
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}