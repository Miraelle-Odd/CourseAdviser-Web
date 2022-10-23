import React from 'react'
import './SubmitBtn.css'

export default function SubmitBtn(props) {
    return (
        <div className="submit-btn-container">
            <button onClick={props.onSubmit} className='sumit-btn-custom'> Submit
            </button>
        </div>
    )
}