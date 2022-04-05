import React, { useState, useEffect } from 'react'
import './QaManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceList from '../../components/ListComponents/WorkplaceList'
import Modal from 'react-modal';
import CreateQa from '../../components/PopupComponents/CreateQa/CreateQa'
import UpdateQa from '../../components/PopupComponents/UpdateQa/UpdateQa'

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


const QaManagement = props => {
    const [isShowCreate, setIsShowCreate] = useState(false);
    const [isShowUpdate, setIsShowUpdate] = useState(false);

    const onCreateClick = () => {
        setIsShowCreate(true);
    }
    const onUpdateClick = () => {
        setIsShowUpdate(true);
    }
    const handleFormClose = () => {
        setIsShowCreate(false);
        setIsShowUpdate(false);
    }

    const renderQaManagement = () => {
        return(
            <div className='qa-man-body'>
                    <WorkplaceList
                        listName="q-and-a-management"
                        fieldFormat={qaListFormat}
                        data={qaData}
                        categoryItems={lcItems}
                        statisticItems={statisticItems}
                        openAction={onOpenClickHandle}
                        editAction={onUpdateClick}
                        onCreateClick={onCreateClick}
                    ></WorkplaceList>
                </div>
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý Q & A" toolbar
                renderBody={renderQaManagement()}
            ></WorkplaceLayout>
            <Footer></Footer>
            <Modal
                isOpen={isShowCreate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}>
                <CreateQa
                    handleFormClose={() => handleFormClose()}>
                </CreateQa>
            </Modal>
            <Modal
                isOpen={isShowUpdate}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}>
                <UpdateQa
                    handleFormClose={() => handleFormClose()}>
                </UpdateQa>
            </Modal>
        </div>
    )
}

export default QaManagement;