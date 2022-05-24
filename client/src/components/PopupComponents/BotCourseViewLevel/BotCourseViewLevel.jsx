import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import CourseLevelForm from '../PopupSourceComponents/CoursesLevelForm/CourseLevelForm';

export default function BotCourseViewLevel(props) {
    const [level, setLevel] = useState(props.level)

    const inputList = [
        {
            title: "Tiêu chuẩn đầu vào và đầu ra",
            inputHint1: "Đầu vào",
            inputHint2: "Đầu ra",
            itemValue1: level.requirement,
            itemValue2: level.guarantee,
            readOnly: true,
        },
        {
            title: "Tiêu chuẩn độ tuổi",
            inputHint1: "Thấp nhất",
            inputHint2: "Cao nhất",
            itemValue1: level.min_age,
            itemValue2: level.max_age,
            readOnly: true,
        },
        {
            title: "Học phí cơ bản",
            inputHint1: "Giá trị",
            inputHint2: "/Mỗi...",
            itemValue1: level.basic_fee,
            itemValue2: "/ " + level.fee_unit,
            readOnly: true,
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
                description={level.level_description}
                levelName={level.level_name}
                comboBoxTitle={"Khóa học gốc:"}
                comboBoxValue={level.Bot_Course.course_name}>
            </CourseLevelForm>
        </Fragment>
    )
}