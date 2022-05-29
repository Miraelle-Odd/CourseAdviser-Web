import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseLevelForm from '../PopupSourceComponents/CoursesLevelForm/CourseLevelForm';

export default function BotCourseCreateLevel(props) {
    const [sortItems, setSortItems] = useState()
    const [levelName, setLevelName] = useState()
    const [levelInput, setLevelInput] = useState()
    const [levelOutput, setLevelOutput] = useState()
    const [ageInput, setAgeInput] = useState()
    const [ageOutput, setAgeOutput] = useState()
    const [levelPrice, setLevelPrice] = useState()
    const [levelUnit, setLevelUnit] = useState()
    const [levelDescription, setLevelDescription] = useState()
    const [type, setType] = useState(1)
    const [error, setError] = useState()

    const inputList = [
        {
            title: "Tiêu chuẩn đầu vào và đầu ra",
            inputHint1: "Đầu vào",
            inputHint2: "Đầu ra",
            itemValue1: levelInput,
            itemValue2: levelOutput,
            readOnly: false,
            onChange1: (e) => { setLevelInput(e.target.value) },
            onChange2: (e) => { setLevelOutput(e.target.value) }
        },
        {
            title: "Tiêu chuẩn độ tuổi",
            inputHint1: "Thấp nhất",
            inputHint2: "Cao nhất",
            itemValue1: ageInput,
            itemValue2: ageOutput,
            readOnly: false,
            onChange1: (e) => { setAgeInput(e.target.value) },
            onChange2: (e) => { setAgeOutput(e.target.value) }
        },
        {
            title: "Học phí cơ bản",
            inputHint1: "Giá trị",
            inputHint2: "/Mỗi...",
            itemValue1: levelPrice,
            itemValue2: levelUnit,
            readOnly: false,
            onChange1: (e) => { setLevelPrice(e.target.value) },
            onChange2: (e) => { setLevelUnit(e.target.value) }
        }
    ]

    useEffect(async () => {
        if (!sortItems)
            axios.get("http://localhost:8080/bot-courses/get-all-course-name/").then((res) => {
                res.data.map((item, index) => {
                    item.value = item.course_id
                    item.displayText = item.course_name
                })
                setSortItems(res.data)
            })
    }, [sortItems])

    const SortHandler = (e) => {
        setType(e.target.value)
    }

    const onConfirm = () => {
        if (!levelName || !levelDescription 
            || !levelInput || !levelOutput
            || !ageInput || !ageOutput
            || !levelPrice || !levelUnit) {
            setError("All fields are required.")
            return false;
        }
        const createData = {
            level_name: levelName,
            level_description: levelDescription,
            requirement: levelInput,
            guarantee: levelOutput,
            min_age: ageInput,
            max_age: ageOutput,
            basic_fee: levelPrice,
            fee_unit: levelUnit,
            course_id: type
        }
        axios.post("http://localhost:8080/bot-course-levels/create-level", createData).then((ress) => {
            console.log(ress.data)
            setError("Update success. Reload page after")
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        })
    }

    return (
        <Fragment>
            <CourseLevelForm
                isView={false}
                title="Thêm cấp học"
                subtitle="Nhập thông tin để tạo một cấp học mới trong diễn biến tư vấn của Chatbot"
                textConfirm={"Tạo mới"}
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                sortItems={sortItems}
                selectComboBox={SortHandler}
                type={type}
                description={levelDescription}
                inputDescription={(e) => { setLevelDescription(e.target.value); }}
                levelName={levelName}
                levelOnChange={(e) => { setLevelName(e.target.value); }}
                updateHandler={onConfirm}
                comboBoxTitle={"Khóa học gốc:"}
                alert={error}>
            </CourseLevelForm>
        </Fragment>
    )
}