import React from 'react'
import './WhyCard_Rec.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhyCard_Rec(props) {
    return (
        <Fragment>
            <div className="why-card-content why-card-center">

                <FontAwesomeIcon className='why-card-icon-content' icon={props.icon}></FontAwesomeIcon>
                <h className="why-card-title why-card-center">{props.title}</h>
                <h className="why-card-p why-card-center">{props.content}</h>
            </div>
        </Fragment>
    )
}