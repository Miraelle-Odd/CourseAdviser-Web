import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './SpecialEvents.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../../components/Footer/Footer'
import PostSpecialLayout from '../../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostListLayout from '../../../../components/LayoutComponents/PostPage/PostListLayout'
import TKB_HK2 from '../../../../assets/icons/TKB_HK2.PNG'
const postListItem = [
    {
        id: "1",
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
    {
        id: "2",
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
    {
        id: "3",
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
]
export default function SpecialEvents(props) {
    const [listOfEvent, setListOfEvent] = useState([])
    useEffect(() => {
        const getListEvents = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Event/Top2")
            setListOfEvent(result.data)
        }
        getListEvents().catch(console.error)
    }, [])
    console.log("list-event", listOfEvent)
    return (
        <Fragment>
            <div className='post-list-padding-top'>
                <PostSpecialLayout
                    category="special-events"
                    type="origin"
                    listItem={listOfEvent}
                    description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                    title="special events"
                    icon={['fas', 'star']}>
                </PostSpecialLayout>
            </div>
            <PostListLayout
                category="special-events"
                typeblue={true}
                items={postListItem}>
            </PostListLayout>
            <Footer></Footer>
        </Fragment>
    )
}