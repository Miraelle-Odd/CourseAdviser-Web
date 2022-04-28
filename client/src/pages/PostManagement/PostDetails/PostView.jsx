import React, { useEffect, useState } from 'react'
import './PostView.css'
import Footer from '../../../components/Footer/Footer'
import WorkplaceLayout from '../../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplaceStatistic from '../../../components/ListComponents/WorkplaceStatistic'
import WorkplaceList from '../../../components/ListComponents/WorkplaceList'
import WorkplacePostView from '../../../components/LayoutComponents/WorkplacePage/PostDetails/WorkplacePostView'
import TKB_HK2 from '../../../assets/icons/TKB_HK2.PNG'
import StatusSwitch from '../../../components/SwitchComponents/WorkplacePage/StatusSwitch'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const PostView = props => {
    let navigate = useNavigate()
    let {id} = useParams();

    const onUpdateClick = () => {
        navigate(`/workplace/post-management/post-update/${id}`)
    }

    const [postDetail, setPostDetail] = useState();

    useEffect(()=> {
        const getPostDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Posts/Post-detail/${id}`)
            setPostDetail(result.data[0])
        }
        getPostDetail().catch(console.error)
    }, [])

    const statisticItems = [
        {
            fieldName: "Chủ đề",
            fieldValue: postDetail ? postDetail.post_type : "Học thuật"
        },
        {
            fieldName: "Tác giả",
            fieldValue: postDetail ? postDetail.name : "AAAA AAA AA"
        },
        {
            fieldName: "Ngày đăng",
            fieldValue: postDetail ? moment(postDetail.updatedAt).format("YYYY-MM-DD hh-mm A") : "YYYY-MM-DD hh-mm A"
        },
        {
            fieldName: "Trạng thái",
            fieldValue: <StatusSwitch on={postDetail ? postDetail.post_status == 'enabled' ? true : false : true} onClick={()=>{}}></StatusSwitch>
        }
    ]

    const renderPostView = () => {
        return (
            <div className='post-man-body'>
                <WorkplacePostView
                    statisticItems = {statisticItems}
                    content={postDetail ? postDetail.post_content : "aa"}
                    subtitle={postDetail ? postDetail.post_subtitle : "aa"}
                    title= {postDetail ? postDetail.post_title : "aa"}
                    img={postDetail ? postDetail.post_img : "aa"}
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