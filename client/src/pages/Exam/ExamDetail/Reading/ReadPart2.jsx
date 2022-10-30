import React, { useEffect, useState, useImperativeHandle } from 'react';
import '../../Exam.css'
import axios from 'axios';

import ExamSubHeader from '../../../../components/TestExam/OuterComponents/ExamSubHeader'
import ReadingDirection from '../../../../components/TestExam/DirectionsBanner/ReadingDirection'
import MixSection from '../../../../components/TestExam/QuestionComponents/MixSection';
import ExamFooter from '../../../../components/TestExam/OuterComponents/ExamFooter'

import { ExamType, ExamTask } from '../../Task.enum';

const ReadingPart1 = React.forwardRef((props, ref) => {
    const [initialQuestionList, setInitialQuestionList] = useState([])
    const [questionList, setQuestionList] = useState([]);

    useImperativeHandle(ref, () => ({
        getAnswerIndex: () => {
            return initialQuestionList
        }
    }), [initialQuestionList]);

    useEffect(() => {
        async function fetchQuestionList() {
            await axios.get(`http://localhost:8080/exam-details/${props.testId}/readingPart6`).then(res => {
                setInitialQuestionList(res.data)
                const listForView = []
                const questionGroups = res.data.filter(item => item.title)
                questionGroups.map((item, index) => {
                    const next = questionGroups[index + 1]?.item_no || res.data.length + res.data[0]?.item_no
                    const questions = res.data.filter(data =>
                        data.item_no >= item.item_no && data.item_no < next
                    )
                    const chunk = {
                        title: item.title,
                        question: item.question,
                        questions: questions
                    }
                    chunk.questions.forEach(element => {
                        element.title = null
                        element.question = null
                    });
                    listForView.push(chunk)
                })
                setQuestionList(listForView)
                console.log(listForView)
            })
        }
        fetchQuestionList();
    }, [props.testId])

    return (
        <div>
            <ExamSubHeader
                title="READING TASK 2"
            ></ExamSubHeader>
            <div className='exam-blank-banner' />
            <ReadingDirection
                task={ExamTask.ReadPart2}
            ></ReadingDirection>
            <div className='exam-selection-banner'>
                <div className='exam-blank-banner' />
                <MixSection questionList={questionList} questionIsParagraph></MixSection>
                <div className='exam-blank-banner' />
                <ExamFooter
                    type={ExamType.Reading}
                    task={ExamTask.ReadPart2}
                ></ExamFooter>
            </div>
        </div>
    )
})

export default ReadingPart1