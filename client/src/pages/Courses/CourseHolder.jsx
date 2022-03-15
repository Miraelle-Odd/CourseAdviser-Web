import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'

import Ielts from './Ielts/Ielts'
import Toeic from './Toeic/Toeic'
import EngForAdults from './EngForAdults/EngForAdults'
import EngForChildren from './EngForChildren/EngForChildren'

export default function CourseHolder(props) {
    let {courseType} = useParams();
    return (
        <Fragment>
            {
                courseType=="IELTS"?
                <Ielts></Ielts>
                :
                courseType=="TOEIC"?
                <Toeic></Toeic>
                :
                courseType=="english-for-adults"?
                <EngForAdults></EngForAdults>
                :
                <EngForChildren></EngForChildren>
            }
        </Fragment>
    )
}