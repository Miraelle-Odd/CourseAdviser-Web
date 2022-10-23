import React, { useEffect, useState, useImperativeHandle } from 'react';
import '../../Exam.css'
import axios from 'axios';

import ExamSubHeader from '../../../../components/TestExam/OuterComponents/ExamSubHeader'
import ListeningDirection from '../../../../components/TestExam/DirectionsBanner/ListeningDirection'
import SingleSection from '../../../../components/TestExam/QuestionComponents/SingleSection'
import ExamFooter from '../../../../components/TestExam/OuterComponents/ExamFooter'
import { ExamTask, ExamType } from '../../Task.enum';

const ListenPart1 = React.forwardRef((props, ref) => {
    const [questionList, setQuestionList] = useState([]);

    useImperativeHandle(ref, () => ({
        getAnswerIndex: () => {
            return questionList
        }
    }), [questionList]);

    useEffect(() => {
        async function fetchQuestionList() {
            await axios.get(`http://localhost:8080/exam-details/${props.testId}/listeningPart1`).then(res => {
                setQuestionList(res.data)
            })
        }
        fetchQuestionList();
    }, [props.testId])

    return (
        <div>
            <ExamSubHeader
                title="LISTENING TASK 1"
            ></ExamSubHeader>
            <div className='exam-blank-banner' />
            <ListeningDirection
                task={ExamTask.ListenPart1}
            ></ListeningDirection>
            <div className='exam-selection-banner'>
                <div className='exam-blank-banner' />
                <SingleSection questionList={questionList}></SingleSection>
                <div className='exam-blank-banner' />
                <ExamFooter
                    type={ExamType.Listening}
                    task={ExamTask.ListenPart1}
                ></ExamFooter>
            </div>
        </div>
    )
})

export default ListenPart1