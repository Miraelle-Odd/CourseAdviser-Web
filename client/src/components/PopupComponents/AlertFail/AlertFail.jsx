import React, { useState } from 'react'
import './AlertFail.css'
import { Fragment } from 'react/cjs/react.production.min';
import alert_fail from "../../../assets/icons/alert_fail.png";
import AlertForm from '../PopupSourceComponents/AlertForm/AlertForm';

export default function AlertFail(props) {
    return (
        <Fragment>
            <AlertForm
                title="Thất bại!"
                subTitle={props.message}
                src={alert_fail}
                customStyle="alert-form-fail"
                isOpen={props.isOpen}
                onClose={props.onClose}
                >
            </AlertForm>
        </Fragment>
    )
}