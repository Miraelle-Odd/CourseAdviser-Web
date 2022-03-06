import React from 'react'
import './StaffEmployeeLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';
import StaffCardLayout from './StaffCardLayout';

export default function StaffEmployeeLayout(props) {
    return (
        <Fragment>
            <div className="staff-employee-content">
                <div className='staff-employee-header staff-employee-center'>
                    <p className='staff-employee-title staff-employee-center'>Ban tư vấn nhiệt tình</p>
                </div>
                <div className='staff-employee-border staff-employee-center'>
                    <StaffCardLayout
                        img={props.img}
                        title={props.title}
                        subtitle={props.subtitle}
                        content={props.content}
                        more={props.more}>
                    </StaffCardLayout>
                </div>
            </div>
        </Fragment>
    )
}