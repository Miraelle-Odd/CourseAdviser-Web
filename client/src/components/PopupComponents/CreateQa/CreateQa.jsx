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

const sortItems_Sub2Null = [
    {
        value: 0,
        displayText: "Không"
    }
]
export default function CreateQa(props) {


    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    const onConfirmClick = () => {
        console.log(question + "     " + answer)

        if (typeMain == 0)
            console.log("course")
        if (typeMain == 1)
            console.log("center")
        if (typeSub1 == 0)
            console.log("IELTS")
        if (typeSub1 == 1)
            console.log("TOEIC")
        if (typeSub1 == 2)
            console.log("Speaking")
        if (typeSub1 == 3)
            console.log("Kid")
        if (typeSub2 == -1)
            console.log("none")
        if (typeSub2 == 0)
            console.log("tuition")
        if (typeSub2 == 1)
            console.log("reservation")
    }

    const [sub1, setSub1] = useState(sortItems_Sub1_0);
    const [sub2, setSub2] = useState(sortItems_Sub2);
    const [typeMain, setTypeMain] = useState(0)
    const [typeSub1, setTypeSub1] = useState(0)
    const [typeSub2, setTypeSub2] = useState(0)

    const sortHandler_Main = (e) => {
        setTypeMain(e.target.value)
        console.log(e.target.value);
        if (e.target.value == 1) {
            setSub1(sortItems_Sub1_1)
            setSub2(sortItems_Sub2Null)
            setTypeSub2(-1)
        } else {
            setSub1(sortItems_Sub1_0)
            setSub2(sortItems_Sub2)
        }
    }
    const sortHandler_Sub1 = (e) => {
        setTypeSub1(e.target.value)
    }
    const sortHandler_Sub2 = (e) => {
        setTypeSub2(e.target.value)
    }
    return (
        <Fragment>
            <QaForm
                title="Tạo hỏi đáp mới"
                subTitle="Nhập thông tin câu hỏi và trả lời để tạo mục giải đáp mới"
                confirmText="Đăng"
                handleFormClose={props.handleFormClose}
                sortItems_Topic={sortItems_Topic}
                handleConfirm={onConfirmClick}
                inputQuestion={(e) => { setQuestion(e.target.value); }}
                inputAnswer={(e) => { setAnswer(e.target.value); }}
                sortHandler_Main={sortHandler_Main}
                sortHandler_Sub1={sortHandler_Sub1}
                sortHandler_Sub2={sortHandler_Sub2}
                typeMain={typeMain}
                typeSub1={typeSub1}
                typeSub2={typeSub2}
                sub1={sub1}
                sub2={sub2}>
            </QaForm>
        </Fragment>
    )
}