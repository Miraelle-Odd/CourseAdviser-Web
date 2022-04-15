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
import QaForm from '../../components/PopupComponents/PopupSourceComponents/QaForm/QaForm'
import FloatBtn from '../../components/ButtonComponents/FloatBtn'
import Chatbot from '../../components/Chatbot/Chatbot'
import { useNavigate } from 'react-router-dom'

const Home = props => {

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

            {/* 
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