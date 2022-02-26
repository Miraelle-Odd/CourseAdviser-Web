import React from 'react'
import './VisionCard.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function VisionCard(props) {
    return (
        <Fragment>
            <div className="vision-card-content">
                <img className="vision-card-img" src={props.img}></img>
                <div className="vision-card-content-inner">
                    <p className="vision-card-title">{props.title}</p>
                    <div className='vision-card-line'></div> 
                    <p className="vision-card-detail">{props.content}</p>
                </div>
            </div>
        </Fragment>
    )
}