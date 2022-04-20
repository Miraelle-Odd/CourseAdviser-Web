import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'
import AcademicPosts from './AcademicPosts/AcademicPosts'
import SpecialEvents from './SpecialEvents/SpecialEvents'
import Discounts from './Discounts/Discounts'
import FloatBtn from '../../../components/ButtonComponents/FloatBtn'

export default function ListHolder(props) {
    let {postType} = useParams();
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
            {
                postType=="academic"?
                <AcademicPosts></AcademicPosts>
                :
                postType=="event"?
                <SpecialEvents></SpecialEvents>
                :
                <Discounts></Discounts>
            }
        </Fragment>
    )
}