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
import Modal from 'react-modal'
import AlertConfirm from '../../components/PopupComponents/AlertConfirm/AlertConfirm';
import AlertSuccess from '../../components/PopupComponents/AlertSuccess/AlertSuccess';

const Exam = props => {
    let { token } = useParams()

    const [currentTask, setCurrentTask] = useState(ExamTask.IntroListen)
    const [currentSection, setCurrentSection] = useState(ExamType.Listening)
    const [currentAnswerIndexList, setCurrentAnswerIndexList] = useState([])
    const [testId, setTestId] = useState()
    const [exameeEmail, setExameeEmail] = useState("")
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [noClose, setNoClose] = useState(false)
    const [dialogText, setDialogText] = useState()
    const [audioUrl, setAudioUrl] = useState("")
    const [listeningScore, setListeningScore] = useState(0)
    const [readingScore, setReadingScore] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const onRefUpdate = (newValue) => { setCurrentAnswerIndexList(newValue ? newValue.getAnswerIndex() : []) }
    const taskRef = useCallbackRef(null, onRefUpdate)

    if (!localStorage.getItem("answers"))
        localStorage.setItem("answers", JSON.stringify([]))

    useEffect(() => {
        async function fetchTestId() {
            await axios.get(`http://localhost:8080/exam-sessions/${token}`).then(res => {
                setTestId(res.data.test_id)
                setExameeEmail(res.data.email)
                if (res.data.status == "done") {
                    setCurrentTask(ExamTask.EndRead)
                    setListeningScore(res.data.listening_score)
                    setReadingScore(res.data.reading_score)
                    setTotalScore(res.data.total_score)
                }
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
        setIsShowAlert(false)
        setNoClose(false)
        if (currentSection === ExamType.Listening) {
            //Add Confirm submit dialog
            togglePlay();
            setCurrentSection(ExamType.Reading)
            setCurrentTask(ExamTask.EndListen)
        }
        else {
            //Add Confirm submit dialog
            const userAnswers = JSON.parse(localStorage.getItem("answers"))

            await axios.post(`http://localhost:8080/exam-sessions/calculate/${token}`, userAnswers).then(res => {
                setCurrentTask(ExamTask.EndRead)
                localStorage.removeItem("answers")
            })

            await axios.get(`http://localhost:8080/exam-sessions/${token}`).then(res => {
                setListeningScore(res.data.listening_score)
                setReadingScore(res.data.reading_score)
                setTotalScore(res.data.total_score)
            })

        }
    }

    const sendResult = async () => {
        await axios.post(`http://localhost:8080/mail/test-result/${token}`, {
            receiverEmail: exameeEmail,
            listeningScore: listeningScore,
            readingScore: readingScore,
            totalScore: totalScore
        }).then(_ => {
            setNoClose(false)
            setSuccessAlert(true)
        })
    }

    ///////////////// Audio Testing //////////////////////////
    const [playing, setPlaying] = useState(false);
    const player = new Audio(audioUrl);
    useEffect(() => {
        async function fetchAudioId() {
            await axios.get(`http://localhost:8080/exam-audios/${testId}`).then(res => {
                setAudioUrl(res.data.audio_url)
            })
        }
        if (testId)
            fetchAudioId();
    }, [testId])

    useEffect(() => {
        playing ? player.play() : player.pause();
        return () => player.pause();
    }, [playing]);

    function togglePlay() {
        setPlaying((s) => !s);
    }

    const startExam = () => {
        setCurrentTask(ExamTask.ListenPart1);
        togglePlay();
    }
    const handleFormClose = () => {
        setIsShowAlert(false);
        setSuccessAlert(false)
    }
    const onSubmitClick = (current) => {
        var storage = JSON.parse(localStorage.getItem("answers"));
        var result;
        if (current === ExamType.Reading) {
            var result = storage.filter(item => item.userAnswer && item.type.includes('reading'));
        }
        else {
            var result = storage.filter(item => item.userAnswer && item.type.includes('listening'));
        }

        if (result.length < 100) {
            setDialogText("Bạn vẫn còn một số câu chưa chọn đáp án. Hãy kiểm tra lại nội dung bài làm !!")
        }
        else {
            setDialogText("Bạn đã hoàn thành tất cả câu hỏi. Xác nhận bạn muốn nộp bài ?")
        }
        setIsShowAlert(true);
    }

    const endTimeHandle = () => {
        if (currentSection === ExamType.Listening) {
            setDialogText("Đã hết thời gian làm bài thi của TOEIC Listening. Chúng tôi sẽ chuyển bạn đến bài thi Reading.")
        }
        else {
            setDialogText("Đã hết thời gian làm bài. Hệ thống sẽ tự động ghi nhận câu trả lời của bạn")
        }
        setNoClose(true)
        setIsShowAlert(true);
    }

    return (
        <div className='exam-pages'>
            <ExamHeader></ExamHeader>
            <div className='exam-overall-container'>
                <div className='exam-left-container'>
                    {
                        {
                            0: <ExamIntro title="LISTENING TEST" section={ExamTask.IntroListen} onStartListening={() => startExam()}></ExamIntro>,
                            1: <ListenPart1 ref={taskRef} testId={testId}></ListenPart1>,
                            2: <ListenPart2 ref={taskRef} testId={testId}></ListenPart2>,
                            3: <ListenPart3 ref={taskRef} testId={testId}></ListenPart3>,
                            4: <ListenPart4 ref={taskRef} testId={testId}></ListenPart4>,
                            5: <ExamIntro title="LISTENING TEST" section={ExamTask.EndListen} onEndListening={() => setCurrentTask(ExamTask.IntroRead)}></ExamIntro>,
                            6: <ExamIntro title="READING TEST" section={ExamTask.IntroRead} onStartReading={() => setCurrentTask(ExamTask.ReadPart1)}></ExamIntro>,
                            7: <ReadPart1 ref={taskRef} testId={testId}></ReadPart1>,
                            8: <ReadPart2 ref={taskRef} testId={testId}></ReadPart2>,
                            9: <ReadPart3 ref={taskRef} testId={testId}></ReadPart3>,
                            10: <ExamIntro title="THE END" section={ExamTask.EndRead}
                                listening_score={listeningScore}
                                reading_score={readingScore}
                                total_score={totalScore}
                                sendResult={sendResult}></ExamIntro>,
                        }[currentTask]
                    }
                </div>
                {
                    currentTask !== ExamTask.IntroListen && currentTask !== ExamTask.IntroRead && currentTask !== ExamTask.EndListen && currentTask !== ExamTask.EndRead ?
                        <div className='exam-right-container'>
                            <div className='exam-answer-sheet exam-center'>
                                <RightMenu
                                    current={currentSection === ExamType.Reading ? currentTask - 6 : currentTask}
                                    type={currentSection}
                                    onPrev={prevTask}
                                    onNext={nextTask}
                                    indexList={currentAnswerIndexList}
                                    endTimeHandle={endTimeHandle}
                                ></RightMenu>
                                <SubmitBtn onSubmit={() => onSubmitClick(currentSection)}></SubmitBtn>
                            </div>
                        </div> : ""
                }
            </div>
            <Modal
                isOpen={isShowAlert}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertConfirm
                    title={"Thông báo"}
                    text={dialogText}
                    handleFormClose={() => handleFormClose()}
                    handleStatus={() => submit()}
                    noClose={noClose}>
                </AlertConfirm>
            </Modal>

            <Modal
                isOpen={successAlert}
                onRequestClose={() => handleFormClose()}
                className="popup-modal"
                overlayClassName="popup-overlay"
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}>
                <AlertSuccess
                    message={"Your result has been sent"}
                    onClose={() => handleFormClose()}
                ></AlertSuccess>
            </Modal>
        </div>
    )
}

export default Exam