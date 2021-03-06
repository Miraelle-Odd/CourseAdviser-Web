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

    // console.log("academic", listOfAcademic)
    // console.log("event", listOfEvent)
    // console.log("discount", listOfDiscount)
    // console.log("slider", listOfSlider)
    
    return (
        <Fragment>
            <div className='float-btn-container'>
                <FloatBtn
                    link="/about/contact"
                    icon="calendar-check"
                    name="?????t l???ch t?? v???n"
                ></FloatBtn>

                <FloatBtn
                    chatbot
                    icon="robot"
                    name="Chatbot t?? v???n"
                ></FloatBtn>
            </div>
            <PostSliderLayout
                items={listOfSlider}
            > </PostSliderLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfAcademic}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="academic posts"
                icon={['fas', 'graduation-cap']}
                link="/main-post/academic/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="origin"
                listItem={listOfEvent}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="special events"
                icon={['fas', 'star']}
                link="/main-post/event/1">
            </PostSpecialLayout>

            <PostSpecialLayout
                type="blue"
                listItem={listOfDiscount}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="discounts"
                icon={['fas', 'piggy-bank']}
                link="/main-post/discount/1">
            </PostSpecialLayout>

            <Footer></Footer>
        </Fragment>
    )
}