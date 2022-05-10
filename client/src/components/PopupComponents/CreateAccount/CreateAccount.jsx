import React, { useState } from 'react'
import './CreateAccount.css'
import { Fragment } from 'react/cjs/react.production.min';
import CreateForm from '../PopupSourceComponents/GenericForm/CreateForm';
import axios from 'axios'
import validator from 'validator'
import jwt_decode from 'jwt-decode'
import { useNavigate, useParams } from "react-router-dom";

export default function CreateAccount(props) {
    let navigate = useNavigate()

    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [position, setPosition] = useState("employee")
    const [error, setError] = useState()
    const [type, setType] = useState(0)

    const onConfirm = () => {
        if (!username) {
            setError("Username required")
            return false
        }
        if (!password) {
            setError("Password required")
            return false
        }
        if (!email) {
            setError("Email required")
            return false
        }
        if (!validator.isEmail(email)) {
            setError("Invalid Email")
            return false
        }

        const params = {
            name: fullname,
            username: username,
            password: password,
            email: email,
            position: position
        }
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
                    res.data.password = jwt_decode(res.data.password)
                    const activation = axios.post("http://localhost:8080/mail/account-activation", res.data)
                        .then(ress => {
                            setError("Register success. " + ress.data)
                        })
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
            ]
        }
    ]

    const testSortHandler = (e) => {
        setType(e.target.value)
        if (e.target.value == 0)
            setPosition("employee")
        if (e.target.value == 1)
            setPosition("manager")
        //Handle chosen sort option code
    }
    return (
        <Fragment>
            <CreateForm
                handleFormClose={props.handleFormClose}
                listItem={createListItem}
                handleFormConfirm={onConfirm}
                error={error}
                test={testSortHandler}
                type={type}>
            </CreateForm>
        </Fragment>
    )
}