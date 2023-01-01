import React, { useEffect } from 'react'
import './PostDetails.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostDetailsCard from '../../../components/CardComponents/PostDetailsPage/PostDetailCard'
import PostRightMenu from '../../../components/RightMenu/PostRightMenu'
import Footer from '../../../components/Footer/Footer'
import { useNavigate, useParams } from "react-router-dom";
import FloatBtn from '../../../components/ButtonComponents/FloatBtn';
import axios from 'axios'

const PostDetails = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const [itemDetail, setItemDetail] = useState([])
    const [listOfTop5, setListOfTop5] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const getItemDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Posts/Post-Detail/${id}`)
            setItemDetail(result.data)
        }
        getItemDetail().catch(console.error)

        const getListTop5 = async () => {
            const result = await axios.get(`http://localhost:8080/Posts/All/Top5`)
            .then((res)=>{
                res.data.map((item, index)=>{
                    item.category = item.post_type
                })
                setListOfTop5(res.data)
            })
            
        }
        getListTop5().catch(console.error)
    }, [])
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
                            {
                   
                                itemDetail[0] ?
                                    <PostDetailsCard
                                        title={itemDetail[0].post_title}
                                        subtitle={itemDetail[0].post_type}
                                        author={itemDetail[0].name}
                                        uploadTime={itemDetail[0].updatedAt}
                                        thumbnail={itemDetail[0].post_img}
                                        content={itemDetail[0].post_content}
                                    ></PostDetailsCard>
                                    :
                                    <PostDetailsCard></PostDetailsCard>
                            }

                        </div>
                        <PostRightMenu
                            items={listOfTop5}
                        ></PostRightMenu>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default PostDetails;