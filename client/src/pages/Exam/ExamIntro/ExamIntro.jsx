import React from 'react';
import './../Exam.css'

import ExamSubHeader from '../../../components/TestExam/OuterComponents/ExamSubHeader';
import IntroBanner from '../../../components/TestExam/DirectionsBanner/IntroBanner';

const ExamIntro = props => {
    return (
        <div>
            <ExamSubHeader
                title = {props.title}
            ></ExamSubHeader>
            <div className='exam-blank-banner'/>
            <IntroBanner
                onStartListening = {props.onStartListening}
                onEndListening = {props.onEndListening}
                onStartReading = {props.onStartReading}
                section = {props.section}
            ></IntroBanner>
        </div>
    )
}

export default ExamIntro