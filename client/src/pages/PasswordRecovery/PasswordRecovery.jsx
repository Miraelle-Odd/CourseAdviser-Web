import React, { useState } from "react";
import EyeSwitch from '../../components/SwitchComponents/PasswordPopup/EyeSwitch'
import './PasswordRecovery.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

const PasswordRecovery = (props) => {

    let { token } = useParams();

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const onConfirm = () => {
        if (!newPassword) {
            setMessage("New password required")
            return false
        }
        if (!confirmPassword) {
            setMessage("Confirm password required")
            return false
        }
        if (newPassword != confirmPassword) {
            setMessage("Your new password and confirm password do not match")
            return false
        }
        console.log(token)

        const result = axios.post("http://localhost:8080/accounts/update-password", {
            token: token,
            password: newPassword
        })
            .then(res => {
                if (res.data.error)
                    setMessage(res.data.error)
                if (res.data.success) {
                    axios.post("http://localhost:8080/accounts/token-activated",
                        {
                            token: token
                        })
                        .then(ress => {
                            setMessage("Successfull. You can log in with your new password")
                        })
                }
            })
    }

    return (
        <div className="password-recovery">
            <div className="password-recovery-header">
                <span className="subtitle">Course Adviser</span>
                <span className="title">Password Recovery</span>
            </div>
            <div class="password-recovery-content">
                <div class="section column-flex">
                    <span class="section-bold">Enter your new password : </span>
                    <span class="section-bold">Confirm your new password : </span>

                </div>
                <div class="section column-flex">
                    <EyeSwitch
                        inputHint="Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    ></EyeSwitch>
                    <EyeSwitch
                        inputHint="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></EyeSwitch>
                    <span class="notification">{message}</span>
                </div>

            </div>
            <button class="confirm-btn" onClick={onConfirm}>Confirm</button>
        </div>
    )
}

export default PasswordRecovery