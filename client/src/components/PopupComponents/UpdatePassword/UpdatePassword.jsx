import React, { useState } from 'react'
import './UpdatePassword.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';

const editListItem = [
    {
        title: "Mật khẩu hiện tại",
        inputHint: "Nhập mật khẩu hiện tại",
        isPasswordInput: true
    },
    {
        title: "Mật khẩu mới",
        inputHint: "Nhập mật khẩu mới",
        isPasswordInput: true
    },
    {
        title: "Xác nhận mật khẩu mới",
        inputHint: "Nhập lại mật khẩu mới",
        isPasswordInput: true
    }
]

export default function UpdatePassword(props) {
    return (
        <Fragment>
            <SelfEditForm
                title="Đổi mật khẩu"
                listItem={editListItem}
                confirmText="Xác nhận">
            </SelfEditForm>
        </Fragment>
    )
}