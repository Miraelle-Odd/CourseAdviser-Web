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
    const [type, setType] = useState(0)

    const onConfirm = () => {
        if (!username) {
            setError("Vui lòng nhập Username")
            return false
        }
        if (!password) {
            setError("Vui lòng nhập mật khẩu")
            return false
        }
        if (!email) {
            setError("Vui lòng nhập Email")
            return false
        }
        if (!validator.isEmail(email)) {
            setError("Email không hợp lệ")
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
                        setError("Username này đã tồn tại trong hệ thống")
                    else
                        if (res.data.errors[0].message.includes("email must be unique"))
                            setError("Email này đã được đăng kí")
                        else
                            setError("Lỗi xảy ra. Vui lòng thử lại sau")
                } else {
                    res.data.password = password
                    const activation = axios.post("http://localhost:8080/mail/account-activation", res.data)
                        .then(ress => {
                            setError("Đăng kí thành công. " + ress.data)
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
                }
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