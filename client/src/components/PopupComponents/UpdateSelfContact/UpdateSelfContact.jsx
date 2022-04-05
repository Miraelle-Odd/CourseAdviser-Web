import React, { useState } from 'react'
import './UpdateSelfContact.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfEditForm from '../PopupSourceComponents/GenericForm/SelfEditForm';

const editListItem = [
    {
        title: "Số điện thoại",
        inputHint: "xxx XXXX xxx",
        icon: ['fas', 'phone-flip']
    },
    {
        title: "Vị trí",
        inputHint: "Kon Tum",
        icon: ['fas', 'location-dot']
    }
]

export default function UpdateSelfContact(props) {
    return (
        <Fragment>
            <SelfEditForm
                title="Cập nhật thông tin"
                listItem={editListItem}
                confirmText="Cập nhật"
                handleFormClose={props.handleFormClose}>
            </SelfEditForm>
        </Fragment>
    )
}