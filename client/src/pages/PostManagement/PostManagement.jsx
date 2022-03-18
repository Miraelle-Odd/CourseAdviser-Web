import React from 'react'
import './PostManagement.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
const renderPostManagement = () => {
    return(
        <div>Đây là Post Man</div>
    )
}
const PostManagement = props => {
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý bài viết"
                renderBody={renderPostManagement()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default PostManagement;