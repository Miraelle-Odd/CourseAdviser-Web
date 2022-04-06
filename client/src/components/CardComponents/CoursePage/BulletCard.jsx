import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BulletCard.css'

const BulletCard = (props) => {
    return (
        <div className="bullet-card">
            <span className="field-name">{props.fieldName}</span>
            <span className={"field-value" + (props.blue ? " blue-value" : "")}>{props.fieldValue}</span>
        </div>
    )
}

export default BulletCard