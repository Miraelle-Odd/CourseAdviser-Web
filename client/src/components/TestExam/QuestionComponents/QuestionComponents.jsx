import React from 'react'

export default function QuestionComponents(props) {
    return (
        <div className="question-item-container">
            <div className='content-text title-text-margin question'>
                {
                    props.title ? <p><b>{props.title} </b></p> :
                        <b>Question {props.no ? props.no : 0}: </b>
                }
                {
                    props.question ?
                        (props.questionIsParagraph ?
                            <div className="paragraph-container">
                                {
                                    props.question.split("/r/n").map((item, index) => {
                                        return (
                                            <p key={index}>{item}</p>
                                        )
                                    })
                                }
                            </div>
                            : props.question)
                        : ""
                }
            </div>
            <div className={(props.img && props.select_options ? "d-flex" : "") + (props.questionIsParagraph? "" :" custom-css")}>
                {
                    props.img ?
                        <img className={props.select_options ? "" : 'content-img content-text-margin'} src={props.img}></img> : ""
                }
                {
                    props.select_options ?
                        <div className='select-options'>
                            {
                                props.select_options.split("///").map((item, index) => {
                                    return (
                                        item.length > 0 ?
                                            <p key={index} className='content-text title-text-margin'>{item}</p> : ""
                                    )
                                })
                            }
                        </div>
                        : ""
                }
            </div>
        </div>
    )

}