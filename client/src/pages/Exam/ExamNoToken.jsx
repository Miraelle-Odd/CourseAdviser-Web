import React from 'react'
import './Exam.css'

const ExamNoToken = props => {
    return (
        <div className='exam-no-token-page'>
            <div>No exam token provided</div>
            <div>You are not authourized to take part it our exam</div>
            <div>You can access a exam token by register on online test or offline test in the link below</div>
            <a href = "http://localhost:3000/about/contact">Make Appointment</a>
        </div>
    )
}

export default ExamNoToken