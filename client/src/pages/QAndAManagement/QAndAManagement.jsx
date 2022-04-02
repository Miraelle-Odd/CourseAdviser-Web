import React from 'react'
import './QAndAManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'

const onOpenClickHandle = () => {
    alert("Open Sesame")

}

const onEditClickHandle = () => {
    alert("Edit Sesame")
}

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

const qaData = [
    {
        question: "Question blabh XXX XXX XXXXX XXX XXXXX XXX XX",
        answer: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX...."
    }
]

const lcItems = [
    {
        display: "Tất cả",
        awesomeIcon: ['fas', 'address-card'],
        link: "/workplace/q-and-a-management/all/1"
    },
    {
        display: "Trung tâm",
        awesomeIcon: ['fas', 'school'],
        link: "/workplace/q-and-a-management/about-center/1"

    },
    {
        display: "Khóa học",
        awesomeIcon: ['fas', 'book'],
        link: "/workplace/q-and-a-management/about-courses/1"

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

const renderQAndAManagement = () => {
    return(
        <div className='qa-man-body'>
                <WorkplaceList
                    listName="q-and-a-management"
                    fieldFormat={qaListFormat}
                    data={qaData}
                    categoryItems={lcItems}
                    statisticItems={statisticItems}
                    openAction={onOpenClickHandle}
                    editAction={onEditClickHandle}
                ></WorkplaceList>
            </div>
    )
}
const QAndAManagement = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý Q & A" toolbar
                renderBody={renderQAndAManagement()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default QAndAManagement;