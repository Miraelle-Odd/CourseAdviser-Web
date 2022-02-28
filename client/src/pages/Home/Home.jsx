import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import "../../index.css"

import DraftCom from '../../components/DraftComponent/DraftCom'
import ArchivementCard_Rec from '../../components/CardComponents/ArchivementCard_Rec'
import piggy from '../../assets/icons/piggy-bank.png'
import LearnBtn from '../../components/ButtonComponents/LearnBtn'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'
import ParallelogramBtn from '../../components/ButtonComponents/ParallelogramBtn'
import ielts_img from '../../assets/icons/course_ielts.png'
import calendar from '../../assets/icons/calendar-check.png'
import WhyCard_Rec from '../../components/CardComponents/WhyCard_Rec'
import graduation_cap from '../../assets/icons/graduation-cap.png'
import FacilityCard_Img from '../../components/CardComponents/FacilityCard_Img'
import ArchivementCard_Rou from '../../components/CardComponents/ArchivementCard_Rou'
import about_toeic from "../../assets/icons/about-TOEIC.png"
import TKB_HK2 from "../../assets/icons/TKB_HK2.PNG"
import WhyCard_Rou from '../../components/CardComponents/WhyCard_Rou'
import FeedbackCard from '../../components/CardComponents/FeedbackCard'
import VisionCard from '../../components/CardComponents/VisionCard'
import AppoinmentCard from '../../components/CardComponents/AppoinmentCard'
import location from "../../assets/icons/location.png"

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
            <ArchivementCard_Rec
                icon={piggy}
                title="Scholarship"
                content="Over 3000000 VND"
            ></ArchivementCard_Rec>
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
            <WhyCard_Rec
                icon={graduation_cap}
                title="Cam kết chất lượng đầu ra"
                content="Học viên được phép học lại khóa học miễn phí nếu không đạt chuẩn đầu ra theo cam kết từ hợp đồng đào tạo của trung tâm">
            </WhyCard_Rec>
            <FacilityCard_Img
            // type: small | large-hor | large-ver
                img={TKB_HK2}
                type="small">        
            </FacilityCard_Img>
            <ArchivementCard_Rou
                icon={about_toeic}
                title="119/120"
                content="Giáo viên Việt Nam và bản xứ giàu kinh nghiệm">
            </ArchivementCard_Rou>
            <WhyCard_Rou
                main_img={ielts_img}
                side_img={TKB_HK2}
                title="Personalized Study Routes"
                content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân"
            ></WhyCard_Rou>
            <FeedbackCard
                img={TKB_HK2}
                name="Student's Name"
                place="- Workplace/School"
                text="`I love this center so much that I can learn English at any other ones, I dont't wanna get graduated and just have to stay hear forever. Mual Mual`">
            </FeedbackCard>
            <VisionCard
                img={TKB_HK2}
                title="Tầm nhìn"
                content="This is Vision. bla bla max 3 lines fakjsbadbámnd đaina,dam">
            </VisionCard>
            <AppoinmentCard
                icon={location}
                content1= "CN1: XX Đường Đường Đường, phường A, quận BB, TP. HHH"
                content2= "CN2: XX Đường Đường Đường, phường A, quận BB, TP. HHH">
            </AppoinmentCard>
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