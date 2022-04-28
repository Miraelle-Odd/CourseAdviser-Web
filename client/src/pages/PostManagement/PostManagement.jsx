import React, { useEffect, useState } from 'react'
import './PostManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import thumb1 from "../../assets/icons/draft.png"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const postListFormat = [
    {
        name: "thumbnail",
        field: "Photo",
        photo: true,
        width: "width120",
    },
    {
        name: "title",
        field: "Tiêu đề",
        width: "width160"
    },
    {
        name: "subtitle",
        field: "Tiêu đề phụ",
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

const lcItems = [
    {
        display: "Tất cả",
        awesomeIcon: ['fas', 'address-card'],
        link: "/workplace/post-management/all",
        value: "all"
    },
    {
        display: "Học thuật",
        awesomeIcon: ['fas', 'graduation-cap'],
        link: "/workplace/post-management/academic",
        value: "academic"

    },
    {
        display: "Sự kiện",
        awesomeIcon: ['fas', 'star'],
        link: "/workplace/post-management/event",
        value: "event"

    },
    {
        display: "Khuyến mãi",
        awesomeIcon: ['fas', 'piggy-bank'],
        link: "/workplace/post-management/discount",
        value: "discount"

    },
]

const PostManagement = props => {
    let navigate = useNavigate()
    let {category, page} = useParams()
    const itemsPerPage = 2

    const [pageCount, setPageCount] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [inactiveCount, setInactiveCount] = useState(0)

    const [postData, setPostData] = useState([])

    useEffect(() => {
        const getListCount = axios.get("http://localhost:8080/posts/" + category + "/count")
            .then((res) => {
                setPageCount(Math.ceil(res.data / itemsPerPage))
                setTotalCount(res.data)
            })
        const getActiveCount = axios.get("http://localhost:8080/posts/" + category + "/count-active")
            .then((res) => {
                setActiveCount(res.data)
            })
        const getInactiveCount = axios.get("http://localhost:8080/posts/" + category + "/count-inactive")
            .then((res) => {
                setInactiveCount(res.data)
            })
            const getList = axios.get("http://localhost:8080/posts/get-list/" + category + "/" + (page - 1))
            .then((res) => {
                res.data.map((item, index) => {
                    item.id = item.post_id
                    item.thumbnail = item.post_img
                    item.title = item.post_title
                    item.subtitle = item.post_subtitle
                    if (item.post_status == "enabled")
                        item.active = true
                    else
                        item.active = false
                    item = { item: (delete item['post_id'], delete item['post_img'], delete item['post_status'], delete item['post_title'],  delete item['post_subtitle'], item) };
                })
                setPostData(res.data)
            })
    }, [])

    const handlePageClick = (event) => {
        navigate("/workplace/post-management/" + category + "/" + (event.selected + 1))
        navigate(0)
    }
    const onCategoryChange = (event) => {
        navigate("/workplace/post-management/" + event.currentTarget.attributes.getNamedItem("value").value + "/1")
        navigate(0)
    }
    const onPageTextChange = (e) => {
        if (e.key === 'Enter')
            if (e.target.value <= pageCount && e.target.value >= 1 && e.target.value != e.target.defaultValue) {
                navigate("/workplace/post-management/" + category + "/" + (e.target.value))
                navigate(0)
            }
    }

    const onCreateClick = () => {
        navigate("/workplace/post-management/post-create")
    }
    const onViewClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        navigate(`/workplace/post-management/post-view/${id}`)
    }
    const onUpdateClick = (e) => {
        const id = e.currentTarget.attributes.getNamedItem("value").value
        navigate(`/workplace/post-management/post-update/${id}`)
    }
    const renderPostManagement = () => {
        return (
            <div className='post-man-body'>
                <WorkplaceList
                    listName="post-management"
                    fieldFormat={postListFormat}
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
                    data={postData}
                    openAction={onViewClick}
                    editAction={onUpdateClick}
                    onCreateClick={onCreateClick}
                    onCategoryChange={onCategoryChange}
                    handlePageClick={handlePageClick}
                    forcePage={parseInt(page) - 1}
                    pageCount={pageCount}
                    onPageTextChange={onPageTextChange}
                ></WorkplaceList>
            </div>
        )
    }

    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý bài viết"
                renderBody={renderPostManagement()}
                toolbar
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default PostManagement;