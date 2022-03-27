import React, { useState } from 'react'
import './CreateAccount.css'
import { Fragment } from 'react/cjs/react.production.min';
import CreateForm from '../PopupSourceComponents/GenericForm/CreateForm';

const createListItem = [
    {
        title: "Họ và tên",
        inputHint: "Nhập họ tên nhân viên",
        icon: ['far', 'fa-user']
    },
    {
        title: "Tên tài khoản",
        inputHint: "Nhập tên tài khoản",
        icon: ['fas', 'user']
    },
    {
        title: "Mật khẩu",
        inputHint: "Nhập mật khẩu",
        icon: ['far', 'eye']
    },
    {
        title: "Email",
        inputHint: "Nhập email xác thực",
        icon: ['far', 'envelope']
    },
    {
        isPositionSelect: true
    }
]

export default function CreateAccount(props) {
    return (
        <Fragment>
            <CreateForm
                listItem={createListItem}>
            </CreateForm>
        </Fragment>
    )
}