import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseCreate(props) {
    const [courseName, setCourseName] = useState()
    const [courseUrl, setCourseUrl] = useState()
    const [type, setType] = useState()
    const inputList = [
        {
            title: "Tên khóa học:",
            inputHint: "Nhập tên khóa học mới...",
            itemValue: courseName,
            readOnly: false,
            onChange: (e) => { setCourseName(e.target.value) }
        },
        {
            title: "Trang bài viết:",
            inputHint: "Nhập url trang giới thiệu...",
            itemValue: courseUrl,
            readOnly: false,
            onChange: (e) => { setCourseUrl(e.target.value) }
        }
    ]
    const SortHandler = (e) => {
        setType(e.target.value)
        // if (e.target.value == 0)
        //     setPosition("employee")
        // if (e.target.value == 1)
        //     setPosition("manager")
        //Handle chosen sort option code
    }
    const onConfirm = () => {
    }
    return (
        <Fragment>
            <CourseForm
                title="Thêm khóa học"
                subtitle="Nhập thông tin để tạo một khóa học mới trong diễn biến tư vấn của Chatbot"
                textConfirm={"Tạo mới"}
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                selectComboBox={SortHandler}
                type={type}
                updateHandler={onConfirm}>
            </CourseForm>
        </Fragment>
    )
}