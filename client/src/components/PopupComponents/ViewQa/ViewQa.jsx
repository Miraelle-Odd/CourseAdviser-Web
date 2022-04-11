import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';

const sortItems_Topic = "Trung tâm"
const sortItems_Sub1 = "Lịch sử"
export default function ViewQa(props) {
    return (
        <Fragment>
            <QaForm
                isView={true}
                title="Nội dung hỏi đáp"
                subTitle="Hiển thị các thông tin câu hỏi và trả lời của mục giải đáp"
                question={props.question}
                answer={props.answer}
                handleFormClose={props.handleFormClose}
                sortItems_Topic={sortItems_Topic}
                sortItems_Sub1={sortItems_Sub1}>
            </QaForm>
        </Fragment>
    )
}