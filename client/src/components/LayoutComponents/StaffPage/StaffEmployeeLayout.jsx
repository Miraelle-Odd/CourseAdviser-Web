import React, {useEffect, useState } from 'react'
import axios from 'axios'
import './StaffEmployeeLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffEmployeeLayout(props) {
    return (
        <Fragment>
            <div className="staff-employee-content">
                <div className='staff-employee-header staff-employee-center'>
                    <p className='staff-employee-title staff-employee-center'>{props.title}</p>
                </div>
                <div className='staff-employee-border staff-employee-center'>
                    <StaffCardLayout
                        listItem={props.listItem}>
                    </StaffCardLayout>
                </div>
            </div>
        </Fragment>
    )
}