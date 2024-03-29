import React, { useEffect, useState } from 'react'
import './SelectItem.css'

export default function SelectItem(props) {
    const onChangeValue = (event) => {
        const current = JSON.parse(localStorage.getItem("answers"))
        current.find(item => item.item_no === props.no).userAnswer = event.target.value
        localStorage.setItem("answers", JSON.stringify(current))
    }

    const getAnswerFromStorage = (value) => {
        const currentAnswer = JSON.parse(localStorage.getItem("answers"))
        const current = currentAnswer.find(item => item.item_no == props.no)
        if (!current?.userAnswer || current?.userAnswer != value)
            return false
        else
            return true
    }

    return (
        <div className="select-item-container">
            <p className='select-item-no'>{props.no ? props.no : "N/A"}.</p>
            <div className="select-item-center" onChange={onChangeValue}>
                <input type="radio" className="select-item-custom-radio" defaultChecked={getAnswerFromStorage("A")} value="A" name={props.no} />
                <input type="radio" className="select-item-custom-radio" defaultChecked={getAnswerFromStorage("B")} value="B" name={props.no} />
                <input type="radio" className="select-item-custom-radio" defaultChecked={getAnswerFromStorage("C")} value="C" name={props.no} />
                <input type="radio" className="select-item-custom-radio" defaultChecked={getAnswerFromStorage("D")} value="D" name={props.no} />
            </div>
        </div>
    )
}