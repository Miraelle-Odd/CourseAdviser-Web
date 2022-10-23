import React from 'react'
import './DirectionsBanner.css'

import { ExamTask } from '../../../pages/Exam/Task.enum'

export default function ReadingDirection(props) {
    return (
        <div className="reading-direction-container">
            <div className='direction-border'>
                <p className='content-text'><b>Directions:</b>
                    {
                        props.task === ExamTask.ReadPart1 ?
                            ' A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.'
                            : (
                                props.task === ExamTask.ReadPart2 ?
                                    ' Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each question are given below the text. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your answer sheet.'
                                    :
                                    ' In this part you will read a selection of texts, such as magazine and newspaper articles, e-mails, and instant messages. Each text or set of texts is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.'
                            )
                    }

                </p>

                {/* <p className='content-text'><b>Directions:</b> Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each question are given below the text. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your answer sheet.</p> */}

                {/* <p className='content-text'><b>Directions:</b> In this part you will read a selection of texts, such as magazine and newspaper articles, e-mails, and instant messages. Each text or set of texts is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.</p> */}
            </div>
        </div>
    )
}