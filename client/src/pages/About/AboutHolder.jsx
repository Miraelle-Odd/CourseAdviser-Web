import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'
import AboutUs from './AboutUs/AboutUs'
import AboutStaff from './AboutStaff/AboutStaff'
import Contact from './Contact/Contact'

import FloatBtn from '../../components/ButtonComponents/FloatBtn'

import QaLayout from '../../components/LayoutComponents/QaPage/QaLayout'


export default function AboutHolder(props) {
    let {aboutType} = useParams();
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
                aboutType=="us"?
                <AboutUs></AboutUs>
                :
                aboutType=="staff"?
                <AboutStaff></AboutStaff>
                :
                aboutType=="qa"?
                <QaLayout></QaLayout>
                :
                <Contact></Contact>
            }
        </Fragment>
    )
}