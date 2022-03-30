import React, { useState, useEffect } from 'react'
import './EmployeeManagement.css'
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import ava1 from "../../assets/icons/staff-img.png"
import WorkplaceListCategory from '../../components/ListComponents/WorkplaceListCategory'
import aManager from "../../assets/icons/active-manager.png"
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


const EmployeeManagement = props => {
    const itemsPerPage = 2
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    let navigate = useNavigate();
    let {page} = useParams();

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(empData.slice(itemOffset, endOffset));
        console.log(currentItems)
        console.log(empData)
        setPageCount(Math.ceil(empData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const renderEmpManament = () => {
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % empData.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
            navigate("/workplace/employee-management/all/" + (event.selected + 1))
        }
        return (
            <div className='emp-man-body'>
                <WorkplaceListCategory
                    items={lcItems}
                ></WorkplaceListCategory>
                <div className='wp-list-pagination-container'>
                    <ReactPaginate
                        pageCount={pageCount}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        className="wp-list-pagination"
                        pageClassName="wp-li-pagination page-hidden"
                        pageLinkClassName="wp-link-pagination"
                        previousClassName="prev-next prev"
                        previousLinkClassName="wp-link-pagination"
                        previousLabel=""
                        nextClassName="prev-next next"
                        nextLinkClassName="wp-link-pagination"
                        nextLabel=""
                        disabledClassName="prev-next-disabled"
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                        activeClassName="active"
                    ></ReactPaginate>
                    <input type="text" className='wp-list-pagination-input' value={page}></input>
                </div>
                <WorkplaceList
                    fieldFormat={empListFormat}
                    data={currentItems}
                ></WorkplaceList>
                <div className="statistics-menu"></div>
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