import React from 'react'
import './PostView.css'
import Footer from '../../../components/Footer/Footer'
import WorkplaceLayout from '../../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceStatistic from '../../../components/ListComponents/WorkplaceStatistic'
import WorkplaceList from '../../../components/ListComponents/WorkplaceList'
import WorkplacePostView from '../../../components/LayoutComponents/WorkplacePage/PostDetails/WorkplacePostView'
import TKB_HK2 from '../../../assets/icons/TKB_HK2.PNG'
import StatusSwitch from '../../../components/SwitchComponents/WorkplacePage/StatusSwitch'
import { useNavigate } from 'react-router-dom'
const statisticItems = [
    {
        fieldName: "Chủ đề",
        fieldValue: "Học thuật"
    },
    {
        fieldName: "Tác giả",
        fieldValue: "Nguyễn Văn A"
    },
    {
        fieldName: "Ngày đăng",
        fieldValue: "DD/MM/YYYY"
    },
    {
        fieldName: "Trạng thái",
        fieldValue: <StatusSwitch on={true} onClick={()=>{}}></StatusSwitch>
    }
]


const PostView = props => {
    let navigate = useNavigate()
    const onUpdateClick = () => {
        navigate("/workplace/post-management/post-create")
    }
    const renderPostView = () => {
        return (
            <div className='post-man-body'>
                <WorkplacePostView
                    statisticItems = {statisticItems}
                    content="Đây là nội dung balha .........  BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhs AAA XXXXXXX hdh BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdĐây là nội dung balha .........  BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhs AAA XXXXXXX hdh BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdĐây là nội dung balha .........  BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhs AAA XXXXXXX hdh BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdĐây là nội dung balha .........  BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhs AAA XXXXXXX hdh BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdĐây là nội dung balha .........  BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhs AAA XXXXXXX hdh BBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsdBBBB AAA XXXXXXX hdhashdhsd"
                    subtitle="Tiêu đề phụblah blah blah XXXX XXXXX XXXXXXX  XXXX Chỉ cho scroll ở Nội dung dưới tiêu đề trong cái card chứa dòng này)"
                    title="Tiêu đề bài viết Dài 2 dòng đc nà blah blah aaaa aaaa aaa aaa aaa aaa aaa aaa aaa aaa aa aa aa a aa bb b bb bbbb bbbb bb b bb bbbb"
                    img={TKB_HK2}
                    onUpdateClick={onUpdateClick}           
                ></WorkplacePostView>
            </div>
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý bài viết"
                renderBody={renderPostView()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default PostView;