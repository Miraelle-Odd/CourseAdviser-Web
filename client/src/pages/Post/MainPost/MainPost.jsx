import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MainPost.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../components/Footer/Footer'
import paimon from '../../../assets/icons/staff-img.png'
import PostSliderLayout from '../../../components/LayoutComponents/PostPage/PostSliderLayout'
import PostSpecialLayout from '../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import FloatBtn from '../../../components/ButtonComponents/FloatBtn'

export default function MainPost(props) {
    const [listOfAcademic, setListOfAcademic] = useState([])
    const [listOfEvent, setListOfEvent] = useState([])
    const [listOfDiscount, setListOfDiscount] = useState([])
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
    }, [])

    console.log("academic", listOfAcademic)
    console.log("event", listOfEvent)
    console.log("discount", listOfDiscount)
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
            <PostSliderLayout> </PostSliderLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfAcademic}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="academic posts"
                icon={['fas', 'graduation-cap']}
                link="/main-post/academic-posts/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="origin"
                listItem={listOfEvent}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="special events"
                icon={['fas', 'star']}
                link="/main-post/special-events/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfDiscount}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="discounts"
                icon={['fas', 'piggy-bank']}
                link="/main-post/discounts/1">
            </PostSpecialLayout>

            <Footer></Footer>
        </Fragment>
    )
}