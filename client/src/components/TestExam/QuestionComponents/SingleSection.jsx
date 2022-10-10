import React from 'react'
import './SectionComponents.css'
import QuestionComponents from './QuestionComponents'

export default function SingleSection(props) {
    return (
        <div className="img-section-container">
            <div className='single-section-border'>
                <QuestionComponents
                    type="img">
                </QuestionComponents>
                <QuestionComponents
                    type="img">
                </QuestionComponents>
            </div>
        </div>
    )
}