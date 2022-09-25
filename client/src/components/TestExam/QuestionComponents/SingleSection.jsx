import React from 'react'
import './SectionComponents.css'
import QuestionComponents from './QuestionComponents'

export default function SingleSection(props) {
    return (
        <div className="img-section-container">
            <div className='single-section-border'>
                <QuestionComponents
                    type="text">
                </QuestionComponents>
                <QuestionComponents
                    type="text">
                </QuestionComponents>
            </div>
        </div>
    )
}