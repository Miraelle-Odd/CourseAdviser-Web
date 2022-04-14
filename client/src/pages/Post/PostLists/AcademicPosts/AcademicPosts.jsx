import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './AcademicPosts.css'
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
export default function AcademicPosts(props) {
    const [listOfAcademic, setListOfAcademic] = useState([])
    useEffect(() => {
        const getListAcademics = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Academic/Top2")
            setListOfAcademic(result.data)
        }
        getListAcademics().catch(console.error)
    }, [])
    console.log("list-academic", listOfAcademic)
    return (
        <Fragment>
            <div className='post-list-padding-top'>
                <PostSpecialLayout
                    type="blue"
                    listItem={listOfAcademic}
                    description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                    title="academic posts"
                    icon={['fas', 'graduation-cap']}
                    link="/main-post/academic-posts/1">
                </PostSpecialLayout>
            </div>
            <PostListLayout
                category="academic-posts"
                img={TKB_HK2}
                items={postListItem}>
            </PostListLayout>

            <Footer> </Footer>
        </Fragment>
    )
}