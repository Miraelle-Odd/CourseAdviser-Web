import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCallbackRef } from 'use-callback-ref';
import axios from 'axios';
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
    let { token } = useParams()

    const [currentTask, setCurrentTask] = useState(ExamTask.IntroListen)
    const [currentSection, setCurrentSection] = useState(ExamType.Listening)
    const [currentAnswerIndexList, setCurrentAnswerIndexList] = useState([])
    const [testId, setTestId] = useState()

    const onRefUpdate = (newValue) => { setCurrentAnswerIndexList(newValue ? newValue.getAnswerIndex() : []) }
    const taskRef = useCallbackRef(null, onRefUpdate);

    if (!localStorage.getItem("answers"))
        localStorage.setItem("answers", JSON.stringify([]))

    useEffect(() => {
        async function fetchTestId() {
            await axios.get(`http://localhost:8080/exam-sessions/${token}`).then(res => {
                setTestId(res.data.test_id)
            })
        }
        if (!testId)
            fetchTestId();

        if (!taskRef.current)
            return
        var storage = JSON.parse(localStorage.getItem("answers"))
        const intersected = storage?.reduce((acc, curr) => {
            return [...acc, ...currentAnswerIndexList?.filter(item => item.item_id === curr.item_id)];
        }, []);
        if (intersected.length === 0) {
            var insertedIndexes = currentAnswerIndexList.concat(storage)
            localStorage.setItem("answers", JSON.stringify(insertedIndexes))
        }
    }, [taskRef.current])
    
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

    const submit = async () => {
        if (currentSection === ExamType.Listening) {
            //Add Confirm submit dialog
            setCurrentSection(ExamType.Reading)
            setCurrentTask(ExamTask.EndListen)
        }
        else {
            //Add Confirm submit dialog
            console.log("Nop bai nha ban?")
            const userAnswers = JSON.parse(localStorage.getItem("answers"))
            await axios.post(`http://localhost:8080/exam-sessions/calculate/${token}`, userAnswers).then(res => {
                console.log(res.data)
                setCurrentTask(ExamTask.EndRead)
            })

        }
    }

    ///////////////// Audio Testing //////////////////////////
    const [playing, setPlaying] = useState(false);
    const player = new Audio(
      "https://docs.google.com/uc?export=download&id=11D05GX-adYLD5pISJOavZHIxveapvwci"
    );
  
    useEffect(() => {
        console.log(playing)
      playing ? player.play() : player.pause();
  
      // This is cleanup of the effect
      return () => player.pause();
    }, [playing]);
    // ^ Run the effect every time the `playing` is changed
  
    function togglePlay() {
      // Using the callback version of `setState` so you always
      // toggle based on the latest state
      setPlaying((s) => !s);
    }
    
    const aa = () => {
        setCurrentTask(ExamTask.ListenPart1);
        togglePlay();
    }
    const bb = () => {
        setCurrentTask(ExamTask.IntroRead);
        togglePlay();
    }
    ///////////////// Audio Testing //////////////////////////
    
    return (
        <div className='exam-pages'>
            <ExamHeader></ExamHeader>
            <div className='exam-overall-container'>
                <div className='exam-left-container'>
                    {
                        {
                            0: <ExamIntro title="LISTENING TEST" section={ExamTask.IntroListen} onStartListening={() => aa()}></ExamIntro>,
                            1: <ListenPart1 ref={taskRef} testId={testId}></ListenPart1>,
                            2: <ListenPart2 ref={taskRef} testId={testId}></ListenPart2>,
                            3: <ListenPart3 ref={taskRef} testId={testId}></ListenPart3>,
                            4: <ListenPart4 ref={taskRef} testId={testId}></ListenPart4>,
                            5: <ExamIntro title="LISTENING TEST" section={ExamTask.EndListen} onEndListening={() => bb()}></ExamIntro>,
                            6: <ExamIntro title="READING TEST" section={ExamTask.IntroRead} onStartReading={() => setCurrentTask(ExamTask.ReadPart1)}></ExamIntro>,
                            7: <ReadPart1 ref={taskRef} testId={testId}></ReadPart1>,
                            8: <ReadPart2 ref={taskRef} testId={testId}></ReadPart2>,
                            9: <ReadPart3 ref={taskRef} testId={testId}></ReadPart3>,
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