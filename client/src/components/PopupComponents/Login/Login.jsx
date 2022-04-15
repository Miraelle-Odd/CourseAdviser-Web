import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min';
import { useNavigate } from 'react-router-dom';
import AuthenForm from '../PopupSourceComponents/AuthenForm/AuthenForm';


export default function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const confirmLogin = () => {
        console.log(username)
        console.log(password)
        const params = {
            username: username,
            password: password,
            remember: remember
        }
        const result = axios.post("http://localhost:8080/accounts/login", params)
            .then(res => {                              
                if (!res.data.error) {
                    setError(res.data.message)
                    window.location.replace("/workplace")
                }
                else{
                    setError(res.data.error) 
                }
            })
    }

    return (
        <Fragment>
            <AuthenForm
                isLoginForm={true}
                handleFormClose={props.handleFormClose}
                title="Welcome!"
                subtilte="Log in to continue"
                hintIcon={['fas', 'user']}
                hintInput="Username"
                textConfirm="Log In"
                handleForgotFormOpen={props.handleForgotFormOpen}
                titleStyle="login-header-title"
                inputContainStyle="login-input-contain"
                buttonContainStyle="login-button-contain"
                onConfirm={confirmLogin}
                onInputChange={(e) => setUsername(e.target.value)}
                onPwChange={(e) => setPassword(e.target.value)}
                onRemember={(e) => setRemember(true)}
                onNotRemember={(e) => setRemember(false)}
                error={error}
            >
            </AuthenForm>
        </Fragment>
    )
}