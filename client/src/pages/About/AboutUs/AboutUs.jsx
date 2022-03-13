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
    return (
        <Fragment>
            <AboutIntroLayout> </AboutIntroLayout>

            <AboutVisionLayout> </AboutVisionLayout>

            <MethodLayout> </MethodLayout>

            <AboutCenterLayout> </AboutCenterLayout>

            <AboutArchiLayout> </AboutArchiLayout>

            <AboutWhyLayout> </AboutWhyLayout>

            <AboutFeedbackLayout> </AboutFeedbackLayout>

            <Footer> </Footer>

        </Fragment>
    )
}