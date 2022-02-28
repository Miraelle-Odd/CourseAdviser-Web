import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import "../../index.css"

import DraftCom from '../../components/DraftComponent/DraftCom'
import ArchivementCard_Rec from '../../components/CardComponents/ArchivementCard_Rec'

import LearnBtn from '../../components/ButtonComponents/LearnBtn'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'
import ParallelogramBtn from '../../components/ButtonComponents/ParallelogramBtn'
import ielts_img from '../../assets/icons/course_ielts.png'
import calendar from '../../assets/icons/calendar-check.png'
import WhyCard_Rec from '../../components/CardComponents/WhyCard_Rec'
import FacilityCard_Img from '../../components/CardComponents/FacilityCard_Img'
import ArchivementCard_Rou from '../../components/CardComponents/ArchivementCard_Rou'
import about_toeic from "../../assets/icons/about-TOEIC.png"
import TKB_HK2 from "../../assets/icons/TKB_HK2.PNG"
import WhyCard_Rou from '../../components/CardComponents/WhyCard_Rou'
import FeedbackCard from '../../components/CardComponents/FeedbackCard'
import VisionCard from '../../components/CardComponents/VisionCard'
import AppoinmentCard from '../../components/CardComponents/AppoinmentCard'

import LocationLayout from '../../components/LayoutComponents/LocationLayout'
import MethodSwitch from '../../components/SwitchComponents/MethodSwitch'
import MethodLayout from '../../components/LayoutComponents/MethodLayout'
import AboutArchiLayout from '../../components/LayoutComponents/AboutArchiLayout'
import AboutWhyLayout from '../../components/LayoutComponents/AboutWhyLayout'
import AboutFeedbackLayout from '../../components/LayoutComponents/AboutFeedbackLayout'
import AboutVisonLayout from '../../components/LayoutComponents/AboutVisionLayout'
import HomeWhyLayout from '../../components/LayoutComponents/HomeWhyLayout'
import AppoinmentLayout from '../../components/LayoutComponents/AppoinmentLayout'
import HomeArchiLayout from '../../components/LayoutComponents/HomeArchiLayout'



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

            <HomeArchiLayout></HomeArchiLayout>
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