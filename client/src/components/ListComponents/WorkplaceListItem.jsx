import React from "react";
import StatusSwitch from "../SwitchComponents/WorkplacePage/StatusSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./WorkplaceListItem.css"
import PlaceHolder from "../../assets/icons/black-gray-li-holder.png"

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
                            } key={index}>
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
                            } key={index}>
                            {item.photo ?
                                <img className="photo" src={data.avatar ? data.avatar : data.thumbnail ? data.thumbnail : PlaceHolder}></img>
                                :
                                item.actionCell ?
                                    <span className="action-otps">
                                        <div className="action-otp" onClick={props.openFun} value={data.id}>
                                            <FontAwesomeIcon icon={['fas', 'book-open']}></FontAwesomeIcon>
                                        </div>
                                        {
                                            item.noEdit ? "" : <div className="action-otp" onClick={props.editFun} value={data.id}>
                                                <FontAwesomeIcon icon={['fas', 'pen']}></FontAwesomeIcon>
                                            </div>
                                        }

                                    </span>
                                    :
                                    item.statusCell ?
                                        <div onClick={props.statusFun} value={data.id + "/" + data.active}>
                                            <StatusSwitch
                                                on={data.active}
                                                onClick={() => { }}
                                                customOn={props.customOn}
                                                customOff={props.customOff}
                                            ></StatusSwitch>
                                        </div>
                                        :
                                        Object.entries(data).filter(function ([key, value]) {
                                            if (key !== item.name)
                                                return false;
                                            return true;
                                        }).map(([key, value]) => {
                                            return (
                                                <p className="text-cell" key={value}>{value}</p>
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