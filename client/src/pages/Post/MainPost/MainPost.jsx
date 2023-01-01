import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MainPost.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../components/Footer/Footer'
import PostSliderLayout from '../../../components/LayoutComponents/PostPage/PostSliderLayout'
import PostSpecialLayout from '../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import FloatBtn from '../../../components/ButtonComponents/FloatBtn'

export default function MainPost(props) {
    const [listOfAcademic, setListOfAcademic] = useState([])
    const [listOfEvent, setListOfEvent] = useState([])
    const [listOfDiscount, setListOfDiscount] = useState([])
    const [listOfSlider, setListOfSlider] =useState([])

    useEffect(() => {
        const getListAcademics = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Academic/Top2")
            setListOfAcademic(result.data)
        }
        getListAcademics().catch(console.error)

        const getListEvents = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Event/Top2")
            setListOfEvent(result.data)
        }
        getListEvents().catch(console.error)

        const getListDiscount = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Discount/Top2")
            setListOfDiscount(result.data)
        }
        getListDiscount().catch(console.error)

        const getListSlider = async () => {
            await axios.get("http://localhost:8080/Posts/all/top5")
            .then(async(res)=>{
                await res.data.map((item, index)=>{
                    item.link="/main-post/" + item.post_type + "/post-details/" + item.post_id
                })
                setListOfSlider(res.data)
            })  
        }
        getListSlider().catch(console.error)
        
    }, [])

    return (
        <Fragment>
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
            <PostSliderLayout
                items={listOfSlider}
            > </PostSliderLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfAcademic}
                description="Bộ sưu tầm các bài viết học thuật hay nhất từ trung tâm phục vụ cho quá trình học tập của các học viên nè. Còn chờ gì nữa mà không DIVE IN nào các bạn ơi!"
                title="bài viết học thuật"
                icon={['fas', 'graduation-cap']}
                link="/main-post/academic/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="origin"
                listItem={listOfEvent}
                description="Tổng hợp các sự kiện đặc sắc đã và đang diễn ra tại trung tâm. Đây là cơ hội để các học viên và giáo viên giao lưu và phát triển kỹ năng thực tế. Mọi người cùng vào chung vui nhé!"
                title="sự kiện đặc biệt"
                icon={['fas', 'star']}
                link="/main-post/event/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfDiscount}
                description="Trung tâm đang tổ chức rất nhiều các chương trình khuyến mãi phục vụ cho con đường học vấn của mọi người đây. Còn chờ gì mà không tham khảo?"
                title="khuyến mãi"
                icon={['fas', 'piggy-bank']}
                link="/main-post/discount/1">
            </PostSpecialLayout>

            <Footer></Footer>
        </Fragment>
    )
}