import React, { useState } from 'react'
import './AlertSuccess.css'
import { Fragment } from 'react/cjs/react.production.min';
import alert_success from "../../../assets/icons/alert_success.png";
import AlertForm from '../PopupSourceComponents/AlertForm/AlertForm';

export default function AlertSuccess(props) {
    return (
        <Fragment>
            <AlertForm
                title="Thành công!"
                subTitle={props.message}
                src={alert_success}
                customStyle="alert-form-success"
                onClose={props.onClose}>
            </AlertForm>
        </Fragment>
    )
}