import React, { useEffect, useState, useImperativeHandle } from 'react';
import '../../Exam.css'
import axios from 'axios';

import ExamSubHeader from '../../../../components/TestExam/OuterComponents/ExamSubHeader'
import ReadingDirection from '../../../../components/TestExam/DirectionsBanner/ReadingDirection'
import SingleSection from '../../../../components/TestExam/QuestionComponents/SingleSection'
import ExamFooter from '../../../../components/TestExam/OuterComponents/ExamFooter'
import { ExamType, ExamTask } from '../../Task.enum';

const ReadingPart1 = React.forwardRef((props, ref) => {
    const [questionList, setQuestionList] = useState([]);

    useImperativeHandle(ref, () => ({
        getAnswerIndex: () => {
            return questionList
        }
    }), [questionList]);

    useEffect(() => {
        async function fetchQuestionList() {
            await axios.get(`http://localhost:8080/exam-details/${props.testId}/readingPart5`).then(res => {
                setQuestionList(res.data)
            })
        }
        fetchQuestionList();
    }, [props.testId])

    return (
        <div>
            <ExamSubHeader
                title="READING TASK 1"
            ></ExamSubHeader>
            <div className='exam-blank-banner' />
            <ReadingDirection
                task={ExamTask.ReadPart1}
            ></ReadingDirection>
            <div className='exam-selection-banner'>
                <div className='exam-blank-banner' />
                <SingleSection questionList={questionList}></SingleSection>
                <div className='exam-blank-banner' />
                <ExamFooter
                    type={ExamType.Reading}
                    task={ExamTask.ReadPart1}
                ></ExamFooter>
            </div>
        </div>
    )
})

export default ReadingPart1