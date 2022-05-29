import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseForm from '../PopupSourceComponents/CoursesForm/CourseForm';

export default function BotCourseUpdate(props) {
    const [course, setCourse] = useState(props.course)
    const [courseName, setCourseName] = useState(course.course_name)
    const [courseUrl, setCourseUrl] = useState(course.course_page)
    const [courseDescription, setCourseDescription] = useState(course.course_description)
    const [type, setType] = useState(course.special_support ? 1 : 0)
    const [imageURL, setImageURL] = useState(course.course_image)
    const [image, setImage] = useState()
    const [error, setError] = useState()
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
    }
    const imageHandler = (e) => {
        setImageURL(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }
    const onConfirm = async() => {
        var imgData
        var updateData = {
            id: course.course_id,
            course_name: courseName,
            course_page: courseUrl,
            course_description: courseDescription,
            special_support: type
        }
        if (image) {
            imgData = new FormData()
            imgData.append("image", image)
            axios.post("http://localhost:8080/image/upload-to-imgur/", imgData)
                .then(res => {
                    updateData.course_image = res.data.link
                    console.log("......", updateData)
                    axios.post("http://localhost:8080/bot-courses/update-course-by-id", updateData).then((ress) => {
                        console.log(ress.data)
                        if (ress.data[0] == 1) {
                            console.log("Update success")
                            setError("Update success. Reload page after")
                            setTimeout(function () {
                                window.location.reload();
                            }, 3000);
                        }
                        else {
                            console.log("Update failed")
                            setError("Update fail. Please check again.")
                        }
                    })
                })
        }
        else{
            axios.post("http://localhost:8080/bot-courses/update-course-by-id", updateData).then((ress) => {
                        if (ress.data[0] == 1) {
                            console.log("Update success")
                            setError("Update success. Reload page after")
                            setTimeout(function () {
                                window.location.reload();
                            }, 3000);
                        }
                        else {
                            console.log("Update failed")
                            setError("Update fail. Please check again.")
                        }
                    })
        }
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
                img={imageURL}
                inputDescription={(e) => { setCourseDescription(e.target.value); }}
                changeImage={imageHandler}
                updateHandler={onConfirm}
                alert={error}>
            </CourseForm>
        </Fragment>
    )
}