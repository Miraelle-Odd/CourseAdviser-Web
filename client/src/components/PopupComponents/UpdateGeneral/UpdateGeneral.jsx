import React, { useEffect, useState } from 'react'
import './UpdateGeneral.css'
import { Fragment } from 'react/cjs/react.production.min';
import PersonalInfoForm from '../PopupSourceComponents/GenericForm/PersonalInfoForm';
import axios from 'axios';
import moment from 'moment'



export default function UpdateGeneral(props) {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [position, setPosition] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    const [location, setLocation] = useState();
    const [gender, setGender] = useState();
    const [avatar, setAvatar] = useState();
    const [phone, setPhone] = useState();

    const [type, setType] = useState()
    useEffect(() => {
        const getAccountDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Accounts/Get-detail/${props.idItem}`)
                .then(res => {
                    if (res) {
                        setName(res.data.Personal_Info.name)
                        setUsername(res.data.username)
                        if (res.data.position == "manager") {
                            setType(1)
                            setPosition("manager")
                        }
                        if (res.data.position == "employee") {
                            setType(0)
                            setPosition("employee")
                        }
                        setEmail(res.data.email)
                        setLocation(res.data.Personal_Info.location)
                        setGender(res.data.Personal_Info.gender)
                        var time = moment(res.data.Personal_Info.birthday).format("YYYY-MM-DD");
                        setBirthday(time)
                        setAvatar(res.data.Personal_Info.avatar)
                        setPhone(res.data.Personal_Info.phone)
                    }
                })
        }
        getAccountDetail().catch(console.error)
    }, [])

    const personalListItemLeft = [
        {
            title: "Họ và tên",
            inputHint: "Họ và tên",
            itemValue: name,
            readOnly: false,
            icon: ['far', 'fa-user'],
            onChange: (e) => { setName(e.target.value) }
        },
        {
            title: "Tên tài khoản",
            inputHint: "Tên tài khoản",
            itemValue: username,
            icon: ['fas', 'user'],
        },
        {
            title: "Email",
            inputHint: "email@gmail.com",
            itemValue: email,
            icon: ['far', 'envelope'],
        },
        {
            isPositionSelect: true
        }
    ]

    const personalListItemRight = [
        {
            title: "Số điện thoại",
            inputHint: "0000000000",
            itemValue: phone,
            readOnly: false,
            icon: ['fas', 'phone'],
            onChange: (e) => { setPhone(e.target.value) }
        },
        {
            title: "Ngày sinh",
            inputHint: "08/03/2001",
            itemValue: birthday,
            icon: ['far', 'calendar'],
            onChange: (e) => { setBirthday(e.target.value) }
        },
        {
            title: "Vị trí",
            inputHint: "Kon Tum",
            itemValue: location,
            readOnly: false,
            icon: ['fas', 'location-dot'],
            onChange: (e) => { setLocation(e.target.value) }
        },
        {
            isGenderSelect: true,
        }
    ]
    const SortHandler = (e) => {
        setType(e.target.value)
        if (e.target.value == 0)
            setPosition("employee")
        if (e.target.value == 1)
            setPosition("manager")
        //Handle chosen sort option code
    }
    const genderHandler = (e) => {
        if (e.target.value == 0)
            setGender("female")
        if (e.target.value == 1)
            setGender("male")
    }
    const onConfirm = () => {
        const params = {
            account_id: props.idItem,
            name: name,
            position: position,
            location: location,
            gender: gender,
            birthday: birthday,
            phone: phone
        }

        const result = axios.post("http://localhost:8080/Accounts/update-account/", params)
            .then(res => {
                console.log("......", res)

                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            })
    }
    return (
        <Fragment>
            <PersonalInfoForm
                title="Thông tin tài khoản"
                subtitle="Nhập thông tin của nhân viên mới và ghi nhận họ vào hệ thống"
                handleFormClose={props.handleFormClose}
                listItemLeft={personalListItemLeft}
                listItemRight={personalListItemRight}
                avatar={avatar ? avatar : null}
                gender={gender ? gender : null}
                changeGender={genderHandler}
                test={SortHandler}
                type={type}
                updateHandler={onConfirm}>
            </PersonalInfoForm>
        </Fragment>
    )
}