import React from 'react'
import './DirectionsBanner.css'
import img from '../../../assets/icons/exam_img_direction.png'
import { ExamTask } from '../../../pages/Exam/Task.enum'

export default function ListeningDirection(props) {
    return (
        <div className="listening-direction-container">
            <div className='direction-border'>
                {
                    props.task === ExamTask.ListenPart1 ?
                        <div>
                            <p className='content-text'><b>Directions:</b> For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time.</p>
                            <div className='direction-content-border'>
                                <p className='content-text text-example'><b>Example: </b></p>
                                <img className='listening-img-direction' src={img}></img>
                            </div>
                            <p className='content-text'>Statement (C), “They’re sitting at a table,” is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.</p>
                        </div> : ""
                }
                {
                    props.task === ExamTask.ListenPart2 ?
                        <div>
                            <p className='content-text'><b>Directions:</b> You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.</p>
                            <p className='content-text title-text-margin'><b>Example:</b> Statement (C), “They’re sitting at a table,” is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.</p>
                        </div> : ""
                }
                {
                    props.task === ExamTask.ListenPart3 ?
                        <div>
                            <p className='content-text'><b>Directions:</b> You will hear some conversations between two or more people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The conversations will not be printed in your test book and will be spoken only one time.</p>
                            {/* <p className='content-text title-text-margin'><b>Example:</b> Why is the woman calling?</p>
                            <p className='content-text content-text-margin'>(A) To cancel an order</p>
                            <p className='content-text content-text-margin'>(B) To cancel an order</p>
                            <p className='content-text content-text-margin'>(C) To cancel an order</p>
                            <p className='content-text content-text-margin'>(D) To cancel an order</p>
                            <p className='content-text title-text-margin'>Statement (C), “They’re sitting at a table,” is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.</p> */}
                        </div> : ""
                }
                {
                    props.task === ExamTask.ListenPart4 ?
                        <div>
                            <p className='content-text'><b>Directions:</b>Directions: You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The talks will not be printed in your test book and will be spoken only one time.</p>
                            <p className='content-text title-text-margin'><b>Example:</b> What does the speaker say about the repair?</p>
                            <p className='content-text content-text-margin'>(A) It has been finished early.</p>
                            <p className='content-text content-text-margin'>(B) It has been finished early.</p>
                            <p className='content-text content-text-margin'>(C) It has been finished early.</p>
                            <p className='content-text content-text-margin'>(D) It has been finished early.</p>
                            <p className='content-text title-text-margin'>Statement (C), “It has been finished early.,” is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.</p>
                        </div> : ""
                }
            </div>
        </div>
    )
}