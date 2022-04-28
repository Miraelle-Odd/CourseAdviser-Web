import React, { useEffect, useState } from 'react'
import './PostView.css'
import Footer from '../../../components/Footer/Footer'
import WorkplaceLayout from '../../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplacePostUpdate from '../../../components/LayoutComponents/WorkplacePage/PostDetails/WorkplacePostUpdate'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'



const PostUpdate = props => {
    let { id } = useParams();

    const [postDetail, setPostDetail] = useState();

    useEffect(() => {
        const getPostDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Posts/Post-detail/${id}`)
                .then((res) => {
                    if (res.data[0] != null) {
                        if (res.data[0].post_type == "academic")
                            res.data[0].post_type = 0
                        if (res.data[0].post_type == "event")
                            res.data[0].post_type = 1
                        if (res.data[0].post_type == "discount")
                            res.data[0].post_type = 2

                        if (res.data[0].post_status == "enabled")
                            res.data[0].post_status = true
                        if (res.data[0].post_status == "disabled")
                            res.data[0].post_status = false
                        console.log(res.data)
                        setPostDetail(res.data[0])
                    }

                })

        }
        getPostDetail().catch(console.error)
    }, [])
    console.log(postDetail)



    const renderPostUpdate = () => {
        return (
            <div className='post-man-body'>
                {
                    <WorkplacePostUpdate
                        id={postDetail ? postDetail.post_id : null}
                        title={postDetail ? postDetail.post_title : null}
                        subtitle={postDetail ? postDetail.post_subtitle : null}
                        content={postDetail ? postDetail.post_content : null}
                        name={postDetail ? postDetail.name : null}
                        date={postDetail ? moment(postDetail.updatedAt).format("YYYY-MM-DD hh-mm A") : null}
                        img={postDetail ? postDetail.post_img : null}
                        active={postDetail ? postDetail.post_status : null}
                        type={postDetail ? postDetail.post_type : null}
                    ></WorkplacePostUpdate>
                }

            </div>
        )
    }

    return (
        <div className='userpage-container'>
            <WorkplaceLayout title="Quản lý bài viết"
                renderBody={renderPostUpdate(id)}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default PostUpdate;