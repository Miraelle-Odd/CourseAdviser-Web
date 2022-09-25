import React from 'react'
import './DirectionsBanner.css'

export default function IntroBanner(props) {
    return (
        <div className="intro-banner-container">
            <div className='subheader-border select-item-center'>
                <div className='intro-border'>
                    <p className='intro-text'><b>You are going to take part in the TOEIC listening test (approximately 45 minutes, 100 questions). If your have any question or require support, feel free to inform our examiners before start the test. <br></br>When you are ready, click the Start button below to begin your exam.</b></p>
                    <p className='intro-text text-color-focus'><b>There is no timer for listening test. The test ends when the audio ends</b></p>
                    <button className='intro-btn btn-padding'>Start</button>

                    {/* <p className='intro-text'><b>You are going to take part in the TOEIC reading test (75 minutes, 100 questions). If your have any question or require support, feel free to inform our examiners before start the test. <br></br>When you are ready, click the Start button below to begin your exam.</b></p>
                    <p className='intro-text text-color-focus'><b>You have 75 minutes to complete the test. <br></br>Your results will be automatically submit when the time runs out</b></p>
                    <button className='intro-btn btn-padding'>Start</button> */}

                    {/* <p className='intro-text'><b>Your answers for the TOEIC listening test have been submitted. You can now process to the reading test section by clicking the button  below.</b></p>
                    <button className='intro-btn'>To Reading Section</button> */}

                    {/* <p className='intro-text'><b>Your answers for the TOEIC reading test have been submitted. Your results for both listening and reading tests will be sent to your email in the nearest future.<br></br>Thank you for take part in this exam.</b></p> */}
                </div>
            </div>
        </div>
    )
}