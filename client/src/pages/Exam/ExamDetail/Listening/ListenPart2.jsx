import React, { useEffect, useState, useImperativeHandle } from 'react';
import '../../Exam.css'
import axios from 'axios';

import ExamSubHeader from '../../../../components/TestExam/OuterComponents/ExamSubHeader'
import ListeningDirection from '../../../../components/TestExam/DirectionsBanner/ListeningDirection'
import ExamFooter from '../../../../components/TestExam/OuterComponents/ExamFooter'
import { ExamType, ExamTask } from '../../Task.enum'

const ListenPart2 = React.forwardRef((props, ref) => {
    const [questionList, setQuestionList] = useState([]);

    useImperativeHandle(ref, () => ({
        getAnswerIndex: () => {
            return questionList
        }
    }), [questionList]);

    useEffect(() => {
        async function fetchQuestionList() {
            await axios.get(`http://localhost:8080/exam-details/${props.testId}/listeningPart2`).then(res => {
                setQuestionList(res.data)
            })
        }
        fetchQuestionList();
    }, [props.testId])

    return (
        <div>
            <ExamSubHeader
                title="LISTENING TASK 2"
            ></ExamSubHeader>
            <div className='exam-blank-banner' />
            <ListeningDirection
                task={ExamTask.ListenPart2}
            ></ListeningDirection>
            <div className='exam-selection-banner'>
                <div className='exam-blank-banner' />
                <ExamFooter
                    type={ExamType.Listening}
                    task={ExamTask.ListenPart2}
                ></ExamFooter>
            </div>
        </div>
    )
})

export default ListenPart2