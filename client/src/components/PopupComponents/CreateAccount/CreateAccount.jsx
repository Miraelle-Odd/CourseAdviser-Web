import React, { useState } from 'react'
import './CreateAccount.css'
import { Fragment } from 'react/cjs/react.production.min';
import CreateForm from '../PopupSourceComponents/GenericForm/CreateForm';
import axios from 'axios'
import validator from 'validator'

export default function CreateAccount(props) {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [position, setPosition] = useState("employee")
    const [error, setError] = useState()

    const onConfirm = () => {
        if (!username) {
            setError("Username required")
            console.log(error)
            return false
        }
        if (!password) {
            setError("Password required")
            console.log(error)
            return false
        }
        if (!email) {
            setError("Email required")
            console.log(error)
            return false
        }
        if (!validator.isEmail(email)) {
            setError("Invalid Email")
            console.log(error)
            return false
        }

        const params = {
            name: fullname,
            username: username,
            password: password,
            email: email,
            position: position
        }
        console.log(params)
        const result = axios.post("http://localhost:8080/accounts/create", params)
            .then(res => {
                if (res.data.errors) {
                    if (res.data.errors[0].message.includes("username must be unique"))
                        setError("This username has existed in the system.")
                    else
                        if (res.data.errors[0].message.includes("email must be unique"))
                            setError("This email has been registered for another account")
                        else
                            setError("Errors happened. Try again later")
                } else {
                    setError("Register success")
                }
            })

    }

    const createListItem = [
        {
            title: "Họ và tên",
            inputHint: "Nhập họ tên nhân viên",
            icon: ['far', 'fa-user'],
            onChange: (e) => setFullname(e.target.value)
        },
        {
            title: "Tên tài khoản",
            inputHint: "Nhập tên tài khoản",
            icon: ['fas', 'user'],
            onChange: (e) => setUsername(e.target.value)

        },
        {
            title: "Mật khẩu",
            inputHint: "Nhập mật khẩu",
            icon: ['far', 'eye'],
            onChange: (e) => setPassword(e.target.value)
        },
        {
            title: "Email",
            inputHint: "Nhập email xác thực",
            icon: ['far', 'envelope'],
            onChange: (e) => setEmail(e.target.value)
        },
        {
            isPositionSelect: true,
            items: [
                {
                    value: "employee",
                    displayText: "Nhân viên"
                },
                {
                    value: "manager",
                    displayText: "Quản lý"
                },
            ],
            onChange: (e) => setPosition(e.target.value)
        }
    ]

    return (
        <Fragment>
            <CreateForm
                handleFormClose={props.handleFormClose}
                listItem={createListItem}
                handleFormConfirm={onConfirm}
                error={error}>
            </CreateForm>
        </Fragment>
    )
}