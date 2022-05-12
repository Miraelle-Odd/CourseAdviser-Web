import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import PersonalInfoForm from '../PopupSourceComponents/GenericForm/PersonalInfoForm';
import moment from 'moment';

export default function ViewGeneral(props) {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [position, setPosition] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    const [location, setLocation] = useState();
    const [gender, setGender] = useState();
    const [avatar, setAvatar] = useState();
    const [phone, setPhone] = useState();

    useEffect(()=> {
        const getAccountDetail = async () => {
            const result = await axios.get(`http://localhost:8080/Accounts/Get-detail/${props.idItem}`)
            .then(res => {
                if (res) {
                    console.log(res)
                    setName(res.data.Personal_Info.name)
                    setUsername(res.data.username)
                    setPosition(res.data.position)
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

    var personalListItemLeft = [
        {
            title: "Họ và tên",
            inputHint: "Họ và tên",
            itemValue: name,
            readOnly: true,
            icon: ['far', 'fa-user'],
        },
        {
            title: "Tên tài khoản",
            inputHint: "Tên tài khoản",
            itemValue: username,
            readOnly: true,
            icon: ['fas', 'user'],
        },
        {
            title: "Email",
            inputHint: "email@gmail.com",
            itemValue: email,
            readOnly: true,
            icon: ['far', 'envelope'],
        },
        {
            readOnly: true,
            position: position,
            isPositionSelect: true
        }
    ]

    var personalListItemRight = [
        {
            title: "Số điện thoại",
            inputHint: "0000000000",
            itemValue: phone,
            icon: ['fas', 'phone'],
        },
        {
            title: "Ngày sinh",
            inputHint: "08/03/2001",
            itemValue: birthday,
            icon: ['far', 'calendar'],
        },
        {
            title: "Vị trí",
            inputHint: "Kon Tum",
            itemValue: location,
            readOnly: true,
            icon: ['fas', 'location-dot'],
        },
        {
            isGenderSelect: true,
            readOnly: true
        }
    ]
    return (
        <Fragment>
            <PersonalInfoForm
                title="Thông tin tài khoản"
                subtitle="Theo dõi thông tin của nhân viên trong lưu trữ của hệ thống"
                handleFormClose={props.handleFormClose}
                listItemLeft={personalListItemLeft}
                listItemRight={personalListItemRight}
                avatar={avatar ? avatar : null}
                gender={gender ? gender : null}
                isView={true}>
            </PersonalInfoForm>
        </Fragment>
    )
}