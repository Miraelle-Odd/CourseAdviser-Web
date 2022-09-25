import React from 'react'
import './SectionComponents.css'
import QuestionComponents from './QuestionComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MixSection(props) {
    return (
        <div className="img-section-container">
            <div className='mix-section-border'>
                <div className='mix-section-left'>
                    <QuestionComponents
                        type="img"
                        isMix={true}>
                    </QuestionComponents>
                </div>
                <div className='mix-section-right'>
                    <div className='mix-section-question-sheet'>
                        <QuestionComponents
                            type="text">
                        </QuestionComponents>
                        <QuestionComponents
                            type="text">
                        </QuestionComponents>
                        <QuestionComponents
                            type="text">
                        </QuestionComponents>
                        <QuestionComponents
                            type="text">
                        </QuestionComponents>
                    </div>
                    <div className='navigate-btn select-item-center'>
                        <FontAwesomeIcon className='navigate-btn-icon icon-poiter' icon={['fas', 'fa-chevron-left']}></FontAwesomeIcon>
                        <p className='navigate-btn-text'>P 1/N</p>
                        <FontAwesomeIcon className='navigate-btn-icon icon-poiter' icon={['fas', 'fa-chevron-right']}></FontAwesomeIcon>
                    </div>
                </div>


            </div>
        </div>
    )
}