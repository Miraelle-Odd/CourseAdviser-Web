import React, { useState } from 'react'
import './UpdateSelfInfo.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';

const editListItem = [
    {
        title: "Họ và tên",
        inputHint: "Cao Ngọc Anh",
        icon: ['far', 'fa-user']
    },
    {
        isGenderSelect: true
    },
    {
        title: "Ngày sinh",
        inputHint: "08/03/2001",
        icon: ['far', 'calendar']
    }
]

export default function UpdateSelfInfo(props) {
    return (
        <Fragment>
            <SelfEditForm
                handleFormClose={props.handleFormClose}
                title="Cập nhật thông tin"
                listItem={editListItem}
                confirmText="Cập nhật">
            </SelfEditForm>
        </Fragment>
    )
}