import React from 'react'
import img from '../../../assets/icons/exam_img_content.png'

export default function QuestionComponents(props) {
    if (props.type == "text"){
        return (
            <div className="question-item-container">
                <p className='content-text title-text-margin'><b>Question 1:</b> Why is the woman calling? </p>
                <p className='content-text title-text-margin'>(A) To cancel an order</p>
                <p className='content-text content-text-margin'>(B) To cancel an order</p>
                <p className='content-text content-text-margin'>(C) To cancel an order</p>
                <p className='content-text content-text-margin'>(D) To cancel an order</p> 
            </div>
        )
    }
    if (props.type == "img"){
        return (
            <div className="question-item-container"> 
                <p className='content-text title-text-margin'><b>Question 1:</b></p>
                <img className={props.isMix? 'mix-question-img' : 'content-img content-text-margin'} src={img}></img>
            </div>
        )
    }

}