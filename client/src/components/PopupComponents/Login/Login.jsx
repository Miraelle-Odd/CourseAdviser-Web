import React, { useState } from 'react'
import './Login.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import AuthenForm from '../PopupSourceComponents/AuthenForm/AuthenForm';


export default function Login(props) {
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
                buttonContainStyle="login-button-contain">
            </AuthenForm>
        </Fragment>
    )
}