import React from 'react'
import './ChatbotManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'

const renderBotManagement = () => {
    return(
        <div>Đây là Bot Man</div>
    )
}

const ChatbotManagement = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý Chatbot" toolbar
                renderBody={renderBotManagement()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default ChatbotManagement;