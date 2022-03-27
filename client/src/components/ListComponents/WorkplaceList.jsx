import React from "react";
import './WorkplaceList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusSwitch from "../SwitchComponents/WorkplacePage/StatusSwitch";
import WorkplaceListItem from "./WorkplaceListItem";



const WorkplaceList = props => {
    return (
        <div className="workplace-list">
            <WorkplaceListItem isHeader fieldFormat={props.fieldFormat}></WorkplaceListItem>
            {props.data.map((item, index) => {
                return (
                    <WorkplaceListItem
                        fieldFormat={props.fieldFormat}
                        data={item}
                    ></WorkplaceListItem>
                )

            })}
        </div>
    )
}

export default WorkplaceList;