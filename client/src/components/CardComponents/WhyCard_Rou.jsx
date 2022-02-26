import React from 'react'
import './WhyCard_Rou.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function WhyCard_Rou(props) {
    return (
        <Fragment>
            <div className="why-card-rou-content">
                <div className='why-card-rou-main'>
                    <img className="why-card-rou-main-img" src={props.main_img}></img>
                    <div className='why-card-side'>
                        <img className="why-card-rou-side-img" src={props.side_img}></img>
                    </div>
                </div>
                <p className="why-card-rou-title">{props.title}</p>
                <p className="why-card-rou-detail">{props.content}</p>
            </div>
        </Fragment>
    )
}