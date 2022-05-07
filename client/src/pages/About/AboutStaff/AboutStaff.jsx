import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './AboutStaff.css'
import { Fragment } from 'react/cjs/react.production.min'
import StaffManagerLayout from '../../../components/LayoutComponents/StaffPage/StaffManagerLayout'
import StaffEmployeeLayout from '../../../components/LayoutComponents/StaffPage/StaffEmployeeLayout'
import StaffTeacherLayout from '../../../components/LayoutComponents/StaffPage/StaffTeacherLayout'
import Footer from '../../../components/Footer/Footer'
import paimon from '../../../assets/icons/staff-img.png'

export default function AboutStaff(props) {
    const [listOfAdvisers, setListOfAdvisers] = useState([])
    const [listOfManagers, setListOfManagers] = useState([])
    const [listOfTeachers, setListOfTeachers] = useState([])
    useEffect(() => {
        const getListManagers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/type/Manager/Top4")
            setListOfManagers(result.data)
        }
        getListManagers().catch(console.error)

        const getListAdvisers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/type/Adviser/Top4")
            setListOfAdvisers(result.data)
        }
        getListAdvisers().catch(console.error)

        const getListTeachers = async () => {
            const result = await axios.get("http://localhost:8080/Staffs/type/Teacher/Top24")
            setListOfTeachers(result.data)
        }
        getListTeachers().catch(console.error)
    }, [])

    // console.log("aa",listOfAdvisers)
    // console.log("bb",listOfTeachers)
    // console.log("c",listOfManagers)
    return (
        <Fragment>
            <StaffManagerLayout
                title="Ban tư vấn nhiệt tình"
                listItem={listOfManagers}>
            </StaffManagerLayout>

            <StaffEmployeeLayout
                title="Đội ngũ quản lý tâm huyết"
                listItem={listOfAdvisers}>
            </StaffEmployeeLayout>

            <StaffTeacherLayout
                title="Đội ngũ giảng dạy uyên bác"
                listItem={listOfTeachers}
                slider>
            </StaffTeacherLayout>

            <Footer></Footer>
        </Fragment>
    )
}