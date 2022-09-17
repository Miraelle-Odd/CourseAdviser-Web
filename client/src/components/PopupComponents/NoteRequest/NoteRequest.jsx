import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import RequestForm from '../PopupSourceComponents/RequestForm/RequestForm';

export default function NoteRequest(props) {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [isView, setIsView] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const getRequestDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Requests/Get-request/${props.idItem}`)
                .then(res => {
                    if (res) {
                        setQuestion(res.data.content)
                        setAnswer(res.data.note ? res.data.note : "")
                        if (res.data.status == 'considering')
                            setIsView(false)
                    }
                })
        }
        getRequestDetail().catch(console.error)
    }, [])
    const onConfirmClick = () => {
        const params = {
            request_id: props.idItem,
            note: answer,
        }
        const update = axios.post("http://localhost:8080/Requests/Post-request/", params)
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
            <RequestForm
                isView={isView}
                title="Nội dung yêu cầu"
                subTitle="Hiển thị nội dung yêu cầu và các thông tin ghi chú nếu có"
                question={question}
                answer={answer}
                inputAnswer={(e) => { setAnswer(e.target.value); }}
                handleFormClose={props.handleFormClose}
                confirmText="Xác nhận"
                handleConfirm={onConfirmClick}
                alert={error}>
            </RequestForm>
        </Fragment>
    )
}