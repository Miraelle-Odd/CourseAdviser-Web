import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseView(props) {
    const [courseName, setCourseName] = useState("fbvcbcbv")
    const [courseUrl, setCourseUrl] = useState("đâsdas")
    const [isSpecial, setIsSpecial] = useState("Không")
    const [description, setDescription] = useState("Lorem dfvvbsbfgdnfgcncvbn")
    const inputList = [
        {
            title: "Tên khóa học:",
            inputHint: "Nhập tên khóa học mới...",
            itemValue: courseName,
            readOnly: true,

        },
        {
            title: "Trang bài viết:",
            inputHint: "Nhập url trang giới thiệu...",
            itemValue: courseUrl,
            readOnly: true,
        }
    ]

    const onConfirm = () => {
    }
    return (
        <Fragment>
            <CourseForm
                isView={true}
                title="Thông tin khóa học"
                subtitle="Xem thông tin khóa học hiện có trong diễn biến tư vấn của Chatbot"
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                isSpecial={isSpecial}
                description={description}
                updateHandler={onConfirm}>
            </CourseForm>
        </Fragment>
    )
}