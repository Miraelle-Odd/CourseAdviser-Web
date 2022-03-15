import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './MainPost.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../components/Footer/Footer'
import paimon from '../../../assets/icons/staff-img.png'
import PostSliderLayout from '../../../components/LayoutComponents/PostPage/PostSliderLayout'
import PostSpecialLayout from '../../../components/LayoutComponents/PostPage/PostSpecialLayout'
const postSpecialBtn = [
    {
        id: "1",
        img: paimon,
        title: "Btn Title 1",
        context: "Subtitle cds sdsd dsds dsdsd max 3 lines .ddddddddddddddddd..",
        datetime: "DD-MM-YYYY - hh:mm:ss",
        author: "NA",
    },
    {
        id: "2",
        img: paimon,
        title: "Btn Title 1",
        context: "Subtitle cds sdsd dsds dsdsd max 3 lines .ddddddddddddddddd..",
        datetime: "DD-MM-YYYY - hh:mm:ss",
        author: "NA",
    }
]
export default function MainPost(props) {

    return (
        <Fragment>

            <PostSliderLayout> </PostSliderLayout>

            <PostSpecialLayout
                category="academic-posts"
                type="blue"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="academic posts"
                icon={['fas', 'graduation-cap']}
                link="/main-post/academic-posts">
            </PostSpecialLayout>

            <PostSpecialLayout
                category="special-events"
                type="origin"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="special events"
                icon={['fas', 'star']}
                link="/main-post/special-events">
            </PostSpecialLayout>

            <PostSpecialLayout
                category="discounts"
                type="blue"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="discounts"
                icon={['fas', 'piggy-bank']}
                link="/main-post/discounts">
            </PostSpecialLayout>

            <Footer></Footer>
        </Fragment>
    )
}