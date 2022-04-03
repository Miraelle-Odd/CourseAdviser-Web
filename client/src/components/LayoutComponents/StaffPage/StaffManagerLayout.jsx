import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StaffManagerLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffManagerLayout(props) {
    const [listOfStaffs, setListOfStaffs] = useState([])
    useEffect(() => {
        const getListStaffs = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/Manager/Top4")
            setListOfStaffs(result.data)
        }
        getListStaffs().catch(console.error)
        
    }, [])
    console.log("manager", listOfStaffs)
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
                        listItem={listOfStaffs}>
                    </StaffCardLayout>
                </div>

                <div className='staff-manager-bg-2'> </div>
            </div>
        </Fragment>
    )
}