import React from "react";
import StatusSwitch from "../SwitchComponents/WorkplacePage/StatusSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./WorkplaceListItem.css"
import UserPlaceHolder from "../../assets/icons/black-gray-user-holder.png"

const WorkplaceListItem = props => {

    if (props.isHeader)
        return (
            <div className="workplace-li is-header">
                {props.fieldFormat.map((item, index) => {
                    return (
                        <span className=
                            {
                                "cell " + item.width +
                                (item.willDisappear ? " will-disappear" : "") +
                                (item.center ? " center-cell" : "") +
                                (item.noWrap ? " no-wrap" : "") +
                                (item.noRightMargin ? " no-right-margin" : "")
                            }>
                            {item.field}
                        </span>
                    )
                })}
            </div>
        )
    else {
        var data = props.data
        return (
            <div className="workplace-li">
                {props.fieldFormat.map((item, index) => {
                    return (
                        <span className=
                            {
                                "cell " + item.width +
                                (item.willDisappear ? " will-disappear" : "") +
                                (item.center ? " center-cell" : "") +
                                (item.noWrap ? " no-wrap" : "") +
                                (item.noRightMargin ? " no-right-margin" : "")
                            }>
                            {item.photo ?
                                <img className="photo" src={data.avatar ? data.avatar : data.thumbnail ? data.thumbnail : UserPlaceHolder}></img>
                                :
                                item.actionCell ?
                                    <span className="action-otps">
                                        <div className="action-otp">
                                            <FontAwesomeIcon icon={['fas', 'book-open']}></FontAwesomeIcon>
                                        </div>
                                        <div className="action-otp">
                                            <FontAwesomeIcon icon={['fas', 'pen']}></FontAwesomeIcon>
                                        </div>
                                    </span>
                                    :
                                    item.statusCell ?
                                        <StatusSwitch
                                        on = {data.active}
                                        ></StatusSwitch>
                                        :
                                        Object.entries(data).filter(function ([key, value]) {
                                            if (key !== item.name)
                                                return false;
                                            return true;
                                        }).map(([key, value]) => {
                                            return (
                                                <p>{value}</p>
                                            )
                                        })
                            }
                        </span>
                    )
                })}
                
            </div>
        )
    }
}

export default WorkplaceListItem