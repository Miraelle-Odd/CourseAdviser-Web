import React from 'react'
import './EmployeeManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'

const renderEmpManament = () => {
    return(
        <div>Đây là Emp Man Workplace</div>
    )
}

const EmployeeManagement = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý tài khoản nhân viên" toolbar
            renderBody = {renderEmpManament()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default EmployeeManagement;