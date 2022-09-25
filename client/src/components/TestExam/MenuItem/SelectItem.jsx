import React from 'react'
import './SelectItem.css'

const onChangeValue = (event) => {
    console.log(event.target.value);
  }
export default function SelectItem(props) {
    return (
        <div className="select-item-container">
            <p className='select-item-no'>1.</p>
            <div className="select-item-center" onChange={onChangeValue}>
                <input type="radio" className="select-item-custom-radio" value="A" name="answer" /> 
                <input type="radio" className="select-item-custom-radio" value="B" name="answer" /> 
                <input type="radio" className="select-item-custom-radio" value="C" name="answer" /> 
                <input type="radio"  className="select-item-custom-radio" value="D" name="answer" /> 
            </div>
        </div>
    )
}