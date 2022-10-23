import React from 'react'
import './OuterComponents.css'

import { ExamType } from '../../../pages/Exam/Task.enum'

export default function ExamFooter(props) {
    return (
        <div className="exam-footer-container">
            <div className='exam-footer-border select-item-center'>
                {
                    props.type === ExamType.Listening ?
                        <p className='exam-footer-text'>This is the end of the listening task {props.task}. Process to the next part.</p>
                        :
                        <p className='exam-footer-text'>This is the end of the reading task {props.task - 6}. Process to the next part.</p>
                }

            </div>
        </div>
    )
}