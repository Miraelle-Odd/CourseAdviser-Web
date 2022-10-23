import React, { useState } from 'react'
import './SectionComponents.css'
import QuestionComponents from './QuestionComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MixSection(props) {
    const [currentQuestionGroupIndex, setCurrentQuestionGroupIndex] = useState(0);

    const nextGroup = () => {
        if (props.questionList && currentQuestionGroupIndex < props.questionList.length - 1) {
            setCurrentQuestionGroupIndex(currentQuestionGroupIndex + 1)
        }
        return
    }
    const prevGroup = () => {
        if (props.questionList && currentQuestionGroupIndex > 0) {
            setCurrentQuestionGroupIndex(currentQuestionGroupIndex - 1)
        }
        return
    }

    return (
        <div className="img-section-container">
            <div className='mix-section-border'>
                <div className='mix-section-left'>
                    <QuestionComponents
                        title={props.questionList[currentQuestionGroupIndex]?.title}
                        img={props.questionList[currentQuestionGroupIndex]?.image}
                        question={props.questionList[currentQuestionGroupIndex]?.question}
                        questionIsParagraph={props.questionIsParagraph}>
                    </QuestionComponents>
                </div>
                <div className='mix-section-right'>
                    <div className='mix-section-question-sheet'>
                        {
                            props.questionList[currentQuestionGroupIndex]?.questions?.map((item, index) => {
                                return (
                                    <QuestionComponents
                                        key={index}
                                        no={item.item_no}
                                        question={item.question}
                                        select_options={item.select_options}>
                                    </QuestionComponents>
                                )
                            })
                        }

                    </div>
                    <div className='navigate-btn select-item-center'>
                        <FontAwesomeIcon
                            className='navigate-btn-icon icon-poiter'
                            icon={['fas', 'fa-chevron-left']}
                            onClick={prevGroup}></FontAwesomeIcon>
                        <p className='navigate-btn-text'>P {currentQuestionGroupIndex + 1}/{props.questionList.length}</p>
                        <FontAwesomeIcon
                            className='navigate-btn-icon icon-poiter'
                            icon={['fas', 'fa-chevron-right']}
                            onClick={nextGroup}></FontAwesomeIcon>
                    </div>
                </div>


            </div>
        </div>
    )
}