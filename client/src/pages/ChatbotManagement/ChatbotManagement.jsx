import React, { useEffect, useState } from 'react'
import './ChatbotManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal';
import BotCourseCreate from '../../components/PopupComponents/BotCourseCreate/BotCourseCreate'
import BotCourseUpdate from '../../components/PopupComponents/BotCourseUpdate/BotCourseUpdate'
import BotCourseView from '../../components/PopupComponents/BotCourseView/BotCourseView'

const courseListFormat = [
    {
        name: "thumbnail",
        field: "Photo",
        photo: true,
        width: "width120",
    },
    {
        name: "course_name",
        field: "Tên khóa học",
        width: "width160"
    },
    {
        name: "course_description",
        field: "Mô tả",
        width: "remain-space",
        willDisappear: true,
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

const levelListFormat = [
    {
        name: "level_name",
        field: "Tên cấp học",
        width: "width160"
    },
    {
        name: "level_description",
        field: "Mô tả",
        width: "remain-space",
        willDisappear: true,
    },
    {
        name: "basic_fee",
        field: "Học phí cơ bản",
        width: "width160",
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
        center: true,
    }
]

const lcItems = [
    // {
    //     display: "Trung tâm",
    //     awesomeIcon: ['fas', 'school'],
    //     link: "/workplace/chatbot-management/center",
    //     value: "center"
    // },
    {
        display: "Khóa học",
        awesomeIcon: ['fas', 'graduation-cap'],
        link: "/workplace/chatbot-management/bot-courses",
        value: "bot-courses"

    },
    {
        display: "Cấp học",
        awesomeIcon: ['fas', 'layer-group'],
        link: "/workplace/chatbot-management/bot-course-levels",
        value: "bot-course-levels"
    },
]

const sortCourseItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "course_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "course_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Tên khóa học - A đến Z",
        sortParam: "name-ascend",
        sortField: "course_name",
        sortOrder: "ASC"
    },
    {
        value: 3,
        displayText: "Tên khóa học - Z đến A",
        sortParam: "name-descend",
        sortField: "course_name",
        sortOrder: "DESC"
    },
]

const sortLevelItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "level_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "level_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Tên khóa học - A đến Z",
        sortParam: "course-ascend",
        sortField: "course_name",
        sortOrder: "ASC"
    },
    {
        value: 3,
        displayText: "Tên khóa học - Z đến A",
        sortParam: "course-descend",
        sortField: "course_name",
        sortOrder: "DESC"
    },
    {
        value: 4,
        displayText: "Tên cấp học - A đến Z",
        sortParam: "level-ascend",
        sortField: "level_name",
        sortOrder: "ASC"
    },
    {
        value: 5,
        displayText: "Tên cấp học - Z đến A",
        sortParam: "level-descend",
        sortField: "level_name",
        sortOrder: "DESC"
    },
    // {
    //     value: 6,
    //     displayText: "Học phí cơ bản- thấp đến cao",
    //     sortParam: "tuition-ascend",
    //     sortField: "basic_fee",
    //     sortOrder: "ASC"
    // },
    // {
    //     value: 7,
    //     displayText: "Học phí cơ bản - cao đến thấp",
    //     sortParam: "tuition-descend",
    //     sortField: "basic_fee",
    //     sortOrder: "DESC"
    // },
]

