import React from 'react'
import './StaffTeacherLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import paimon from '../../../assets/icons/staff-img.png'
import StaffCard from '../../CardComponents/StaffPage/StaffCard';
import StaffCardLayout from './StaffCardLayout';

export default function StaffTeacherLayout(props) {
    return (
        <Fragment>
            <div className="staff-teacher-content">
                <div className='staff-teacher-header staff-teacher-center'>
                    <p className='staff-teacher-title staff-teacher-center'>Đội ngũ giảng dạy uyên bác</p>
                </div>
                <div className='staff-teacher-border staff-teacher-center'>
                    <StaffCardLayout
                        img={props.img}
                        title={props.title}
                        subtitle={props.subtitle}
                        content={props.content}
                        more={props.more}>
                    </StaffCardLayout>
                    <div className='staff-teacher-indi'></div>
                </div>
            </div>
        </Fragment>
    )
}