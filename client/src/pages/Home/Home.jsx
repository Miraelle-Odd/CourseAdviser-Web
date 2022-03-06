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
import PostSpecialLayout from '../../components/LayoutComponents/PostPage/PostSpecialLayout'
import PostItemBtn from '../../components/ButtonComponents/PostPage/PostItemBtn'
import PostSliderLayout from '../../components/LayoutComponents/PostPage/PostSliderLayout'
import PostListLayout from '../../components/LayoutComponents/PostPage/PostListLayout'
import StaffCardLayout from '../../components/LayoutComponents/StaffPage/StaffCardLayout'


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
                type="post"
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="Title only 1 line so let use ellipse"
                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                datetime="DD-MM-YYYY - hh:mm:ss"
                author="Author Name">
            </PostSpecialLayout>
            <PostSpecialLayout
                type="event"
                img={TKB_HK2}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="Title only 1 line so let use ellipse"
                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                datetime="DD-MM-YYYY - hh:mm:ss"
                author="Author Name">
            </PostSpecialLayout>
            <PostSpecialLayout
                type="post"
                img={TKB_HK2}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="Title only 1 line so let use ellipse"
                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                datetime="DD-MM-YYYY - hh:mm:ss"
                author="Author Name">
            </PostSpecialLayout>

            <Footer> </Footer>

            <PostSpecialLayout
                type="post"
                img={TKB_HK2}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="Title only 1 line so let use ellipse"
                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                datetime="DD-MM-YYYY - hh:mm:ss"
                author="Author Name">
            </PostSpecialLayout>

            <PostListLayout
                img={TKB_HK2}
                title="Title of Post"
                content="Description Description aa aaaa aaa aaaaa aa aaaa aaaa aaa aaaa aa aaaaaa aaaa aaaaaaa aaaaaaaa aaaa aaa aaaaa aaaaa a aaaa aaa aa aaaa aa aaa vvv vvv vvvv vvvvv vvvvv vv vvvvvv vvv vvv vvv vvvv vvvvvv vvv vvmm mm mm mmmm mmm m mm mmmm m mmm mmm mmm mmmmm mmmm mmmm mm mmmmm mmmm mmmm mmm mm mmm mmm mm mmmmm mmm mmmm mmmmv vvvv vvvvaa aaa aass ss saa Description Description Description Description Description Description aaaa"
                datetime="Upload Time"
                author="Author's Name">
            </PostListLayout>

            <Footer> </Footer>

            <PostSpecialLayout
                type="event"
                img={TKB_HK2}
                description="Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd"
                title="Title only 1 line so let use ellipse"
                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                datetime="DD-MM-YYYY - hh:mm:ss"
                author="Author Name">
            </PostSpecialLayout>

            <PostListLayout
                typeblue={true}
                img={TKB_HK2}
                title="Title of Post"
                content="Description Description aa aaaa aaa aaaaa aa aaaa aaaa aaa aaaa aa aaaaaa aaaa aaaaaaa aaaaaaaa aaaa aaa aaaaa aaaaa a aaaa aaa aa aaaa aa aaa vvv vvv vvvv vvvvv vvvvv vv vvvvvv vvv vvv vvv vvvv vvvvvv vvv vvmm mm mm mmmm mmm m mm mmmm m mmm mmm mmm mmmmm mmmm mmmm mm mmmmm mmmm mmmm mmm mm mmm mmm mm mmmmm mmm mmmm mmmmv vvvv vvvvaa aaa aass ss saa Description Description Description Description Description Description aaaa"
                datetime="Upload Time"
                author="Author's Name">
            </PostListLayout>

            <Footer> </Footer>

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