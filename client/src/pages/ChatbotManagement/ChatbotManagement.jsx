import React, { useEffect, useState } from 'react'
import './ChatbotManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

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
        displayText: "Tạo mới nhất"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất"
    },
    {
        value: 2,
        displayText: "Tên khóa học - A đến Z"
    },
    {
        value: 3,
        displayText: "Tên khóa học - Z đến A"
    },
]

const sortLevelItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất"
    },
    {
        value: 2,
        displayText: "Tên cấp học - A đến Z"
    },
    {
        value: 3,
        displayText: "Tên cấp học - Z đến A"
    },
    {
        value: 4,
        displayText: "Học phí cơ bản- thấp đến cao"
    },
    {
        value: 5,
        displayText: "Học phí cơ bản - cao đến thấp"
    },
]

const ChatbotManagement = props => {
    let navigate = useNavigate()
    let { category, page } = useParams()
    const itemsPerPage = 2

    const [pageCount, setPageCount] = useState(1)
    const [botData, setBotData] = useState([])
    const [botListFormat, setBotListFormat] = useState(courseListFormat)
    const [sortItems, setSortItems] = useState()

    useEffect(() => {
        if (category == "bot-courses"){
            setBotListFormat(courseListFormat)
            setSortItems(sortCourseItems)
        }
        if (category == "bot-course-levels"){
            setBotListFormat(levelListFormat)
            setSortItems(sortLevelItems)
        }
        axios.get("http://localhost:8080/" + category + "/get-count/")
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
            })
        axios.get("http://localhost:8080/" + category + "/get-all-courses/" + (page - 1))
            .then((res) => {
                res.data.map((item, index) => {
                    if (item.course_name) {
                        item.thumbnail = item.course_image
                        if (item.course_status == "enabled")
                            item.active = true
                        else
                            item.active = false
                        item = { item: (delete item['course_image'], delete item['course_status'], item) };
                    }
                    if (item.level_name) {
                        item.level_name = item.Bot_Course.course_name + " - " + item.level_name
                        item.basic_fee = item.basic_fee + "/" + item.fee_unit
                        if (item.level_status == "enabled")
                            item.active = true
                        else
                            item.active = false

                        item = { item: (delete item['fee_unit'], delete item['Bot_Course'], delete item['level_status'], item) };
                    }
                })
                setBotData(res.data)
            })

    }, [])

    const handlePageClick = (event) => {
        navigate("/workplace/chatbot-management/" + category + "/" + (event.selected + 1))
        navigate(0)
    }
    const onCategoryChange = (event) => {
        navigate("/workplace/chatbot-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/1")
        navigate(0)
    }
    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/chatbot-management/" + category + "/" + (e.target.value))
                navigate(0)
            }
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
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default ChatbotManagement;