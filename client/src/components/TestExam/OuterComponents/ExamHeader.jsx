import React from 'react'
import './OuterComponents.css'
import logo from '../../../assets/icons/app-logo.png'
export default function ExamHeader(props) {
    return (
        <div className="exam-header-container">
            <div className='exam-header-border select-item-center'>
                <div className='exam-title-border select-item-center'>
                    <img className='exam-img' src={logo}></img>
                    <div className='exam-header-text-border'>
                        <p className='exam-header-main-text'>TOEIC MOCK TEST</p>
                        <p className='exam-header-sub-text'>Test your limit, obtain most suitable assitance</p>
                    </div>
                </div>

            </div>
        </div>
    )
}