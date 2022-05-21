import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseUpdate(props) {
    const [courseName, setCourseName] = useState("vxcvxcvxcv")
    const [courseUrl, setCourseUrl] = useState("vxcvxvxvcv")
    const [courseDescription, setCourseDescription] = useState("bvbcv Lorem")
    const [type, setType] = useState(1)
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
                title="Cập nhật khóa học"
                subtitle="Cập nhật thông tin của khóa học hiện có trong diễn biến tư vấn của Chatbot"
                textConfirm={"Cập nhật"}
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                selectComboBox={SortHandler}
                type={type}
                description={courseDescription}
                inputDescription={(e) => { setCourseDescription(e.target.value); }}
                updateHandler={onConfirm}>
            </CourseForm>
        </Fragment>
    )
}