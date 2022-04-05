import React, { useState } from 'react'
import './CreateQa.css'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';

export default function CreateQa(props) {
    return (
        <Fragment>
            <QaForm
                title="Tạo hỏi đáp mới"
                subTitle="Nhập thông tin câu hỏi và trả lời để tạo mục giải đáp mới"
                confirmText="Đăng"
                handleFormClose={props.handleFormClose}>
            </QaForm>
        </Fragment>
    )
}