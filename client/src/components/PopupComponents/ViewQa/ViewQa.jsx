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

    useEffect(()=> {
        const getQaDetail = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/get-qa/${props.idItem}`)
            .then(res => {
                if (res) {
                    setMainSub(res.data.main_subject)
                    setSubSub1(res.data.sub_subject_a)
                    setSubSub2(res.data.sub_subject_b)
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