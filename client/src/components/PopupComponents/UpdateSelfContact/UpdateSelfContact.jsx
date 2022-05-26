import React, { useEffect, useState } from 'react'
import './UpdateSelfContact.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';
import axios from 'axios';



export default function UpdateSelfContact(props) {
    const [phone, setPhone] = useState();
    const [location, setLocation] = useState();

    useEffect(() => {
        setPhone(props.phone)
        setLocation(props.location)
    }, [props])

    const editListItem = [
        {
            title: "Số điện thoại",
            inputHint: "Số điện thoại",
            itemValue: phone,
            icon: ['fas', 'phone-flip'],
            onChange: (e) => { setPhone(e.target.value) }

        },
        {
            title: "Vị trí",
            inputHint: "Vị trí",
            itemValue: location,
            icon: ['fas', 'location-dot'],
            onChange: (e) => { setLocation(e.target.value) }
        }
    ]
    const onConfirm = async () => {
        const params = {
            account_id: props.idItem,
            phone: phone,
            location: location
        }
        console.log(params)
        axios.post("http://localhost:8080/Accounts/update-account/", params)
                .then(res => {
                    if (res.data[0] == 0) {
                        console.log("......", "Upload Failed")

                    }
                    else {
                        console.log("......", "Upload Successful")
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    }
                })
    } 
    return (
        <Fragment>
            <SelfEditForm
                title="Cập nhật thông tin"
                listItem={editListItem}
                confirmText="Cập nhật"
                handleFormClose={props.handleFormClose}
                confirmHandler={onConfirm}>
            </SelfEditForm>
        </Fragment>
    )
}