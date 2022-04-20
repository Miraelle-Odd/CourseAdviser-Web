import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './AcademicPosts.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../../components/Footer/Footer'
import PostSpecialLayout from '../../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostListLayout from '../../../../components/LayoutComponents/PostPage/PostListLayout'
import TKB_HK2 from '../../../../assets/icons/TKB_HK2.PNG'

export default function AcademicPosts(props) {
    const [listOfAcademic, setListOfAcademic] = useState([])
    const [listOfCount, setListOfCount] = useState([])
    useEffect(() => {
        const getListAcademics = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Academic/Top2")
            setListOfAcademic(result.data)
        }
        getListAcademics().catch(console.error)

        const getListCount = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Academic/Count")
            setListOfCount(result.data)
        }
        getListCount().catch(console.error)
    }, [])
    console.log("list-event", listOfCount)
    return (
        <Fragment>
            <div className='post-list-padding-top'>
                <PostSpecialLayout
                    type="blue"
                    listItem={listOfAcademic}
                    description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                    title="academic posts"
                    icon={['fas', 'graduation-cap']}>
                </PostSpecialLayout>
            </div>
            <PostListLayout
                category="academic"
                img={TKB_HK2}
                count={listOfCount}>
            </PostListLayout>

            <Footer> </Footer>
        </Fragment>
    )
}