import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StaffTeacherLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffTeacherLayout(props) {
    return (
        <Fragment>
            <div className="staff-teacher-content">
                <div className='staff-teacher-header staff-teacher-center'>
                    <p className='staff-teacher-title staff-teacher-center'>{props.title}</p>
                </div>
                <div className='staff-teacher-border staff-teacher-center'>
                    <StaffCardLayout
                        listItem={props.listItem}>
                    </StaffCardLayout>
                    <div className='staff-teacher-indi'></div>
                </div>
            </div>
        </Fragment>
    )
}