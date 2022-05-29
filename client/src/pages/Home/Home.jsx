import React, { useRef, useEffect, useState } from 'react'
import './Home.css'
import "../../index.css"

import HomeIntroLayout from '../../components/LayoutComponents/HomePage/HomeIntroLayout'
import HomeWhyLayout from '../../components/LayoutComponents/HomePage/HomeWhyLayout'
import AppoinmentLayout from '../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import HomeCourseLayout from '../../components/LayoutComponents/HomePage/HomeCourseLayout'
import Footer from '../../components/Footer/Footer'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'

const Home = props => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    window.onload = function () {
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    }

    return (
        <div className='home'>
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
            <HomeIntroLayout> </HomeIntroLayout>

            <HomeCourseLayout> </HomeCourseLayout>

            <HomeWhyLayout> </HomeWhyLayout>

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>
        </div>
    )
}

export default Home