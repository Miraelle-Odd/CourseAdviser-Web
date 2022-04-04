import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StaffManagerLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffManagerLayout(props) {
    return (
        <Fragment>
            <div className="staff-manager-content">
                <div className='staff-manager-bg-1'>
                    <div className='staff-manager-header staff-manager-center'>
                        <p className='staff-manager-title staff-manager-center'>{props.title}</p>
                    </div>
                </div>
                <div className="staff-manager-card-layout">
                    <StaffCardLayout
                        listItem={props.listItem}>
                    </StaffCardLayout>
                </div>

                <div className='staff-manager-bg-2'> </div>
            </div>
        </Fragment>
    )
}