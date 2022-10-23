import React, { useState, useEffect } from 'react'
import './SectionComponents.css'
import QuestionComponents from './QuestionComponents'

export default function SingleSection(props) {
    useEffect(async () => {
        console.log(props.questionList)
    }, [])

    return (
        <div className="img-section-container">
            <div className='single-section-border'>
                {
                    props.questionList ?
                    props.questionList.map((item, index) => {
                        return (
                            <QuestionComponents
                                key={index}
                                no={item.item_no}
                                img={item.image}
                                question={item.question}
                                select_options={item.select_options}
                                type={props.type}>
                            </QuestionComponents>
                        )
                    }) : ""
                }
            </div>
        </div>
    )
}