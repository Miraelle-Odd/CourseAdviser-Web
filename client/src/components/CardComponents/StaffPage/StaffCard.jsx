import React from 'react'
import './StaffCard.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'

export default function StaffCard(props) {
    return (
        <Fragment>
            <div className="staff-card-content">
                <img className='staff-card-img' src={props.img}></img>
                <div className='staff-card-info'>
                    <div className='staff-card-border'>
                        <p className='staff-card-title-1'>{props.title}</p>
                        <p className='staff-card-title-2'>{props.subtitle}</p>
                        <div className='staff-card-detail'>
                            <p className='staff-card-text-1'>INTRODUCE</p>
                            <p className='staff-card-text-2'>{props.content}</p>
                            <p className='staff-card-text-1 show-when-hover'>ARCHIVEMENTS</p>
                            <p className='staff-card-text-2 show-when-hover'>{props.more}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}