import React, { useRef, useEffect, useState } from 'react'
import './Home.css'
import "../../index.css"

import HomeIntroLayout from '../../components/LayoutComponents/HomePage/HomeIntroLayout'
import HomeWhyLayout from '../../components/LayoutComponents/HomePage/HomeWhyLayout'
import AppoinmentLayout from '../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import HomeCourseLayout from '../../components/LayoutComponents/HomePage/HomeCourseLayout'
import Footer from '../../components/Footer/Footer'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'
import RightMenu from '../../components/TestExam/RightMenu/RightMenu'
import SelectItem from '../../components/TestExam/MenuItem/SelectItem'
import SubmitBtn from '../../components/TestExam/RightMenu/SubmitBtn'
import ExamFooter from '../../components/TestExam/OuterComponents/ExamFooter'
import ExamHeader from '../../components/TestExam/OuterComponents/ExamHeader'
import ExamSubHeader from '../../components/TestExam/OuterComponents/ExamSubHeader'
import ListeningDirection from '../../components/TestExam/DirectionsBanner/ListeningDirection'
import ReadingDirection from '../../components/TestExam/DirectionsBanner/ReadingDirection'
import IntroBanner from '../../components/TestExam/DirectionsBanner/IntroBanner'
import SingleSection from '../../components/TestExam/QuestionComponents/SingleSection'
import MixSection from '../../components/TestExam/QuestionComponents/MixSection'

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
            <RightMenu></RightMenu>
            <SubmitBtn></SubmitBtn>
            <div className='text-bg'>
            <ExamHeader></ExamHeader>
            <div className='right-menu-line'></div>
            <ExamSubHeader></ExamSubHeader>
            <div className='right-menu-line'></div>
            <ExamFooter></ExamFooter>
            <div className='right-menu-line'></div>
            <ListeningDirection></ListeningDirection>
            <div className='right-menu-line'></div>
            <ReadingDirection></ReadingDirection>
            <div className='right-menu-line'></div>
            <IntroBanner></IntroBanner>
            <div className='right-menu-line'></div>
            <SingleSection></SingleSection>
            <div className='right-menu-line'></div>
            <MixSection></MixSection>
            </div>
        </div>
        
    )
    
}

export default Home