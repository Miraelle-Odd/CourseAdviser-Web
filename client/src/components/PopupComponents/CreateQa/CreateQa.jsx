import React, { useState } from 'react'
import './CreateQa.css'
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
const sortItems_Sub1_0 = [
    {
        value: 0,
        displayText: "IELTS"
    },
    {
        value: 1,
        displayText: "TOEIC"
    },
    {
        value: 2,
        displayText: "Speaking"
    },
    {
        value: 3,
        displayText: "Kids"
    }
]
const sortItems_Sub1_1 = [
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
const sortItems_Sub2 = [
    {
        value: 0,
        displayText: "Học phí"
    },
    {
        value: 1,
        displayText: "Bảo lưu"
    }
]
export default function CreateQa(props) {
    return (
        <Fragment>
            <QaForm
                title="Tạo hỏi đáp mới"
                subTitle="Nhập thông tin câu hỏi và trả lời để tạo mục giải đáp mới"
                confirmText="Đăng"
                handleFormClose={props.handleFormClose}
                sortItems_Topic={sortItems_Topic}>
            </QaForm>
        </Fragment>
    )
}