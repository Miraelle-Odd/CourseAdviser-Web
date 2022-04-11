import React from 'react'
import './PostManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import thumb1 from "../../assets/icons/draft.png"
import { useNavigate } from 'react-router-dom'

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
        link: "/workplace/post-management/all/1"
    },
    {
        display: "Học thuật",
        awesomeIcon: ['fas', 'graduation-cap'],
        link: "/workplace/post-management/academic-posts/1"

    },
    {
        display: "Sự kiện",
        awesomeIcon: ['fas', 'star'],
        link: "/workplace/post-management/special-events/1"

    },
    {
        display: "Khuyến mãi",
        awesomeIcon: ['fas', 'piggy-bank'],
        link: "/workplace/post-management/discount/1"

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

const postData = [
    {
        thumbnail: "",
        title: "Post Title Blah 1",
        subtitle: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
        active: true
    },
    {
        thumbnail: thumb1,
        title: "Post Title Blah 2",
        subtitle: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
        active: false
    },
    {
        thumbnail: "",
        title: "Post Title Blah 3",
        subtitle: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
        active: true
    },
    {
        thumbnail: thumb1,
        title: "Post Title Blah 4",
        subtitle: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
        active: false
    },
    {
        thumbnail: thumb1,
        title: "Post Title Blah 5",
        subtitle: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
        active: false
    },
]


const PostManagement = props => {
    let navigate = useNavigate()
    const onCreateClick = () => {
        navigate("/workplace/post-management/post-create")
    }
    const onViewClick = () => {
        navigate("/workplace/post-management/post-view")
    }
    const onUpdateClick = () => {
        navigate("/workplace/post-management/post-update/1")
    }
    const renderPostManagement = () => {
        return (
            <div className='post-man-body'>
                <WorkplaceList
                    listName="post-management"
                    fieldFormat={postListFormat}
                    categoryItems={lcItems}
                    statisticItems={statisticItems}
                    data={postData}
                    openAction={onViewClick}
                    editAction={onUpdateClick}
                    onCreateClick={onCreateClick}
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