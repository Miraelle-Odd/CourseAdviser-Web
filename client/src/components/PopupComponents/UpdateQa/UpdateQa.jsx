import React, { useState } from 'react'
import './UpdateQa.css'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';

const sortItems_Topic = [
    {
        value: 0,
        displayText: "Khóa học"
    },
    {
        value: 1,
        displayText: "Trung tâm"
    }
]
const sortItems_Sub1 = [
    {
        value: 0,
        displayText: "Giới thiệu"
    },
    {
        value: 1,
        displayText: "Lịch sử"
    },
    {
        value: 2,
        displayText: "Giảng dạy"
    },
    {
        value: 3,
        displayText: "Thành tích"
    }
]
export default function UpdateQa(props) {
    return (
        <Fragment>
            <QaForm
                title="Chỉnh sửa hỏi đáp"
                subTitle="Điều chỉnh các thông tin câu hỏi và trả lời của mục giải đáp"
                confirmText="Cập nhật"
                question={props.question}
                answer={props.answer}
                handleFormClose={props.handleFormClose}
                sortItems_Topic={sortItems_Topic}
                sortItems_Sub1={sortItems_Sub1}>
            </QaForm>
        </Fragment>
    )
}