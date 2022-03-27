import React, { useState } from 'react'
import './AlertFail.css'
import { Fragment } from 'react/cjs/react.production.min';
import alert_fail from "../../../assets/icons/alert_fail.png";
import AlertForm from '../PopupSourceComponents/AlertForm/AlertForm';

export default function AlertFail() {
    return (
        <Fragment>
            <AlertForm
                title="Thất bại!"
                subTitle="Lỗi gì đó blah blah blah blah balh."
                src={alert_fail}
                customStyle="alert-form-fail">
            </AlertForm>
        </Fragment>
    )
}