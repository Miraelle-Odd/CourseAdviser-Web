import React, { useState } from 'react'
import './ForgotPassword.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthenForm from '../PopupSourceComponents/AuthenForm/AuthenForm';
import axios from 'axios';

export default function ForgotPassword(props) {
    const [email, setEmail] = useState()
    const [error, setError] = useState("")

    const confirmForgot = () => {
        if (!email) {
            setError("Email required")
            return false
        }
        const result = axios.post("http://localhost:8080/accounts/set-token",
            {
                email: email
            })
            .then(res => {
                if(res.data.error){
                    setError(res.data.error)
                    return false
                }
                axios.post("http://localhost:8080/accounts/findOneEmail",
                    {
                        email: email,
                        front: true
                    }
                )
                    .then(ress => {
                        console.log(ress)
                        axios.post("http://localhost:8080/mail/password-recovery",
                            {
                                receiverEmail: email,
                                receiverName: ress.data.username,
                                token: res.data.token
                            }
                        )
                        .then(resss=>{
                            setError(resss.data)
                        })
                    })
            })
    }


    return (
        <Fragment>
            <AuthenForm
                handleFormClose={props.handleFormClose}
                title="Quên Mật Khẩu?"
                subtilte="Mời bạn nhập email xác thực"
                hintIcon={['fas', 'paper-plane']}
                hintInput="Email xác thực"
                textConfirm="Xác nhận"
                titleStyle="forgot-header-title"
                inputContainStyle="forgot-input-contain"
                buttonContainStyle="forgot-button-contain"
                onConfirm={confirmForgot}
                onInputChange={(e) => setEmail(e.target.value)}
                error={error}>
            </AuthenForm>
        </Fragment>
    )
}