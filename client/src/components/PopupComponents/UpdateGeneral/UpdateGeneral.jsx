import React, { useState } from 'react'
import './UpdateGeneral.css'
import { Fragment } from 'react/cjs/react.production.min';
import PersonalInfoForm from '../PopupSourceComponents/GenericForm/PersonalInfoForm';




export default function UpdateGeneral(props) {
    const [name,setName] = useState("Cao Ngọc Anh")
    const [account,setAccount] = useState("aa")
    const [email,setEmail] = useState("email@gmail.com")
    const [birthday,setBirthday] = useState("08/03/2001")
    const [position,setPosition] = useState("Kon Tum")
    const personalListItemLeft = [
        {
            title: "Họ và tên",
            inputHint: "Họ và tên",
            itemValue: name,
            readOnly: false,
            icon: ['far', 'fa-user'],
            onChange: (e)=>{setName(e.target.value)}
        },
        {
            title: "Tên tài khoản",
            inputHint: "Tên tài khoản",
            itemValue: account,
            readOnly: false,
            icon: ['fas', 'user'],
            onChange: (e)=>{setAccount(e.target.value)}
        },
        {
            isPositionSelect: true
        }
    ]

    const personalListItemRight = [
        {
            title: "Email",
            inputHint: "email@gmail.com",
            itemValue: email,
            readOnly: false,
            icon: ['far', 'envelope'],
            onChange: (e)=>{setEmail(e.target.value)}
        },
        {
            title: "Ngày sinh",
            inputHint: "08/03/2001",
            itemValue: birthday,
            icon: ['far', 'calendar'],
            onChange: (e)=>{setBirthday(e.target.value)}
        },
        {
            title: "Vị trí",
            inputHint: "Kon Tum",
            itemValue: position,
            readOnly: false,
            icon: ['fas', 'location-dot'],
            onChange: (e)=>{setPosition(e.target.value)}
        },
        {
            isGenderSelect: true,
        }
    ]
    return (
        <Fragment>
            <PersonalInfoForm
                title="Thông tin tài khoản"
                subtitle="Nhập thông tin của nhân viên mới và ghi nhận họ vào hệ thống"
                handleFormClose={props.handleFormClose}
                listItemLeft={personalListItemLeft}
                listItemRight={personalListItemRight}
                avatar="https://picsum.photos/200/300"
                gender="female">
            </PersonalInfoForm>
        </Fragment>
    )
}