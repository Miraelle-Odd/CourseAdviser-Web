import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseCreate(props) {
    const [courseName, setCourseName] = useState()
    const [courseUrl, setCourseUrl] = useState()
    const [courseDescription, setCourseDescription] = useState()
    const [type, setType] = useState()
    const [imageURL, setImageURL] = useState()
    const [image, setImage] = useState()
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
    const imageHandler = (e) => {
        setImageURL(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }
    const SortHandler = (e) => {
        setType(e.target.value)
    }
    const onConfirm = () => {
        var imgData
        var createData = {
            course_name: courseName,
            course_page: courseUrl,
            course_description: courseDescription,
            special_support: type,
        }
        if (image) {
            imgData = new FormData()
            imgData.append("image", image)
            axios.post("http://localhost:8080/image/upload-to-imgur/", imgData)
                .then(res => {
                    createData.course_image = res.data.link
                    console.log("......", createData)
                    axios.post("http://localhost:8080/bot-courses/create-course", createData).then((ress) => {
                        console.log(ress.data)
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    })
                })
        }
        else {
            axios.post("http://localhost:8080/bot-courses/create-course", createData).then((res) => {
                console.log(res.data)
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            })
        }

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
                img={imageURL}
                changeImage={imageHandler}
                inputDescription={(e) => { setCourseDescription(e.target.value); }}
                updateHandler={onConfirm}>
            </CourseForm>
        </Fragment>
    )
}