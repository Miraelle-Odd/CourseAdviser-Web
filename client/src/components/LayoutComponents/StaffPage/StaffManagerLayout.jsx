import React from 'react'
import './StaffManagerLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';
import StaffCardLayout from './StaffCardLayout';

export default function StaffManagerLayout(props) {
    return (
        <Fragment>
            <div className="staff-manager-content">
                <div className='staff-manager-bg-1'>
                    <div className='staff-manager-header staff-manager-center'>
                        <p className='staff-manager-title staff-manager-center'>Đội ngũ quản lý tâm huyết</p>
                    </div>
                </div>
                <div className="staff-manager-card-layout">
                    <StaffCardLayout
                        img={props.img}
                        title={props.title}
                        subtitle={props.subtitle}
                        content={props.content}
                        more={props.more}>
                    </StaffCardLayout>
                </div>

                <div className='staff-manager-bg-2'> </div>
            </div>
        </Fragment>
    )
}