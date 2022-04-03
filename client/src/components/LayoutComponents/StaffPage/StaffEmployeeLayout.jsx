import React, {useEffect, useState } from 'react'
import axios from 'axios'
import './StaffEmployeeLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffEmployeeLayout(props) {
    const [listOfStaffs, setListOfStaffs] = useState([])
    useEffect(() => {
        const getListStaffs = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/Adviser/Top4")
            setListOfStaffs(result.data)
        }
        getListStaffs().catch(console.error)
        
    }, [])
    console.log("adviser", listOfStaffs)
    return (
        <Fragment>
            <div className="staff-employee-content">
                <div className='staff-employee-header staff-employee-center'>
                    <p className='staff-employee-title staff-employee-center'>Ban tư vấn nhiệt tình</p>
                </div>
                <div className='staff-employee-border staff-employee-center'>
                    <StaffCardLayout
                        listItem={listOfStaffs}>
                    </StaffCardLayout>
                </div>
            </div>
        </Fragment>
    )
}