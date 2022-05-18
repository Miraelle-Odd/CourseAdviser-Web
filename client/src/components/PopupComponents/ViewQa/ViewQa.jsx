import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import QaForm from '../PopupSourceComponents/QaForm/QaForm';

const sortItems_Topic = "Trung tâm"
const sortItems_Sub1 = "Lịch sử"
export default function ViewQa(props) {
    const [mainSub, setMainSub] = useState();
    const [subSub1, setSubSub1] = useState();
    const [subSub2, setSubSub2] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
        const getQaDetail = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/get-qa/${props.idItem}`)
                .then(res => {
                    if (res) {
                        var main_trans
                        var sub1_trans
                        var sub2_trans
                        if (res.data.main_subject == "course") {
                            main_trans = "Khóa học"
                            if (res.data.sub_subject_a == "IELTS")
                                sub1_trans = "IELTS"
                            if (res.data.sub_subject_a == "TOEIC")
                                sub1_trans = "TOEIC"
                            if (res.data.sub_subject_a == "Adult Course")
                                sub1_trans = "Speaking"
                            if (res.data.sub_subject_a == "Kid Course")
                                sub1_trans = "Kids"
                            if (res.data.sub_subject_b == "tuition")
                                sub2_trans = "Học phí"
                            if (res.data.sub_subject_b == "level")
                                sub2_trans = "Cấp độ"
                        }

                        if (res.data.main_subject == "center") {
                            main_trans = "Trung tâm"
                            if (res.data.sub_subject_a == "contact")
                                sub1_trans = "Liên hệ"
                            if (res.data.sub_subject_a == "teaching")
                                sub1_trans = "Giảng dạy"
                            if (res.data.sub_subject_a == "register")
                                sub1_trans = "Đăng ký"
                            if (res.data.sub_subject_a == "reservation")
                                sub1_trans = "Bảo lưu"
                            if (res.data.sub_subject_b == "none")
                                sub2_trans = "Không"
                        }
                        setMainSub(main_trans)
                        setSubSub1(sub1_trans)
                        setSubSub2(sub2_trans)
                        setQuestion(res.data.question)
                        setAnswer(res.data.answer)
                    }
                })
        }
        getQaDetail().catch(console.error)
    }, [])
    return (
        <Fragment>
            <QaForm
                isView={true}
                title="Nội dung hỏi đáp"
                subTitle="Hiển thị các thông tin câu hỏi và trả lời của mục giải đáp"
                question={question}
                answer={answer}
                handleFormClose={props.handleFormClose}
                sortItems_Topic={mainSub}
                sortItems_Sub1={subSub1}
                sortItems_Sub2={subSub2}>
            </QaForm>
        </Fragment>
    )
}