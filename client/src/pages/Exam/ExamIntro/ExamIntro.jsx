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
                listeningScore = {props.listening_score}
                readingScore = {props.reading_score}
                totalScore = {props.total_score}
                onStartListening = {props.onStartListening}
                onEndListening = {props.onEndListening}
                onStartReading = {props.onStartReading}
                section = {props.section}
            ></IntroBanner>
        </div>
    )
}

export default ExamIntro