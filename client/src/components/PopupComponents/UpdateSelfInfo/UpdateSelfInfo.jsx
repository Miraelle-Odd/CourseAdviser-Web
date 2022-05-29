import React, { useEffect, useState } from 'react'
import './UpdateSelfInfo.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';
import moment from 'moment';
import axios from 'axios';

export default function UpdateSelfInfo(props) {
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [birthday, setBirthday] = useState();
    const [error, setError] = useState();
    
    useEffect(() => {
        setName(props.name)
        setGender(props.gender)
        var time = moment(props.birthday).format("YYYY-MM-DD");
        setBirthday(time)
    }, [props])
    const editListItem = [
        {
            title: "Họ và tên",
            inputHint: "Họ và tên",
            itemValue: name,
            icon: ['far', 'fa-user'],
            onChange: (e) => { setName(e.target.value) }
        },
        {
            isGenderSelect: true
        },
        {
            title: "Ngày sinh",
            inputHint: "Ngày sinh",
            itemValue:birthday,
            icon: ['far', 'calendar'],
            onChange: (e) => { setBirthday(e.target.value) }
        }
    ]
    const genderHandler = (e) => {
        if (e.target.value == 0)
            setGender("female")
        if (e.target.value == 1)
            setGender("male")
    }
    const onConfirm = async () => {
        const params = {
            account_id: props.idItem,
            name: name,
            gender: gender,
            birthday: birthday,
        }
        console.log(params)
        axios.post("http://localhost:8080/Accounts/update-account/", params)
                .then(res => {
                    if (res.data[0] == 0) {
                        console.log("......", "Upload Failed")
                        setError("Update fail. Please check again")
                    }
                    else {
                        console.log("......", "Upload Successful")
                        setError("Update success. Reload page after")
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    }
                })
    } 
    return (
        <Fragment>
            <SelfEditForm
                handleFormClose={props.handleFormClose}
                title="Cập nhật thông tin"
                listItem={editListItem}
                confirmText="Cập nhật"
                gender={gender ? gender : null}
                changeGender={genderHandler}
                confirmHandler = {onConfirm}
                alert={error}>
            </SelfEditForm>
        </Fragment>
    )
}