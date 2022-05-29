import React, { useEffect, useState } from 'react'
import './UpdateQa.css'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';
import axios from 'axios';

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
        displayText: "Liên hệ"
    },
    {
        value: 1,
        displayText: "Giảng dạy"
    },
    {
        value: 2,
        displayText: "Đăng ký"
    },
    {
        value: 3,
        displayText: "Bảo lưu"
    }
]
const sortItems_Sub2 = [
    {
        value: 0,
        displayText: "Học phí"
    },
    {
        value: 1,
        displayText: "Cấp độ"
    }
]

const sortItems_Sub2Null = [
    {
        value: 0,
        displayText: "Không"
    }
]
export default function UpdateQa(props) {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [sub1, setSub1] = useState(sortItems_Sub1_0);
    const [sub2, setSub2] = useState(sortItems_Sub2);
    const [typeMain, setTypeMain] = useState(0)
    const [typeSub1, setTypeSub1] = useState(0)
    const [typeSub2, setTypeSub2] = useState(0)
    const [error, setError] = useState();

    const sortHandler_Main = (e) => {
        setTypeMain(e.target.value)
        console.log(e.target.value);
        if (e.target.value == 1) {
            setSub1(sortItems_Sub1_1)
            setSub2(sortItems_Sub2Null)
            setTypeSub2(0)
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

    useEffect(() => {
        const getQaDetail = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/get-qa/${props.idItem}`)
                .then(res => {
                    if (res) {
                        console.log(res.data)
                        if (res.data.main_subject == "course") {
                            setTypeMain(0)
                            setSub1(sortItems_Sub1_0)
                            setSub2(sortItems_Sub2)
                            if (res.data.sub_subject_a == "IELTS")
                                setTypeSub1(0)
                            if (res.data.sub_subject_a == "TOEIC")
                                setTypeSub1(1)
                            if (res.data.sub_subject_a == "Adult Course")
                                setTypeSub1(2)
                            if (res.data.sub_subject_a == "Kid Course")
                                setTypeSub1(3)
                            if (res.data.sub_subject_b == "tuition")
                                setTypeSub2(0)
                            if (res.data.sub_subject_b == "level")
                                setTypeSub2(1)
                        }

                        if (res.data.main_subject == "center") {
                            setTypeMain(1)
                            setSub1(sortItems_Sub1_1)
                            setSub2(sortItems_Sub2Null)
                            if (res.data.sub_subject_a == "contact")
                                setTypeSub1(0)
                            if (res.data.sub_subject_a == "teaching")
                                setTypeSub1(1)
                            if (res.data.sub_subject_a == "register")
                                setTypeSub1(2)
                            if (res.data.sub_subject_a == "reservation")
                                setTypeSub1(3)

                            if (res.data.sub_subject_b == "none")
                                setTypeSub2(0)
                        }
                        setQuestion(res.data.question)
                        setAnswer(res.data.answer)
                    }
                })
        }
        getQaDetail().catch(console.error)
    }, [])
    const onConfirmClick = () => {
        console.log(question + "     " + answer)
        var qa_main
        var qa_sub1
        var qa_sub2
        if (typeMain == 0) {
            qa_main = "course"
            if (typeSub1 == 0)
                qa_sub1 = "IELTS"
            if (typeSub1 == 1)
                qa_sub1 = "TOEIC"
            if (typeSub1 == 2)
                qa_sub1 = "Adult Course"
            if (typeSub1 == 3)
                qa_sub1 = ("Kid Course")
            if (typeSub2 == 0)
                qa_sub2 = "tuition"
            if (typeSub2 == 1)
                qa_sub2 = "level"

        }

        if (typeMain == 1) {
            qa_main = "center"
            if (typeSub1 == 0)
                qa_sub1 = "contact"
            if (typeSub1 == 1)
                qa_sub1 = "teaching"
            if (typeSub1 == 2)
                qa_sub1 = "register"
            if (typeSub1 == 3)
                qa_sub1 = "reservation"
            if (typeSub2 == 0)
                qa_sub2 = "none"
        }

        const params = {
            qa_id: props.idItem,
            main_subject: qa_main,
            sub_subject_a: qa_sub1,
            sub_subject_b: qa_sub2,
            question: question,
            answer: answer
        }
        console.log(params)
        const result = axios.post("http://localhost:8080/q-and-as/post-qa", params)
            .then(res => {
                console.log("......", "Upload Successful")
                setError("Update success. Reload page after")
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            })
    }
    return (
        <Fragment>
            <QaForm
                title="Chỉnh sửa hỏi đáp"
                subTitle="Điều chỉnh các thông tin câu hỏi và trả lời của mục giải đáp"
                confirmText="Cập nhật"
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
                sub2={sub2}
                question={question}
                answer={answer}
                alert={error}>
            </QaForm>
        </Fragment>
    )
}