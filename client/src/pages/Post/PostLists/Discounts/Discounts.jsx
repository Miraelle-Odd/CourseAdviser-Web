import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Discounts.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../../components/Footer/Footer'
import PostSpecialLayout from '../../../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostListLayout from '../../../../components/LayoutComponents/PostPage/PostListLayout'
import TKB_HK2 from '../../../../assets/icons/TKB_HK2.PNG'

export default function Discounts(props) {
    const [listOfDiscount, setListOfDiscount] = useState([])
    const [listOfCount, setListOfCount] = useState([])
    useEffect(() => {
        const getListDiscount = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Discount/Top2")
            setListOfDiscount(result.data)
        }
        getListDiscount().catch(console.error)

        const getListCount = async () => {
            const result = await axios.get("http://localhost:8080/Posts/Discount/Count")
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
                    listItem={listOfDiscount}
                    description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                    title="discounts"
                    icon={['fas', 'piggy-bank']}>
                </PostSpecialLayout>
            </div>
            <PostListLayout
                category="discount"
                img={TKB_HK2}
                count={listOfCount}>
            </PostListLayout>

            <Footer> </Footer>
        </Fragment>
    )
}