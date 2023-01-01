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
            const result = await axios.get("http://localhost:8080/Posts/Discount/Count-active")
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
                    description="Trung tâm đang tổ chức rất nhiều các chương trình khuyến mãi phục vụ cho con đường học vấn của mọi người đây. Còn chờ gì mà không tham khảo?"
                    title="khuyến mãi"
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