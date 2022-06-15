import React, { useState } from 'react'
import './UpdatePassword.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';
import axios from 'axios';



export default function UpdatePassword(props) {
    const [pwOld, setpwOld] = useState();
    const [pwNew, setpwNew] = useState();
    const [confirm_pwNew, setConfirm_pwNew] = useState();
    const [message, setMessage] = useState()

    const editListItem = [
        {
            display: 0,
            title: "Mật khẩu hiện tại",
            inputHint: "Nhập mật khẩu hiện tại",
            isPasswordInput: true,
            itemValue: {pwOld},
            onChange: (e) => { setpwOld(e.target.value) }

        },
        {
            display: 1,
            title: "Mật khẩu mới",
            inputHint: "Nhập mật khẩu mới",
            isPasswordInput: true,
            itemValue: {pwNew},
            onChange: (e) => { setpwNew(e.target.value) }
        },
        {
            display: 2,
            title: "Xác nhận mật khẩu mới",
            inputHint: "Nhập lại mật khẩu mới",
            isPasswordInput: true,
            itemValue: {confirm_pwNew},
            onChange: (e) => { setConfirm_pwNew(e.target.value) }
        }
    ]
    const onConfirm = async () => {
        if(!pwOld || !pwNew || !confirm_pwNew){
            setMessage("All fields required")
            return 0;
        }
        if(pwNew !== confirm_pwNew){
            setMessage("Confirm password and new password do not match")
            return 0;
        }
        const params = {
            account_id: props.idItem,
            password_old: pwOld,
            password_new: pwNew,
            confirm_password: confirm_pwNew,
        }
        console.log(params)
        axios.post("http://localhost:8080/Accounts/update-password-directly", params)
                .then(res => {
                    console.log(res)
                    if (res.data == 0) {
                        setMessage("Upload Failed. Retrieve later")   
                    }
                    if (res.data == 1) {
                        setMessage("Update success. Reload page after")
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    }
                    if (res.data == 2) {
                        setMessage("Your current password is incorrect")
                    }
                })
    } 
    return (
        <Fragment>
            <SelfEditForm
                title="Đổi mật khẩu"
                listItem={editListItem}
                confirmText="Xác nhận"
                handleFormClose={props.handleFormClose}
                confirmHandler={onConfirm}
                alert={message}>
            </SelfEditForm>

        </Fragment>
    )
}