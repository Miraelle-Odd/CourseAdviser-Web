import React, { useEffect, useState } from "react";
import "./StatusSwitch.css";

const StatusSwitch = props => {
    const [status, setStatus] = useState(props.on);
    const showAlert = () => {
        // status ?
        // console.log("Wanna disable ?")
        // :
        // console.log("Wanna enable ?")
    }
    useEffect(() => {
        setStatus(props.on)
    },[props.on])
    
    const clickHandler = () => {
        showAlert();
        setStatus(!status)
    }
    return (
        <div className={status ? "status-switch on" : "status-switch off"}
            onClick = {props.onClick ? props.onClick : clickHandler}
        >
            {status ? (props.customOn? props.customOn : "Active") : (props.customOff ? props.customOff :"Inactive")}
        </div>
    )
}

export default StatusSwitch;