import React from "react";
import './WorkplaceStatistic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkplaceStatistic = props => {
    return (
        <div className="statistics-menu">
            <span className="title">{props.menu_title ? props.menu_title : "Thống kê"}</span>
            {
                props.items ? props.items.map((item, index) => {
                    return (
                        <div className="field-container">
                            <span className="field">{item.fieldName} : </span>
                            <span className={props.customValue ? props.customValue : "value"}>{item.fieldValue < 10 ? "0" + item.fieldValue : item.fieldValue}</span>
                        </div>
                    )
                }) : ""
            }
            {
                props.items ? <hr className="line"></hr> : ""
            }
        </div>
    )
}

export default WorkplaceStatistic;
