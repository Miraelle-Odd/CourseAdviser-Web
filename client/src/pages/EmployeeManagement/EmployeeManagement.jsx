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
import Modal from 'react-modal';
import CreateAccount from '../../components/PopupComponents/CreateAccount/CreateAccount';
import UpdateGeneral from '../../components/PopupComponents/UpdateGeneral/UpdateGeneral';
import ViewGeneral from '../../components/PopupComponents/ViewGeneral/ViewGeneral';
import axios from 'axios';

const onOpenClickHandle = () => {
    alert("Open Sesame")
}

const onEditClickHandle = () => {
    alert("Edit Sesame")
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

const lcItems = [
    {
        display: "Tất cả",
        awesomeIcon: ['fas', 'address-card'],
        link: "/workplace/employee-management/all",
        value: "all"
    },
    {
        display: "Quản lý",
        icon: aManager,
        link: "/workplace/employee-management/manager",
        value: "manager"

    },
    {
        display: "Nhân viên",
        icon: aStaff,
        link: "/workplace/employee-management/employee",
        value: "employee"

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
    let { category, page } = useParams()
    let navigate = useNavigate()
    const itemsPerPage = 2;

    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [isShowView, setIsShowView] = useState(false);
    const [pageCount, setPageCount] = useState(1)
    const [empData, setEmpData] = useState([])
    const [currentPage, setCurrentPage] = useState(page)
    const [currentCategory, setCurrentCategory] = useState(category)
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [inactiveCount, setInactiveCount] = useState(0)

    const empData1 = [
        {
            avatar: ava1,
            fullname: "NA",
            phoneNumber: "XXXX XXXX XXXX",
            email: "kurocrea@gmail.com",
            active: true
        },
        {
            avatar: ava1,
            fullname: "NA2",
            phoneNumber: "XXXX XXXX XXXX",
            email: "kurocrea@gmail.com",
            active: true
        },
        {
            avatar: ava1,
            fullname: "NA3",
            phoneNumber: "XXXX XXXX XXXX",
            email: "kurocrea@gmail.com",
            active: true
        },
        {
            avatar: ava1,
            fullname: "NA4",
            phoneNumber: "XXXX XXXX XXXX",
            email: "kurocrea@gmail.com",
            active: true
        },
        {
            avatar: ava1,
            fullname: "NA5",
            phoneNumber: "XXXX XXXX XXXX",
            email: "kurocrea@gmail.com",
            active: true
        },
    ]

    useEffect(() => {
        const getListCount = axios.get("http://localhost:8080/accounts/get-count/" + currentCategory)
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
                setTotalCount(res.data)
            })
        const getActiveCount = axios.get("http://localhost:8080/accounts/get-active-count/" + currentCategory)
            .then((res) => {
                setActiveCount(res.data)
                console.log(res.data)
            })
        const getInactiveCount = axios.get("http://localhost:8080/accounts/get-inactive-count/" + currentCategory)
            .then((res) => {
                setInactiveCount(res.data)
                console.log(res.data)
            })
        const getList = axios.get("http://localhost:8080/accounts/get-list/" + currentCategory + "/" + (currentPage - 1))
            .then((res) => {
                res.data.map((item, index) => {
                    item.avatar = item.Personal_Info.avatar
                    item.phoneNumber = item.Personal_Info.phone
                    item.fullname = item.Personal_Info.name
                    if (item.status == "enabled")
                        item.active = true
                    else
                        item.active = false
                    item = { item: (delete item['Personal_Info'], delete item['status'], item) };
                })
                console.log(res.data)
                setEmpData(res.data)
            })
    }, [currentPage])

    const handlePageClick = (event) => {
        navigate("/workplace/employee-management/" + category + "/" + (event.selected + 1))
        setCurrentPage(event.selected + 1);
        navigate(0)
    }

    const onCategoryChange = (event) => {
        setCurrentPage(1)
        setCurrentCategory(event.currentTarget.attributes.getNamedItem("value").value)
        navigate("/workplace/employee-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/1")
        navigate(0)
        // console.log(event.currentTarget.attributes.getNamedItem("value").value)
    }

    const onCreateClick = () => {
        setIsShowCreate(true);
    }
    const onUpdateClick = () => {
        setIsShowUpdate(true);
    }
    const onViewClick = () => {
        setIsShowView(true);
    }
    const handleFormClose = () => {
        setIsShowCreate(false);
        setIsShowUpdate(false);
        setIsShowView(false);
    }

    const renderEmpManament = () => {
        return (
            <div className='emp-man-body'>
                <WorkplaceList
                    listName="employee-management"
                    fieldFormat={empListFormat}
                    data={empData}
                    categoryItems={lcItems}
                    statisticItems={[
                        {
                            fieldName: "Tổng cộng",
                            fieldValue: totalCount
                        },
                        {
                            fieldName: "Hoạt động",
                            fieldValue: activeCount
                        },
                        {
                            fieldName: "Khóa",
                            fieldValue: inactiveCount
                        },
                    ]}
                    openAction={onViewClick}
                    editAction={onUpdateClick}
                    onCreateClick={onCreateClick}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    forcePage={parseInt(currentPage) - 1}
                    onCategoryChange={onCategoryChange}

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
            <Modal
                isOpen={isShowCreate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}>
                <CreateAccount
                    handleFormClose={() => handleFormClose()}>
                </CreateAccount>
            </Modal>
            <Modal
                isOpen={isShowUpdate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}>
                <UpdateGeneral
                    handleFormClose={() => handleFormClose()}>
                </UpdateGeneral>
            </Modal>
            <Modal
                isOpen={isShowView}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}>
                <ViewGeneral
                    handleFormClose={() => handleFormClose()}>
                </ViewGeneral>
            </Modal>
        </div>
    )
}

export default EmployeeManagement;