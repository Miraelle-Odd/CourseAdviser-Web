import React from 'react'
import './EmployeeManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import ava1 from "../../assets/icons/staff-img.png"
import WorkplaceListCategory from '../../components/ListComponents/WorkplaceListCategory'
import Manager from "../../assets/icons/manager.png"
import aManager from "../../assets/icons/active-manager.png"
import Staff from "../../assets/icons/staff.png"
import aStaff from "../../assets/icons/active-staff.png"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';


const empListFormat = [
    {
        name: "avatar",
        field: "Photo",
        photo: true,
        width: "width120",
    },
    {
        name: "fullname",
        field: "Họ và tên",
        width: "width160"
    },
    {
        name: "phoneNumber",
        field: "Số điện thoại",
        width: "width160",
        willDisappear: true
    },
    {
        name: "email",
        field: "Email",
        width: "remain-space",
        noWrap: true,

    },
    {
        field: "Thao tác",
        width: "width103",
        actionCell: true,
        center: true
    },
    {
        field: "Trạng thái",
        width: "width116",
        statusCell: true,
        noRightMargin: true,
        center: true
    }
]

const empData = [
    {
        avatar: ava1,
        fullname: "NA",
        phoneNumber: "XXXX XXXX XXXX",
        email: "kurocrea@gmail.com",
        actice: false
    },
    {
        avatar: "",
        fullname: "NA",
        phoneNumber: "XXXX XXXX XXXX",
        email: "kurocrea@gmail.com",
        active: false
    },
]

const lcItems = [
    {
        display: "Tất cả",
        awesomeIcon: ['fas', 'address-card'],
        link: "/workplace/employee-management/all/1"
    },
    {
        display: "Quản lý",
        icon: aManager,
        link: "/workplace/employee-management/managers/1"
        
    },
    {
        display: "Nhân viên",
        icon: aStaff,
        link: "/workplace/employee-management/staff/1"
        
    },
]

const renderEmpManament = () => {
    return (
        <div className='aaaa'>
            <WorkplaceListCategory
                items={lcItems}
            ></WorkplaceListCategory>
            <WorkplaceList
                fieldFormat={empListFormat}
                data={empData}
            ></WorkplaceList>
            <div className="statistics-menu"></div>      
        </div>
    )
}

const EmployeeManagement = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý tài khoản nhân viên" toolbar
                renderBody={renderEmpManament()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default EmployeeManagement;