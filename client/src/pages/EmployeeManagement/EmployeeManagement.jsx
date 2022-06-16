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
import AlertConfirm from '../../components/PopupComponents/AlertConfirm/AlertConfirm';

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

const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "account_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "account_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Họ tên - A đến Z",
        sortParam: "name-ascend",
        sortField: "name",
        sortOrder: "ASC"

    },
    {
        value: 3,
        displayText: "Họ tên - Z đến A",
        sortParam: "name-descend",
        sortField: "name",
        sortOrder: "DESC"
    },
    {
        value: 4,
        displayText: "Email - A đến Z",
        sortParam: "email-ascend",
        sortField: "email",
        sortOrder: "ASC"
    },
    {
        value: 5,
        displayText: "Email - Z đến A",
        sortParam: "email-descend",
        sortField: "account_id",
        sortField: "email",
        sortOrder: "DESC"
    }
]

const EmployeeManagement = props => {
    let { category, page, sort, search } = useParams()
    let navigate = useNavigate()
    const itemsPerPage = 8;

    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [isShowView, setIsShowView] = useState(false);
    const [pageCount, setPageCount] = useState(1)
    const [empData, setEmpData] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [inactiveCount, setInactiveCount] = useState(0)
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [updateStatus, setUpdateStatus] = useState()
    const [error, setError] = useState()

    const [idItem, setIdItem] = useState()

    const [sortOption, setSortOption] = useState()

    useEffect(async () => {
        sortItems.forEach(element => {
            for (let [key, keyValue] of Object.entries(element)) {
                if (key == "sortParam" && keyValue == sort) {
                    setSortOption(element.value)
                }
            }
        });
        axios.get("http://localhost:8080/accounts/get-count/" + category)
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
                setTotalCount(res.data)
            })
            .then(() => {
                if (search != 'all') {
                    axios.get("http://localhost:8080/accounts/get-counts/" + category + "/" + search)
                        .then((res) => {
                            setPageCount(Math.ceil(res.data / itemsPerPage))
                        })
                }
            })
        const getActiveCount = axios.get("http://localhost:8080/accounts/get-active-count/" + category)
            .then((res) => {
                setActiveCount(res.data)
            })
        const getInactiveCount = axios.get("http://localhost:8080/accounts/get-inactive-count/" + category)
            .then((res) => {
                setInactiveCount(res.data)
            })
        if (sortItems[sortOption])
            axios.get("http://localhost:8080/accounts/get-list/" + category + "/" + sortItems[sortOption].sortField + "/" + sortItems[sortOption].sortOrder + "/" + search + "/" + (page - 1))
                .then((res) => {
                    res.data.map((item, index) => {
                        item.id = item.Personal_Info.account_id
                        item.avatar = item.Personal_Info.avatar
                        item.phoneNumber = item.Personal_Info.phone
                        item.fullname = item.Personal_Info.name
                        if (item.status == "enabled")
                            item.active = true
                        else
                            item.active = false
                        item = { item: (delete item['Personal_Info'], delete item['status'], item) };
                    })
                    setEmpData(res.data)
                })

    }, [sortOption])

    const handlePageClick = (event) => {
        navigate("/workplace/employee-management/" + category + "/" + sort + "/" + search + "/" + (event.selected + 1))
        navigate(0)
    }

    const onCategoryChange = (event) => {
        navigate("/workplace/employee-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/" + sort + "/all/1")
        navigate(0)
    }

    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/employee-management/" + category + "/" + sort + "/" + search + "/" + (e.target.value))
                navigate(0)
            }
    }

    const onCreateClick = () => {
        setIsShowCreate(true);
    }
    const onUpdateClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        setIdItem(id);
        setIsShowUpdate(true);
    }
    const onViewClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        setIdItem(id);
        console.log(e.currentTarget)
        setIsShowView(true);
    }
    const onStatusClick = (e) => {
        const status = e.currentTarget.attributes.getNamedItem("value").value
        setUpdateStatus(status)
        setIsShowAlert(true);
    }
    const handleFormClose = () => {
        setIsShowCreate(false);
        setIsShowUpdate(false);
        setIsShowView(false);
        setIsShowAlert(false);
    }

    const renderEmpManament = () => {
        return (
            <div className='emp-man-body'>
                <WorkplaceList
                    listName="employee-management"
                    fieldFormat={empListFormat}
                    data={empData}
                    categoryItems={lcItems}
                    statisticPanel
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
                    forcePage={parseInt(page) - 1}
                    onCategoryChange={onCategoryChange}
                    onPageTextChange={onPageTextChange}
                    statusAction={onStatusClick}
                ></WorkplaceList>
            </div>
        )
    }

    const sortHandler = (e) => {
        setSortOption(e.target.value)
        navigate("/workplace/employee-management/" + category + "/" + sortItems[e.target.value].sortParam + "/" + search + "/" + page)
        navigate(0)
    }
    const searchHandler = (e) => {
        if (e.key === "Enter") {
            var text = "all"
            if (e.target.value && e.target.value.trim() != "")
                text = e.target.value

            navigate("/workplace/employee-management/" + category + "/" + sort + "/" + text + "/1")
            navigate(0)
        }
    }

    const handleStatus = (e) => {
        axios.post(`http://localhost:8080/accounts/update-status/${updateStatus}`)
            .then((res) => {
                console.log(res.data)
                setError("Update success.\n\rReload page after")
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            })
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Quản lý tài khoản nhân viên"
                toolbar
                renderBody={renderEmpManament()}
                sortItems={sortItems}
                sortHandler={sortHandler}
                sortOption={sortOption}
                searchHandler={searchHandler}
                currentSearch={search}>
            </WorkplaceLayout>
            <Footer></Footer>
            <Modal
                isOpen={isShowCreate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <CreateAccount
                    handleFormClose={() => {
                        handleFormClose()
                        navigate(0)
                        }}>
                </CreateAccount>
            </Modal>
            <Modal
                isOpen={isShowUpdate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <UpdateGeneral
                    handleFormClose={() => handleFormClose()}
                    idItem={idItem}>
                </UpdateGeneral>
            </Modal>
            <Modal
                isOpen={isShowView}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <ViewGeneral
                    handleFormClose={() => handleFormClose()}
                    idItem={idItem}>
                </ViewGeneral>
            </Modal>
            <Modal
                isOpen={isShowAlert}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertConfirm
                    alert={error}
                    handleFormClose={() => handleFormClose()}
                    handleStatus={() => handleStatus()}>
                </AlertConfirm>
            </Modal>
        </div>
    )
}

export default EmployeeManagement;