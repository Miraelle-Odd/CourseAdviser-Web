import React, { useState, useEffect } from 'react'
import './RequestManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import NoteRequest from '../../components/PopupComponents/NoteRequest/NoteRequest'
import Modal from 'react-modal';
import AlertConfirm from '../../components/PopupComponents/AlertConfirm/AlertConfirm'

const qaListFormat = [
    {
        name: "question",
        field: "Yêu cầu",
        width: "remain-space"
    },
    {
        name: "answer",
        field: "Ghi chú",
        width: "remain-space",
        willDisappear: true
    },
    {
        field: "Thao tác",
        width: "width103",
        actionCell: true,
        center: true,
        noEdit: true
    },
    {
        field: "Trạng thái",
        width: "width116",
        statusCell: true,
        noRightMargin: true,
        center: true
    }
]

const lcItems = [{
    display: "Tất cả",
    awesomeIcon: ['fas', 'address-card'],
    link: "/workplace/request-management/all",
    value: "all"
}]

const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "request_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "request_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Câu hỏi - A đến Z",
        sortParam: "question-ascend",
        sortField: "content",
        sortOrder: "ASC"

    },
    {
        value: 3,
        displayText: "Câu hỏi - Z đến A",
        sortParam: "question-descend",
        sortField: "content",
        sortOrder: "DESC"
    }
]


const RequestManagement = props => {
    let { category, page, sort, search } = useParams()
    let navigate = useNavigate()
    const itemsPerPage = 8;

    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [isShowView, setIsShowView] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [pageCount, setPageCount] = useState(1)
    const [qaData, setQaData] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [inactiveCount, setInactiveCount] = useState(0)
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

        axios.get("http://localhost:8080/requests/count")
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
                setTotalCount(res.data)
            })
            .then(() => {
                if (search != 'all') {
                    axios.get("http://localhost:8080/requests/get-counts/" + category + "/" + search)
                        .then((res) => {
                            setPageCount(Math.ceil(res.data / itemsPerPage))
                        })
                }
            })
        const getActiveCount = axios.get("http://localhost:8080/requests/count-active")
            .then((res) => {
                setActiveCount(res.data)
            })
        const getInactiveCount = axios.get("http://localhost:8080/requests/count-inactive")
            .then((res) => {
                setInactiveCount(res.data)
            })
        if (sortItems[sortOption])
            axios.get("http://localhost:8080/requests/get-list/all/" + sortItems[sortOption].sortField + "/" + sortItems[sortOption].sortOrder + "/" + search + "/" + (page - 1))
                .then((res) => {
                    res.data.map((item, index) => {
                        item.id = item.request_id
                        item.question = item.content
                        item.answer = item.note
                        if (item.status == "done")
                            item.active = true
                        else
                            item.active = false
                        item = { item: (delete item['status'], item) };
                    })
                    setQaData(res.data)
                })
    }, [sortOption])

    const handlePageClick = (event) => {
        navigate("/workplace/request-management/all/" + sort + "/" + search + "/" + (event.selected + 1))
        navigate(0)
    }

    const onCategoryChange = (event) => {
        navigate("/workplace/request-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/" + sort + "/all/1")
        navigate(0)
    }

    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/request-management/all/" + sort + "/" + search + "/" + (e.target.value))
                navigate(0)
            }
    }

    const onViewClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        setIdItem(id);
        setIsShowView(true);
    }
    const handleFormClose = () => {
        setIsShowCreate(false);
        setIsShowUpdate(false);
        setIsShowView(false);
        setIsShowAlert(false);
    }
    const onStatusClick = (e) => {
        const status = e.currentTarget.attributes.getNamedItem("value").value
        setUpdateStatus(status)
        setIsShowAlert(true);
    }
    const sortHandler = (e) => {
        setSortOption(e.target.value)
        navigate("/workplace/request-management/all/" + sortItems[e.target.value].sortParam + "/" + search + "/" + page)
        navigate(0)
    }
    const searchHandler = (e) => {
        if (e.key === "Enter") {
            var text = "all"
            if (e.target.value && e.target.value.trim() != "")
                text = e.target.value

            navigate("/workplace/request-management/all/" + sort + "/" + text + "/1")
            navigate(0)
        }
    }

    const handleStatus = (e) => {
        axios.post(`http://localhost:8080/requests/update-status/${updateStatus}`)
            .then((res) => {
                setError("Update success.\n\rReload page after")
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            })
    }

    const renderQaManagement = () => {
        return (
            <div className='qa-man-body'>
                <WorkplaceList
                    listName="q-and-a-management"
                    fieldFormat={qaListFormat}
                    data={qaData}
                    categoryItems={lcItems}
                    statisticPanel
                    statisticItems={[
                        {
                            fieldName: "Tổng cộng",
                            fieldValue: totalCount
                        },
                        {
                            fieldName: "Đã xử lý",
                            fieldValue: activeCount
                        },
                        {
                            fieldName: "Chờ xử lý",
                            fieldValue: inactiveCount
                        },
                    ]}
                    openAction={onViewClick}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    forcePage={parseInt(page) - 1}
                    onCategoryChange={onCategoryChange}
                    onPageTextChange={onPageTextChange}
                    statusAction={onStatusClick}
                    customOn="Done"
                    customOff="Consider"
                    noCreateBtn={true}
                ></WorkplaceList>
            </div>
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Quản lý yêu cầu"
                toolbar
                renderBody={renderQaManagement()}
                sortItems={sortItems}
                sortHandler={sortHandler}
                sortOption={sortOption}
                searchHandler={searchHandler}
                currentSearch={search}>
            </WorkplaceLayout>
            <Footer></Footer>
            <Modal
                isOpen={isShowView}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <NoteRequest
                    handleFormClose={() => handleFormClose()}
                    idItem={idItem}>
                </NoteRequest>
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

export default RequestManagement;