import React, { useRef, useEffect, useState } from 'react'
import './Exam.css'

import RightMenu from '../../components/TestExam/RightMenu/RightMenu'
import SubmitBtn from '../../components/TestExam/RightMenu/SubmitBtn'
import ExamFooter from '../../components/TestExam/OuterComponents/ExamFooter'
import ExamHeader from '../../components/TestExam/OuterComponents/ExamHeader'
import ExamSubHeader from '../../components/TestExam/OuterComponents/ExamSubHeader'
import ListeningDirection from '../../components/TestExam/DirectionsBanner/ListeningDirection'
import ReadingDirection from '../../components/TestExam/DirectionsBanner/ReadingDirection'
import IntroBanner from '../../components/TestExam/DirectionsBanner/IntroBanner'
import SingleSection from '../../components/TestExam/QuestionComponents/SingleSection'
import MixSection from '../../components/TestExam/QuestionComponents/MixSection'

const Exam = props => {
    return (
        <div className='exam-pages'>
            <ExamHeader></ExamHeader>
            <div className='exam-overall-container'>
                <div className='exam-left-container'>
                    <ExamSubHeader></ExamSubHeader>
                    <div className='exam-blank-banner'/>
                    <ListeningDirection></ListeningDirection>
                    <div className='exam-selection-banner'>
                        <div className='exam-blank-banner'/>
                        <SingleSection></SingleSection>
                        <div className='exam-blank-banner'/>
                        <ExamFooter></ExamFooter>
                    </div>
                </div>
                <div className='exam-right-container'>
                    <div className='exam-answer-sheet exam-center'>
                        <RightMenu></RightMenu>
                        <SubmitBtn></SubmitBtn>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Exam