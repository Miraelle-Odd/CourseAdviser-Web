import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseLevelForm from '../PopupSourceComponents/CoursesLevelForm/CourseLevelForm';

export default function BotCourseViewLevel(props) {
    const [levelName, setLevelName] = useState("vxcvxcvxcv")
    const [levelInput, setLevelInput] = useState("cxzcz")
    const [levelOutput, setLevelOutput] = useState("cxzcz")
    const [ageInput, setAgeInput] = useState("cxzcz")
    const [ageOutput, setAgeOutput] = useState("cxzcz")
    const [levelPrice, setLevelPrice] = useState("cxzcz")
    const [levelUnit, setLevelUnit] = useState("cxzcz")
    const [levelDescription, setLevelDescription] = useState("bvbcv Lorem")
    const [comboBoxValue, setComboBoxValue] = useState("vxcvxcv")
    const [type, setType] = useState(1)
    const inputList = [
        {
            title: "Tiêu chuẩn đầu vào và đầu ra",
            inputHint1: "Đầu vào",
            inputHint2: "Đầu ra",
            itemValue1: levelInput,
            itemValue2: levelOutput,
            readOnly: true,
            onChange1: (e) => { setLevelInput(e.target.value) },
            onChange2: (e) => { setLevelOutput(e.target.value) }
        },
        {
            title: "Tiêu chuẩn độ tuổi",
            inputHint1: "Thấp nhất",
            inputHint2: "Cao nhất",
            itemValue1: ageInput,
            itemValue2: ageOutput,
            readOnly: true,
            onChange1: (e) => { setAgeInput(e.target.value) },
            onChange2: (e) => { setAgeOutput(e.target.value) }
        },
        {
            title: "Học phí cơ bản",
            inputHint1: "Giá trị",
            inputHint2: "/Mỗi...",
            itemValue1: levelPrice,
            itemValue2: levelUnit,
            readOnly: true,
            onChange1: (e) => { setLevelPrice(e.target.value) },
            onChange2: (e) => { setLevelUnit(e.target.value) }
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
    const sortItems = [
        {
            value: 0,
            displayText: "Không"
        },
        {
            value: 1,
            displayText: "Có"
        }
    ]
    return (
        <Fragment>
            <CourseLevelForm
                isView={true}
                title="Thông tin cấp học"
                subtitle="Xem thông tin cấp học trong diễn biến tư vấn của Chatbot"
                handleFormClose={props.handleFormClose}
                listItemInput={inputList}
                sortItems={sortItems}
                selectComboBox={SortHandler}
                type={type}
                description={levelDescription}
                inputDescription={(e) => { setLevelDescription(e.target.value); }}
                levelName={levelName}
                comboBoxValue={comboBoxValue}
                levelOnChange={(e) => { setLevelName(e.target.value); }}
                updateHandler={onConfirm}>
            </CourseLevelForm>
        </Fragment>
    )
}