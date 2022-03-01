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
import AboutVisonLayout from '../../components/LayoutComponents/AboutPage/AboutVisionLayout'
import AboutArchiLayout from '../../components/LayoutComponents/AboutPage/AboutArchiLayout'
import AboutWhyLayout from '../../components/LayoutComponents/AboutPage/AboutWhyLayout'
import AboutFeedbackLayout from '../../components/LayoutComponents/AboutPage/AboutFeedbackLayout'
import AppoinmentLayout from '../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import LocationLayout from '../../components/LayoutComponents/AboutPage/LocationLayout'
import MethodLayout from '../../components/LayoutComponents/AboutPage/MethodLayout'

import calendar from '../../assets/icons/calendar-check.png'
import ielts_img from '../../assets/icons/course_ielts.png'
import TKB_HK2 from '../../assets/icons/TKB_HK2.PNG'




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
            <LearnBtn
                name="Learn more">
            </LearnBtn>
            <FloatBtn
                icon={calendar}
                name={"Đặt lịch tư vấn"}>
            </FloatBtn>
            <ParallelogramBtn
                img={ielts_img}
                name="Luyện thi IELTS"
                des="test test test. Course luyen thi IELTS, test hover, test length text. Khoong biet vieets cai vao day het tron, lam sao de no dai ra day nhi, da da da da da daayyy gau gau bruh bruh meow">
            </ParallelogramBtn>

            <HomeWhyLayout> </HomeWhyLayout>

            <FacilityCard_Img
                // type: small | large-hor | large-ver
                img={TKB_HK2}
                type="small">
            </FacilityCard_Img>

            <AboutVisonLayout> </AboutVisonLayout>

            <AboutArchiLayout> </AboutArchiLayout>

            <AboutWhyLayout> </AboutWhyLayout>

            <AboutFeedbackLayout> </AboutFeedbackLayout>

            <AppoinmentLayout> </AppoinmentLayout>

            <LocationLayout> </LocationLayout>

            <MethodLayout> </MethodLayout>

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