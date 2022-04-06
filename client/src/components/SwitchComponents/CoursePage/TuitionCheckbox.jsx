import React, { useState } from "react";
import './TuitionCheckbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TuitionCheckbox = (props) => {
    const [checked, setChecked] = useState(false)

    const clickHandler = (e) => {
        if (checked){
            setChecked(false)
            props.onUncheck(e)
        }
        else{
            setChecked(true)
            props.onCheck(e)
        }
    }

    return (
        <div className={"tuition-checkbox" + (props.long ? " long" : "") + (checked? " checked-box" : "")} onClick={clickHandler} value={props.value}>
            <span className={"icon" + (checked? " checked-icon" : "")}>
                <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            </span>
            <div className="display-text">
                <span className={"title" + (props.longTitle? " long-title" : "")}>
                    {props.title}
                </span>
                <span className="subtitle">
                    {props.subtitle}
                </span>
            </div>

        </div>
    )
}

export default TuitionCheckbox