const ChatbotManagement = props => {
    let navigate = useNavigate()
    let { category, page, sort } = useParams()
    const itemsPerPage = 8

    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [isShowView, setIsShowView] = useState(false);

    const [pageCount, setPageCount] = useState(1)
    const [botData, setBotData] = useState([])
    const [botListFormat, setBotListFormat] = useState(courseListFormat)

    const [course, setCourse] = useState()

    const [sortItems, setSortItems] = useState()
    const [sortOption, setSortOption] = useState()

    useEffect(async () => {
        if (category == "bot-courses") {
            setBotListFormat(courseListFormat)
            setSortItems(sortCourseItems)
        }
        if (category == "bot-course-levels") {
            setBotListFormat(levelListFormat)
            setSortItems(sortLevelItems)
        }
        if (sortItems)
            sortItems.forEach(element => {
                for (let [key, keyValue] of Object.entries(element)) {
                    if (key == "sortParam" && keyValue == sort) {
                        setSortOption(element.value)
                    }
                }
            });
        axios.get("http://localhost:8080/" + category + "/get-count/")
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
            })
        if (sortItems && sortItems[sortOption])
            axios.get("http://localhost:8080/" + category + "/get-all-courses/" + sortItems[sortOption].sortField + "/" + sortItems[sortOption].sortOrder + "/" + (page - 1))
                .then((res) => {
                    res.data.map((item, index) => {
                        if (item.course_name) {
                            item.thumbnail = item.course_image
                            if (item.course_status == "enabled")
                                item.active = true
                            else
                                item.active = false
                            item.id = item.course_id
                            item = { item: (delete item['course_id'], delete item['course_image'], delete item['course_status'], item) };
                        }
                        if (item.level_name) {
                            item.id = item.level_id
                            item.level_name = item.Bot_Course.course_name + " - " + item.level_name
                            item.basic_fee = item.basic_fee + "/" + item.fee_unit
                            if (item.level_status == "enabled")
                                item.active = true
                            else
                                item.active = false

                            item = { item: (delete item['level_id'], delete item['fee_unit'], delete item['Bot_Course'], delete item['level_status'], item) };
                        }
                    })
                    setBotData(res.data)
                })

    }, [sortOption, sortItems])

    const handlePageClick = (event) => {
        navigate("/workplace/chatbot-management/" + category + "/" + sort + "/" + (event.selected + 1))
        navigate(0)
    }
    const onCategoryChange = (event) => {
        navigate("/workplace/chatbot-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/updated-latest/1")
        navigate(0)
    }
    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/chatbot-management/" + category + "/" + sort + "/" + (e.target.value))
                navigate(0)
            }
    }

    const sortHandler = (e) => {
        setSortOption(e.target.value)
        navigate("/workplace/chatbot-management/" + category + "/" + sortItems[e.target.value].sortParam + "/" + page)
        navigate(0)
    }

    const onCreateClick = () => {
        setIsShowCreate(true);
    }
    const onUpdateClick = async(e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        await axios.post("http://localhost:8080/bot-courses/get-course-by-id", {id: id}).then((res)=>{
            setCourse(res.data)
        })
        setIsShowUpdate(true);
    }
    const onViewClick = async(e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        await axios.post("http://localhost:8080/bot-courses/get-course-by-id", {id: id}).then((res)=>{
            setCourse(res.data)
        })
        setIsShowView(true);
    }
    const handleFormClose = () => {
        setIsShowCreate(false);
        setIsShowUpdate(false);
        setIsShowView(false);
    }

    const renderBotManagement = () => {
        return (
            <div className='bot-man-body'>
                <WorkplaceList
                    listName="chatbot-management"
                    fieldFormat={botListFormat}
                    data={botData}
                    categoryItems={lcItems}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    forcePage={parseInt(page) - 1}
                    onCategoryChange={onCategoryChange}
                    onPageTextChange={onPageTextChange}
                    customOn={"Open"}
                    customOff={"Close"}
                    chatbot
                    openAction={onViewClick}
                    editAction={onUpdateClick}
                    onCreateClick={onCreateClick}
                ></WorkplaceList>
            </div>
        )
    }

    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Quản lý Chatbot"
                renderBody={renderBotManagement()}
                toolbar
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
                ariaHideApp={false}
            >
                <BotCourseCreate
                    handleFormClose={handleFormClose}>
                </BotCourseCreate>
            </Modal>
            <Modal
                isOpen={isShowUpdate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
            >
                <BotCourseUpdate
                    handleFormClose={handleFormClose}
                    course={course}>
                </BotCourseUpdate>
            </Modal>
            <Modal
                isOpen={isShowView}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
            >
                <BotCourseView
                    handleFormClose={handleFormClose}
                    course={course}>
                </BotCourseView>
            </Modal>
        </div>
    )
}

export default ChatbotManagement;