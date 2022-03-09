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
import PostSpecialLayout from '../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostItemBtn from '../../components/ButtonComponents/PostPage/PostItemBtn'
import PostSliderLayout from '../../components/LayoutComponents/PostPage/PostSliderLayout'
import PostListLayout from '../../components/LayoutComponents/PostPage/PostListLayout'
import StaffCardLayout from '../../components/LayoutComponents/StaffPage/StaffCardLayout'

const postSpecialBtn = [
    {
        img: paimon,
        title: "Btn Title 1",
        context: "Subtitle cds sdsd dsds dsdsd max 3 lines .ddddddddddddddddd..",
        datetime: "DD-MM-YYYY - hh:mm:ss",
        author: "NA",
    },
    {
        img: paimon,
        title: "Btn Title 1",
        context: "Subtitle cds sdsd dsds dsdsd max 3 lines .ddddddddddddddddd..",
        datetime: "DD-MM-YYYY - hh:mm:ss",
        author: "NA",
    }
]
const postListItem = [
    {
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
    {
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
    {
        thumbnail: TKB_HK2,
        title: "Title of Post",
        content: "Description Description Description Description Description Description Description Description aaaa",
        datetime: "DD/MM/YYYY hh:mm:ss",
        author: "Author Name"
    },
]

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

            <Footer> </Footer>


            <StaffManagerLayout
                img={paimon}
                title="EMERGENCY FOOD Ver 1.0"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffManagerLayout>

            <StaffEmployeeLayout
                img={paimon}
                title="PAIMON PAIMON 2"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffEmployeeLayout>

            <StaffTeacherLayout
                img={paimon}
                title="TEST LAYOUT 3"
                subtitle="- IELTS reading 9.0 -"
                content={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !`}
                more={`Paimon is not EMERGENCY FOOD !
EHE te nandayo !
blahblah balh dád đá dfd fdf
blahasldgfg gfgfgg vcvcvcvcv vvv
dádasdsdsdsdadsdasdsdad đasdasdsdsd
đasadasdadasdsdas`}>
            </StaffTeacherLayout>

            <Footer> </Footer>

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer> </Footer>

            <PostSliderLayout> </PostSliderLayout>

            <PostSpecialLayout
                type="blue"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="academic posts"
                icon={['fas', 'graduation-cap']}>
            </PostSpecialLayout>
            <PostSpecialLayout
                type="origin"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="special events"
                icon={['fas', 'star']}>
            </PostSpecialLayout>
            <PostSpecialLayout
                type="blue"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="discounts"
                icon={['fas', 'piggy-bank']}>
            </PostSpecialLayout>

            <Footer> </Footer>

            <PostSpecialLayout
                type="blue"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="ACADEMIC POSTS"
            >
            </PostSpecialLayout>

            <PostListLayout
                img={TKB_HK2}
                items={postListItem}>
            </PostListLayout>

            <Footer> </Footer>

            <PostSpecialLayout
                type="origin"
                btn={postSpecialBtn}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="SPECIAL EVENTS"
            >
            </PostSpecialLayout>

            <PostListLayout
                typeblue={true}
                items={postListItem}>
            </PostListLayout>

            <Footer> </Footer>

            <LearnBtn
                name="Learn more">
            </LearnBtn>
            <FloatBtn
                icon={['far', 'calendar-check']}
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