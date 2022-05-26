import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseView(props) {
    const [course, setCourse] = useState(props.course)

    const inputList = [
        {
            title: "Tên khóa học:",
            inputHint: "Nhập tên khóa học mới...",
            itemValue: course.course_name,
            readOnly: true,

        },
        {
            title: "Trang bài viết:",
            inputHint: "Nhập url trang giới thiệu...",
            itemValue: course.course_page,
            readOnly: true,
        }
    ]

    return (
        <Fragment>
            <CourseForm
                isView={true}
                title="Thông tin khóa học"
                subtitle="Xem thông tin khóa học hiện có trong diễn biến tư vấn của Chatbot"
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                isSpecial={course.special_support? "Có" : "Không"}
                description={course.course_description}
                img={course.course_image}>
            </CourseForm>
        </Fragment>
    )
}