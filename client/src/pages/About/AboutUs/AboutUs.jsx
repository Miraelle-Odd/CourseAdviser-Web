import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './AboutUs.css'
import { Fragment } from 'react/cjs/react.production.min'
import Footer from '../../../components/Footer/Footer'
import AboutIntroLayout from '../../../components/LayoutComponents/AboutPage/AboutIntroLayout'
import AboutVisionLayout from '../../../components/LayoutComponents/AboutPage/AboutVisionLayout'
import MethodLayout from '../../../components/LayoutComponents/AboutPage/MethodLayout'
import AboutCenterLayout from '../../../components/LayoutComponents/AboutPage/AboutCenterLayout'
import AboutArchiLayout from '../../../components/LayoutComponents/AboutPage/AboutArchiLayout'
import AboutWhyLayout from '../../../components/LayoutComponents/AboutPage/AboutWhyLayout'
import AboutFeedbackLayout from '../../../components/LayoutComponents/AboutPage/AboutFeedbackLayout'

export default function AboutUs(props) {
    const [listOfFeedbacks, setListOfFeedbacks] = useState([])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    useEffect(() => {
        const getListFeedbacks = async () => {
            await axios.get("http://localhost:8080/exstudents/get-feedback")
                .then(async(res) => {
                    setListOfFeedbacks(res.data)
                })

        }
        getListFeedbacks().catch(console.error)
    }, [])

    return (
        <Fragment>
            <AboutIntroLayout> </AboutIntroLayout>

            <AboutVisionLayout> </AboutVisionLayout>

            <MethodLayout> </MethodLayout>

            <AboutCenterLayout> </AboutCenterLayout>

            <AboutArchiLayout> </AboutArchiLayout>

            <AboutWhyLayout> </AboutWhyLayout>

            <AboutFeedbackLayout
                feedbacks={listOfFeedbacks}
            > </AboutFeedbackLayout>

            <Footer> </Footer>

        </Fragment>
    )
}