import React from 'react'
import './SelectItem.css'

export default function SelectItem(props) {
    const onChangeValue = (event) => {
        const current = JSON.parse(localStorage.getItem("answers"))
        current.find(item => item.item_no === props.no).userAnswer = event.target.value
        localStorage.setItem("answers", JSON.stringify(current))
    }
    return (
        <div className="select-item-container">
            <p className='select-item-no'>{props.no ? props.no : "N/A"}.</p>
            <div className="select-item-center" onChange={onChangeValue}>
                <input type="radio" className="select-item-custom-radio" value="A" name={props.no} />
                <input type="radio" className="select-item-custom-radio" value="B" name={props.no} />
                <input type="radio" className="select-item-custom-radio" value="C" name={props.no} />
                <input type="radio" className="select-item-custom-radio" value="D" name={props.no} />
            </div>
        </div>
    )
}