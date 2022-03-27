import React, { useState } from 'react'
import './AlertConfirm.css'
import { Fragment } from 'react/cjs/react.production.min';
import alert_confirm from "../../../assets/icons/alert_confirm.png";
import AlertForm from '../PopupSourceComponents/AlertForm/AlertForm';

export default function AlertConfirm() {
    return (
        <Fragment>
            <AlertForm
                title="Thao tác!"
                subTitle="Bạn có chắc muốn thực hiện thao tác gì đó không?"
                src={alert_confirm}
                isYesNo={true}>
            </AlertForm>
        </Fragment>
    )
}