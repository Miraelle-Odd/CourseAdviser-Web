import React from 'react'
import './FeedbackCard.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function FeedbackCard(props) {
    return (
        <Fragment>
            <div className="feedback-card-content feedback-card-center">
                <img className="feedback-card-img" src={props.img}></img>
                <div className="feedback-card-detail feedback-card-center">
                    <div className="feedback-card-title">
                        <p className="feedback-card-name">{props.name}</p>
                        <p className="feedback-card-place">{props.place}</p>
                    </div>
                    <p className='feedback-card-text'>{props.text}</p>
                </div>
            </div>
        </Fragment>
    )
}