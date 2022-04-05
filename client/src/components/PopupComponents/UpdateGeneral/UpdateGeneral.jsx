import React, { useState } from 'react'
import './UpdateGeneral.css'
import { Fragment } from 'react/cjs/react.production.min';
import PersonalInfoForm from '../PopupSourceComponents/GenericForm/PersonalInfoForm';

const personalListItemLeft = [
    {
        title: "Họ và tên",
        inputHint: "Cao Ngọc Anh",
        icon: ['far', 'fa-user']
    },
    {
        title: "Tên tài khoản",
        inputHint: "NAaaaa",
        icon: ['fas', 'user']
    },
    {
        isPositionSelect: true
    }
]
const personalListItemRight = [
    {
        title: "Email",
        inputHint: "kurocrea@gmail.com",
        icon: ['far', 'envelope']
    },
    {
        title: "Ngày sinh",
        inputHint: "08/03/2001",
        icon: ['far', 'calendar']
    },
    {
        title: "Vị trí",
        inputHint: "Kon Tum",
        icon: ['fas', 'location-dot']
    },
    {
        isGenderSelect: true
    }
]

export default function UpdateGeneral(props) {
    return (
        <Fragment>
            <PersonalInfoForm
                title="Thông tin tài khoản"
                handleFormClose={props.handleFormClose}
                listItemLeft={personalListItemLeft}
                listItemRight={personalListItemRight}>
            </PersonalInfoForm>
        </Fragment>
    )
}