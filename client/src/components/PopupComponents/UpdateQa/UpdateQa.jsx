import React, { useState } from 'react'
import './UpdateQa.css'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';

export default function UpdateQa(props) {
    return (
        <Fragment>
            <QaForm
                title="Chỉnh sửa hỏi đáp"
                subTitle="Điều chỉnh các thông tin câu hỏi và trả lời của mục giải đáp"
                confirmText="Cập nhật"
                handleFormClose={props.handleFormClose}>
            </QaForm>
        </Fragment>
    )
}