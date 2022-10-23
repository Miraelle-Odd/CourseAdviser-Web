import React from 'react'
import './OuterComponents.css'

export default function ExamSubHeader(props) {
    return (
        <div className="exam-subheader-container">
            <div className='subheader-border select-item-center'>
                <p  className='exam-subheader-text'>{props.title}</p>
            </div>
        </div>
    )
}