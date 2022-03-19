import React, { useState } from 'react'
import './ForgotPassword.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthenForm from '../AuthenForm/AuthenForm';

export default function ForgotPassword(props) {
    return (
        <Fragment>
            <AuthenForm
                handleFormClose={props.handleFormClose}
                title="Forgot Password?"
                subtilte="Please enter your validated email"
                hintIcon={['fas', 'paper-plane']}
                hintInput="Validated Email"
                textConfirm="Confirm"
                titleStyle="forgot-header-title"
                inputContainStyle="forgot-input-contain"
                buttonContainStyle="forgot-button-contain">
            </AuthenForm>
        </Fragment>
    )
}