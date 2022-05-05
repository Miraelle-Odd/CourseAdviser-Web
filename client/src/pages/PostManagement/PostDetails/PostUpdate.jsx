import React, { useEffect, useState } from 'react'
import './PostView.css'
import Footer from '../../../components/Footer/Footer'
import WorkplaceLayout from '../../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import WorkplacePostUpdate from '../../../components/LayoutComponents/WorkplacePage/PostDetails/WorkplacePostUpdate'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

const PostUpdate = props => {
    let { id } = useParams();

    const [postDetail, setPostDetail] = useState();
    const [currentUser, setCurrentUser] = useState();
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
                        setPostDetail(res.data[0])
                    }

                })

        }
        getPostDetail().catch(console.error)

        var cookie_result = null
        var currentUser_Id = null
        if (cookies.get('accessToken')) {
            cookie_result = jwt_decode(cookies.get('accessToken'))
            currentUser_Id = cookie_result.account.account_id
        }

        const getUserById = async () => {
            const result = await axios.get(`http://localhost:8080/Personal_infos/${currentUser_Id}`)
                .then((res) => {
                    if (res.data[0] != null) {
                        setCurrentUser(res.data[0])
                    }
                })
        }
        getUserById().catch(console.error)
    }, [])




    const renderPostUpdate = () => {
        return (
            <div className='post-man-body'>
                {
                    <WorkplacePostUpdate
                        id={postDetail ? postDetail.post_id : null}
                        title={postDetail ? postDetail.post_title : null}
                        subtitle={postDetail ? postDetail.post_subtitle : null}
                        content={postDetail ? postDetail.post_content : null}
                        author_id={currentUser ? currentUser.account_id : null}
                        name={postDetail ? postDetail.name : currentUser ? currentUser.name : null}
                        date={postDetail ? moment(postDetail.updatedAt).format("YYYY-MM-DD hh-mm A") : moment().format("YYYY-MM-DD hh-mm A")}
                        img={postDetail ? postDetail.post_img : null}
                        active={postDetail ? postDetail.post_status : true}
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