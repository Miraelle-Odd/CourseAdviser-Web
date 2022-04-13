import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'
import AboutUs from './AboutUs/AboutUs'
import AboutStaff from './AboutStaff/AboutStaff'
import Contact from './Contact/Contact'
import QaLayout from '../../components/LayoutComponents/QaPage/QaLayout'

export default function AboutHolder(props) {
    let {aboutType} = useParams();
    return (
        <Fragment>
            {
                aboutType=="us"?
                <AboutUs></AboutUs>
                :
                aboutType=="staff"?
                <AboutStaff></AboutStaff>
                :
                aboutType=="qa"?
                <QaLayout></QaLayout>
                :
                <Contact></Contact>
            }
        </Fragment>
    )
}