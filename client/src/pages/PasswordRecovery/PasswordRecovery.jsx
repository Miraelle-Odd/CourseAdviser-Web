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
            setMessage("Vui lòng nhập mật khẩu mới")
            return false
        }
        if (!confirmPassword) {
            setMessage("Vui lòng xác nhận mật khẩu mới")
            return false
        }
        if (newPassword != confirmPassword) {
            setMessage("Mật khẩu mới và xác nhận mật khẩu không khớp")
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
                            setMessage("Thành công. Bạn có thể đăng nhập với mật khẩu mới")
                        })
                }
            })
    }

    return (
        <div className="password-recovery">
            <div className="password-recovery-header">
                <span className="subtitle">Course Adviser</span>
                <span className="title">Khôi Phục Mật Khẩu</span>
            </div>
            <div className="password-recovery-content">
                <div className="section column-flex">
                    <span className="section-bold">Nhập mật khẩu mới : </span>
                    <span className="section-bold">Xác nhận mật khẩu : </span>

                </div>
                <div className="section column-flex">
                    <EyeSwitch
                        inputHint="Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    ></EyeSwitch>
                    <EyeSwitch
                        inputHint="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></EyeSwitch>
                    <span className="notification">{message}</span>
                </div>

            </div>
            <button className="confirm-btn" onClick={onConfirm}>Xác nhận</button>
        </div>
    )
}

export default PasswordRecovery