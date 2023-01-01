import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './SpecialEvents.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../../components/Footer/Footer'
import PostSpecialLayout from '../../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostListLayout from '../../../../components/LayoutComponents/PostPage/PostListLayout'
import TKB_HK2 from '../../../../assets/icons/TKB_HK2.PNG'

export default function SpecialEvents(props) {
    const [listOfEvent, setListOfEvent] = useState([])
    const [listOfCount, setListOfCount] = useState([])
    useEffect(() => {
        const getListEvents = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Event/Top2")
            setListOfEvent(result.data)
        }
        getListEvents().catch(console.error)

        const getListCount = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Event/Count-active")
            setListOfCount(result.data)
        }
        getListCount().catch(console.error)
    }, [])
    console.log("list-event", listOfCount)
    return (
        <Fragment>
            <div className='post-list-padding-top'>
                <PostSpecialLayout
                    category="special-events"
                    type="origin"
                    listItem={listOfEvent}
                    description="Tổng hợp các sự kiện đặc sắc đã và đang diễn ra tại trung tâm. Đây là cơ hội để các học viên và giáo viên giao lưu và phát triển kỹ năng thực tế. Mọi người cùng vào chung vui nhé!"
                    title="sự kiện đặc biệt"
                    icon={['fas', 'star']}>
                </PostSpecialLayout>
            </div>
            <PostListLayout
                category="event"
                typeblue={true}
                count={listOfCount}>
            </PostListLayout>
            <Footer></Footer>
        </Fragment>
    )
}