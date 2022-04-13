import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'

import Ielts from './Ielts/Ielts'
import Toeic from './Toeic/Toeic'
import EngForAdults from './EngForAdults/EngForAdults'
import EngForChildren from './EngForChildren/EngForChildren'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'

export default function CourseHolder(props) {
    let {courseType} = useParams();
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
                courseType=="IELTS"?
                <Ielts></Ielts>
                :
                courseType=="TOEIC"?
                <Toeic></Toeic>
                :
                courseType=="english-for-speaking"?
                <EngForAdults></EngForAdults>
                :
                <EngForChildren></EngForChildren>
            }
        </Fragment>
    )
}