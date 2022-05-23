import React, { useState, useEffect } from 'react'
import './QaManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import Modal from 'react-modal';
import CreateQa from '../../components/PopupComponents/CreateQa/CreateQa'
import UpdateQa from '../../components/PopupComponents/UpdateQa/UpdateQa'
import ViewQa from '../../components/PopupComponents/ViewQa/ViewQa'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const qaListFormat = [
    {
        name: "question",
        field: "Câu hỏi",
        width: "remain-space"
    },
    {
        name: "answer",
        field: "Giải đáp",
        width: "remain-space",
        willDisappear: true
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
        link: "/workplace/q-and-a-management/all",
        value: "all"
    },
    {
        display: "Trung tâm",
        awesomeIcon: ['fas', 'school'],
        link: "/workplace/q-and-a-management/center",
        value: "center"

    },
    {
        display: "Khóa học",
        awesomeIcon: ['fas', 'book'],
        link: "/workplace/q-and-a-management/course",
        value: "course"

    },
]

const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "qa_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "qa_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Câu hỏi - A đến Z",
        sortParam: "question-ascend",
        sortField: "question",
        sortOrder: "ASC"

    },
    {
        value: 3,
        displayText: "Câu hỏi - Z đến A",
        sortParam: "question-descend",
        sortField: "question",
        sortOrder: "DESC"
    }
]


const QaManagement = props => {
    let { category, page, sort } = useParams()
    let navigate = useNavigate()
    const itemsPerPage = 2;

    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [isShowView, setIsShowView] = useState(false);
    const [pageCount, setPageCount] = useState(1)
    const [qaData, setQaData] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [inactiveCount, setInactiveCount] = useState(0)

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
        const getListCount = axios.get("http://localhost:8080/q-and-as/get-count/" + category)
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
                setTotalCount(res.data)
            })
        const getActiveCount = axios.get("http://localhost:8080/q-and-as/get-active-count/" + category)
            .then((res) => {
                setActiveCount(res.data)

            })
        const getInactiveCount = axios.get("http://localhost:8080/q-and-as/get-inactive-count/" + category)
            .then((res) => {
                setInactiveCount(res.data)
            })
        if(sortItems[sortOption])
            axios.get("http://localhost:8080/q-and-as/get-list/" + category + "/" + sortItems[sortOption].sortField + "/" + sortItems[sortOption].sortOrder + "/" + (page - 1))
            .then((res) => {
                res.data.map((item, index) => {
                    item.id = item.qa_id
                    if (item.status == "enabled")
                        item.active = true
                    else
                        item.active = false
                    item = { item: (delete item['status'], item) };
                })
                setQaData(res.data)
            })
    }, [sortOption])

    const handlePageClick = (event) => {
        navigate("/workplace/q-and-a-management/" + category + "/" + sort + "/" + (event.selected + 1))
        navigate(0)
    }

    const onCategoryChange = (event) => {
        navigate("/workplace/q-and-a-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/" + sort + "/1")
        navigate(0)
    }

    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/q-and-a-management/" + category + "/" + sort + "/" + (e.target.value))
                navigate(0)
            }
    }
    const onCreateClick = () => {
        setIsShowCreate(true);
    }
    const onUpdateClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        setIdItem(id);
        setIsShowUpdate(true)
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
    }

    const sortHandler = (e) => {
        setSortOption(e.target.value)
        navigate("/workplace/q-and-a-management/" + category + "/" + sortItems[e.target.value].sortParam + "/" + page)
        navigate(0)
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
                ></WorkplaceList>
            </div>
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Quản lý Q & A"
                toolbar
                renderBody={renderQaManagement()}
                sortItems={sortItems}
                sortHandler={sortHandler}
                sortOption={sortOption}
            ></WorkplaceLayout>
            <Footer></Footer>
            <Modal
                isOpen={isShowCreate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <CreateQa
                    handleFormClose={() => handleFormClose()}>
                </CreateQa>
            </Modal>
            <Modal
                isOpen={isShowUpdate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <UpdateQa
                    question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                    handleFormClose={() => handleFormClose()}
                    idItem={idItem}>
                </UpdateQa>
            </Modal>
            <Modal
                isOpen={isShowView}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <ViewQa
                    question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                    handleFormClose={() => handleFormClose()}
                    idItem={idItem}>
                </ViewQa>
            </Modal>
        </div>
    )
}

export default QaManagement;