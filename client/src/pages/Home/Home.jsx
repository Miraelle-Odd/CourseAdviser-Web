import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import "../../index.css"

import HomeIntroLayout from '../../components/LayoutComponents/HomePage/HomeIntroLayout'
import HomeWhyLayout from '../../components/LayoutComponents/HomePage/HomeWhyLayout'
import AppoinmentLayout from '../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import HomeCourseLayout from '../../components/LayoutComponents/HomePage/HomeCourseLayout'
import Footer from '../../components/Footer/Footer'
import CreateAccount from '../../components/PopupComponents/CreateAccount/CreateAccount'
import UpdateGeneral from '../../components/PopupComponents/UpdateGeneral/UpdateGeneral'
import UpdateSelfContact from '../../components/PopupComponents/UpdateSelfContact/UpdateSelfContact'
import UpdateSelfInfo from '../../components/PopupComponents/UpdateSelfInfo/UpdateSelfInfo'
import UpdatePassword from '../../components/PopupComponents/UpdatePassword/UpdatePassword'
import AlertSuccess from '../../components/PopupComponents/AlertSuccess/AlertSuccess'
import AlertFail from '../../components/PopupComponents/AlertFail/AlertFail'
import AlertConfirm from '../../components/PopupComponents/AlertConfirm/AlertConfirm'

const Home = props => {
    const [listOfTest, setListOfTest] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/tests").then((response) => {
            setListOfTest(response.data)
        })
    }, [])
    return (
        <div className='home'>
            <HomeIntroLayout> </HomeIntroLayout>

            <HomeCourseLayout> </HomeCourseLayout>

            <HomeWhyLayout> </HomeWhyLayout>

            <AppoinmentLayout> </AppoinmentLayout>

            <Footer></Footer>

            {/* <UpdatePassword></UpdatePassword>
            <UpdateSelfContact></UpdateSelfContact>
            <UpdateSelfInfo></UpdateSelfInfo>
            
            <CreateAccount></CreateAccount>
            <UpdateGeneral></UpdateGeneral>

            <AlertSuccess></AlertSuccess>
            <AlertFail></AlertFail>
            <AlertConfirm></AlertConfirm> */}
            {/* <LearnBtn
                name="Learn more">
            </LearnBtn>
            <FloatBtn
                icon={['far', 'calendar-check']}
                name={"Đặt lịch tư vấn"}>
            </FloatBtn> */}

            {/* {
                listOfTest.map((value, key) => {
                    return <DraftCom
                        title={value.title}
                        content={value.text}
                    ></DraftCom>
                })
            } */}
        </div>
    )
}

export default Home