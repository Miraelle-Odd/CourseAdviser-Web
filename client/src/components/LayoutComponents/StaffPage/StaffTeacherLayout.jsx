import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './StaffTeacherLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import StaffCardLayout from './StaffCardLayout';

export default function StaffTeacherLayout() {
    const [listOfStaffs, setListOfStaffs] = useState([])
    useEffect(() => {
        const getListStaffs = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/Teacher/Top4")
            setListOfStaffs(result.data)
        }
        getListStaffs().catch(console.error)
        
    }, [])

    console.log(listOfStaffs)
    return (
        <Fragment>
            <div className="staff-teacher-content">
                <div className='staff-teacher-header staff-teacher-center'>
                    <p className='staff-teacher-title staff-teacher-center'>Đội ngũ giảng dạy uyên bác</p>
                </div>
                <div className='staff-teacher-border staff-teacher-center'>
                    <StaffCardLayout
                        listItem={listOfStaffs}>
                    </StaffCardLayout>
                    <div className='staff-teacher-indi'></div>
                </div>
            </div>
        </Fragment>
    )
}