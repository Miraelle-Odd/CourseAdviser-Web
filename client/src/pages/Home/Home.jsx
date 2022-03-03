import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import "../../index.css"

import DraftCom from '../../components/DraftComponent/DraftCom'
import HomeIntroLayout from '../../components/LayoutComponents/HomePage/HomeIntroLayout'
import LearnBtn from '../../components/ButtonComponents/LearnBtn'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'
import ParallelogramBtn from '../../components/ButtonComponents/HomePage/ParallelogramBtn'
import HomeWhyLayout from '../../components/LayoutComponents/HomePage/HomeWhyLayout'
import FacilityCard_Img from '../../components/CardComponents/AboutPage/FacilityCard_Img'
import AboutVisionLayout from '../../components/LayoutComponents/AboutPage/AboutVisionLayout'
import AboutArchiLayout from '../../components/LayoutComponents/AboutPage/AboutArchiLayout'
import AboutWhyLayout from '../../components/LayoutComponents/AboutPage/AboutWhyLayout'
import AboutFeedbackLayout from '../../components/LayoutComponents/AboutPage/AboutFeedbackLayout'
import AppoinmentLayout from '../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import LocationLayout from '../../components/LayoutComponents/AboutPage/LocationLayout'
import MethodLayout from '../../components/LayoutComponents/AboutPage/MethodLayout'

import calendar from '../../assets/icons/calendar-check.png'
import ielts_img from '../../assets/icons/course-ielts.png'
import TKB_HK2 from '../../assets/icons/TKB_HK2.PNG'
import HomeCourseLayout from '../../components/LayoutComponents/HomePage/HomeCourseLayout'
import Footer from '../../components/LayoutComponents/Footer/Footer'
import AboutCenterLayout from '../../components/LayoutComponents/AboutPage/AboutCenterLayout'
import AboutIntroLayout from '../../components/LayoutComponents/AboutPage/AboutIntroLayout'
import StaffCard from '../../components/CardComponents/StaffPage/StaffCard'

import paimon from '../../assets/icons/staff-img.png'
import StaffManagerLayout from '../../components/LayoutComponents/StaffPage/StaffManagerLayout'
import StaffEmployeeLayout from '../../components/LayoutComponents/StaffPage/StaffEmployeeLayout'
import StaffTeacherLayout from '../../components/LayoutComponents/StaffPage/StaffTeacherLayout'


const Home = props => {
    const [listOfTest, setListOfTest] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/tests").then((response) => {
            setListOfTest(response.data)
        })
    }, [])
    return (
        <div className='home'>
            <div>Đây là Homepage</div>
            <HomeIntroLayout> </HomeIntroLayout>

            <HomeCourseLayout> </HomeCourseLayout>

            <HomeWhyLayout> </HomeWhyLayout>

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer> </Footer>

            <AboutIntroLayout> </AboutIntroLayout>
            
            <AboutVisionLayout> </AboutVisionLayout>
            
            <MethodLayout> </MethodLayout>

            <AboutCenterLayout> </AboutCenterLayout>

            <AboutArchiLayout> </AboutArchiLayout>

            <AboutWhyLayout> </AboutWhyLayout>

            <AboutFeedbackLayout> </AboutFeedbackLayout>

            <StaffManagerLayout> </StaffManagerLayout>

            <StaffEmployeeLayout> </StaffEmployeeLayout>

            <StaffTeacherLayout> </StaffTeacherLayout>

            <LearnBtn
                name="Learn more">
            </LearnBtn>
            <FloatBtn
                icon={calendar}
                name={"Đặt lịch tư vấn"}>
            </FloatBtn>
            <h2>Dưới đây là test get từ db</h2>
            {
                listOfTest.map((value, key) => {
                    return <DraftCom
                        title={value.title}
                        content={value.text}
                    ></DraftCom>
                })
            }
        </div>
    )
}

export default Home