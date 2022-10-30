import React, { useEffect, useState } from 'react'
import { useCallbackRef } from 'use-callback-ref';
import './Exam.css'

import RightMenu from '../../components/TestExam/RightMenu/RightMenu'
import SubmitBtn from '../../components/TestExam/RightMenu/SubmitBtn'
import ExamHeader from '../../components/TestExam/OuterComponents/ExamHeader'
import { ExamTask, ExamType } from './Task.enum'
import ExamIntro from './ExamIntro/ExamIntro'
import ListenPart1 from './ExamDetail/Listening/ListenPart1'
import ListenPart2 from './ExamDetail/Listening/ListenPart2'
import ListenPart3 from './ExamDetail/Listening/ListenPart3'
import ListenPart4 from './ExamDetail/Listening/ListenPart4'
import ReadPart1 from './ExamDetail/Reading/ReadPart1'
import ReadPart2 from './ExamDetail/Reading/ReadPart2'
import ReadPart3 from './ExamDetail/Reading/ReadPart3'

const Exam = props => {
    const [currentTask, setCurrentTask] = useState(ExamTask.IntroListen)
    const [currentSection, setCurrentSection] = useState(ExamType.Listening)
    const [currentAnswerIndexList, setCurrentAnswerIndexList] = useState([])
    const [storedAnswers, setStoredAnswers] = useState([])

    const onRefUpdate = (newValue) => { setCurrentAnswerIndexList(newValue? newValue.getAnswerIndex() : []) }
    const taskRef = useCallbackRef(null, onRefUpdate);

    useEffect(() => {
        if(!taskRef.current)
            return
        const intersected = storedAnswers?.reduce((acc, curr) => {
            return [...acc, ...currentAnswerIndexList?.filter(item => item.item_id === curr.item_id)];
        }, []);
        const insertedIndexes = currentAnswerIndexList.concat(storedAnswers)
        if (intersected.length === 0 && insertedIndexes.length > 0)
            setStoredAnswers(insertedIndexes)
        localStorage.setItem("answers", JSON.stringify(storedAnswers))
    }, [taskRef.current, storedAnswers])

    const nextTask = () => {
        if ((currentSection === ExamType.Listening && currentTask < ExamTask.ListenPart4) || (currentSection === ExamType.Reading && currentTask < ExamTask.ReadPart3)) {
            setCurrentTask(currentTask + 1)
        }
    }

    const prevTask = () => {
        if ((currentSection === ExamType.Listening && currentTask > ExamTask.ListenPart1) || (currentSection === ExamType.Reading && currentTask > ExamTask.ReadPart1)) {
            setCurrentTask(currentTask - 1)
        }
    }

    const submit = () => {
        if (currentSection === ExamType.Listening) {
            //Add Confirm submit dialog
            setCurrentSection(ExamType.Reading)
            setCurrentTask(ExamTask.EndListen)
        }
        else {
            //Add Confirm submit dialog
            console.log("Nop bai nha ban?")
            setCurrentTask(ExamTask.EndRead)
        }
    }

    return (
        <div className='exam-pages'>
            <ExamHeader></ExamHeader>
            <div className='exam-overall-container'>
                <div className='exam-left-container'>
                    {
                        {
                            0: <ExamIntro title="LISTENING TEST" section={ExamTask.IntroListen} onStartListening={() => setCurrentTask(ExamTask.ListenPart1)}></ExamIntro>,
                            1: <ListenPart1 ref={taskRef} testId={1}></ListenPart1>,
                            2: <ListenPart2 ref={taskRef} testId={1}></ListenPart2>,
                            3: <ListenPart3 ref={taskRef} testId={1}></ListenPart3>,
                            4: <ListenPart4 ref={taskRef} testId={1}></ListenPart4>,
                            5: <ExamIntro title="LISTENING TEST" section={ExamTask.EndListen} onEndListening={() => setCurrentTask(ExamTask.IntroRead)}></ExamIntro>,
                            6: <ExamIntro title="READING TEST" section={ExamTask.IntroRead} onStartReading={() => setCurrentTask(ExamTask.ReadPart1)}></ExamIntro>,
                            7: <ReadPart1 ref={taskRef} testId={1}></ReadPart1>,
                            8: <ReadPart2 ref={taskRef} testId={1}></ReadPart2>,
                            9: <ReadPart3 ref={taskRef} testId={1}></ReadPart3>,
                            10: <ExamIntro title="READING TEST" section={ExamTask.EndRead}></ExamIntro>,
                        }[currentTask]
                    }
                </div>
                {
                    currentTask !== ExamTask.IntroListen && currentTask !== ExamTask.IntroRead && currentTask !== ExamTask.EndListen && currentTask !== ExamTask.EndRead ?
                        <div className='exam-right-container'>
                            <div className='exam-answer-sheet exam-center'>
                                <RightMenu
                                    current={currentSection === ExamType.Reading ? currentTask - 6 : currentTask}
                                    onPrev={prevTask}
                                    onNext={nextTask}
                                    indexList={currentAnswerIndexList}
                                ></RightMenu>
                                <SubmitBtn onSubmit={submit}></SubmitBtn>
                            </div>
                        </div> : ""
                }
            </div>
        </div>
    )
}

export default Exam