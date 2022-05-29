import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseLevelForm from '../PopupSourceComponents/CoursesLevelForm/CourseLevelForm';

export default function BotCourseUpdateLevel(props) {
    const [sortItems, setSortItems] = useState()
    const [level, setLevel] = useState(props.level)
    const [levelName, setLevelName] = useState(level.level_name)
    const [levelInput, setLevelInput] = useState(level.requirement)
    const [levelOutput, setLevelOutput] = useState(level.guarantee)
    const [ageInput, setAgeInput] = useState(level.min_age)
    const [ageOutput, setAgeOutput] = useState(level.max_age)
    const [levelPrice, setLevelPrice] = useState(level.basic_fee)
    const [levelUnit, setLevelUnit] = useState(level.fee_unit)
    const [levelDescription, setLevelDescription] = useState(level.level_description)
    const [type, setType] = useState(level.course_id)
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
    const onConfirm = async() => {
        const updateData = {
            id: level.level_id,
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
        axios.post("http://localhost:8080/bot-course-levels/update-level-by-id", updateData).then((ress) => {
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

    return (
        <Fragment>
            <CourseLevelForm
                isView={false}
                title="Cập nhập cấp học"
                subtitle="Cập nhập thông tin cấp học trong diễn biến tư vấn của Chatbot"
                textConfirm={"Cập nhật"}
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