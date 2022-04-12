import React from "react";
import './CakeCard.css'

const CakeCard = (props) => {
    return (
        <div className="cake-card">
            <img className={"cake-img" + (props.reversed ? " img-reversed" : "")} src={props.img}></img>
            <div className={"cake-body" + (props.reversed ? " body-reversed" : "")}>
                <div className={"cake-desciption" + (props.reversed ? " description-reversed" : "")}>
                    <span className="subtitle">{props.subtitle}</span>
                    <span className="title">{props.title}</span>
                    <span className="content">{props.content}</span>
                </div>

            </div>
        </div>
    )
}

export default CakeCard