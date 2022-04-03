import React, { useState, useEffect } from 'react'
import './EmployeeManagement.css'
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import ava1 from "../../assets/icons/staff-img.png"
import aManager from "../../assets/icons/active-manager.png"
import aStaff from "../../assets/icons/active-staff.png"

const onOpenClickHandle = () => {
    alert("Open Sesame")
}

const onEditClickHandle = () => {
    alert("Edit Sesame")
}

const onCreateClick =() => {
    alert("Create")
}

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
        active: true
    },
    {
        avatar: "",
        fullname: "not NA",
        phoneNumber: "XXXX XXXX XXXX",
        email: "kurocrea@gmail.com",
        active: false
    },
    {
        avatar: "",
        fullname: "NA 1",
        phoneNumber: "XXXX XXXX XXXX",
        email: "kurocrea@gmail.com",
        active: false
    },
    {
        avatar: "",
        fullname: "NA2 ",
        phoneNumber: "XXXX XXXX XXXX",
        email: "kurocrea@gmail.com",
        active: false
    },
    {
        avatar: "",
        fullname: "NA 2",
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

const statisticItems = [
    {
        fieldName: "Tổng cộng",
        fieldValue: 21
    },
    {
        fieldName: "Hoạt động",
        fieldValue: 20
    },
    {
        fieldName: "Khóa",
        fieldValue: 1
    },
]

const EmployeeManagement = props => {

    const renderEmpManament = () => {

        return (
            <div className='emp-man-body'>
                <WorkplaceList
                    listName="employee-management"
                    fieldFormat={empListFormat}
                    data={empData}
                    categoryItems={lcItems}
                    statisticItems={statisticItems}
                    openAction={onOpenClickHandle}
                    editAction={onEditClickHandle}
                    onCreateClick={onCreateClick}
                ></WorkplaceList>
            </div>
        )
    }

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