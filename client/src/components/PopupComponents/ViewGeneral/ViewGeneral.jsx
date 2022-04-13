import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import PersonalInfoForm from '../PopupSourceComponents/GenericForm/PersonalInfoForm';

const personalListItemLeft = [
    {
        title: "Họ và tên",
        inputHint: "Họ và tên",
        itemValue: "Cao Ngọc Anh",
        readOnly: true,
        icon: ['far', 'fa-user'],
    },
    {
        title: "Tên tài khoản",
        inputHint: "Tên tài khoản",
        itemValue: "aa",
        readOnly: true,
        icon: ['fas', 'user'],
    },
    {
        readOnly: true,
        position: "Nhân viên",
        isPositionSelect: true
    }
]
const personalListItemRight = [
    {
        title: "Email",
        inputHint: "email@gmail.com",
        itemValue: "kurocrea@gmail.com",
        readOnly: true,
        icon: ['far', 'envelope'],
    },
    {
        title: "Ngày sinh",
        inputHint: "08/03/2001",
        itemValue: "08/03/2001",
        icon: ['far', 'calendar'],
    },
    {
        title: "Vị trí",
        inputHint: "Kon Tum",
        itemValue: "Kon Tum",
        readOnly: true,
        icon: ['fas', 'location-dot'],
    },
    {
        isGenderSelect: true,
        readOnly: true
    }
]

export default function ViewGeneral(props) {
    return (
        <Fragment>
            <PersonalInfoForm
                title="Thông tin tài khoản"
                subtitle="Theo dõi thông tin của nhân viên trong lưu trữ của hệ thống"
                handleFormClose={props.handleFormClose}
                listItemLeft={personalListItemLeft}
                listItemRight={personalListItemRight}
                avatar="https://picsum.photos/200/300"
                gender="female"
                isView={true}>
            </PersonalInfoForm>
        </Fragment>
    )
}