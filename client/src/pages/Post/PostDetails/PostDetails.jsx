import React from 'react'
import './PostDetails.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostDetailsCard from '../../../components/CardComponents/PostDetailsPage/PostDetailCard'
import PostRightMenu from '../../../components/RightMenu/PostRightMenu'
import Footer from '../../../components/Footer/Footer'
import { useNavigate, useParams } from "react-router-dom";
import FloatBtn from '../../../components/ButtonComponents/FloatBtn';

const latestPosts = [
    {
        postId: "1",
        title: "Post Title AAAA",
        subtitle: "Post Subtitle Post Subtitle Post Subtitle Post Subtitle   aaa aaaa",
        author: "Post Author",
        uploadTime: "DD/MM/YYYY - hh:mm:ss - hh:mm:ss",
        thumbnail: ""
    },
    {
        postId: "2",
        title: "Post Title",
        subtitle: "Post Subtitle",
        author: "Post Author",
        uploadTime: "DD/MM/YYYY - hh:mm:ss",
        thumbnail: ""
    }
]



const PostDetails = props => {
    let navigate = useNavigate();
    let { postType } = useParams();
    return (
        <div>
            <div className='float-btn-container'>
                <FloatBtn
                    link="/about/contact"
                    icon="calendar-check"
                    name="Đặt lịch tư vấn"
                ></FloatBtn>

                <FloatBtn
                    chatbot
                    icon="robot"
                    name="Chatbot tư vấn"
                ></FloatBtn>
            </div>
            <div className='post-details-bg'>
                <div className='decoration'>
                    <div className='post-details-container'>
                        <div className='post-details-main'>
                            <div className='back-bar' onClick={() => navigate(-1)}>
                                <div className='back-icon'><FontAwesomeIcon icon={['fas', 'arrow-left']}></FontAwesomeIcon></div>
                                <span>Trở về</span>
                            </div>
                            <PostDetailsCard></PostDetailsCard>
                        </div>
                        <PostRightMenu
                            items={latestPosts}
                        ></PostRightMenu>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default PostDetails;