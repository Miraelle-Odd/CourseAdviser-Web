import React, { useEffect, useState } from 'react'
import './CreateForm.css'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sortItems = [
    {
        value: 0,
        displayText: "Nhân viên"
    },
    {
        value: 1,
        displayText: "Quản lý"
    }
]

export default function CreateForm(props) {
    const [inputValue, setInputValue] = useState();


    return (
        <Fragment>
            <div className='create-form-contain'>
                <div className='edit-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='create-form-body'>
                    <div className='create-form-header'>
                        <p className='create-form-title'>Tạo tài khoản mới</p>
                        <p className='create-form-text'>Nhập thông tin của nhân viên mới và ghi nhận họ vào hệ thống</p>
                    </div>
                    {
                        props.listItem.map((item, index) => !item.isPositionSelect ? (
                            <div className='edit-form-item create-form-item'>
                                <p className='edit-form-item-title'>{item.title}</p>
                                <div className='edit-form-input-contain'>
                                    <input
                                        className='edit-form-input'
                                        value={inputValue}
                                        placeholder={item.inputHint}
                                        onChange={item.onChange} />
                                    <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                                </div>
                            </div>
                        ) : (
                            <div className='edit-form-item create-form-item'>
                                <p className='edit-form-item-title create-form-item-position'>Loại tài khoản</p>
                                <SortComboBox
                                    onChange={props.test}
                                    customClassName="sort-position margin-right-63"
                                    items={sortItems}
                                    defaultValue={props.type}>
                                </SortComboBox>
                            </div>
                        ))
                    }

                </div>
                <div className='create-form-confirm-contain'>
                    <span className='alert-message'>{props.error}</span>
                    <button className='edit-form-confirm-button' onClick={props.handleFormConfirm}>Xác nhận</button>
                </div>
            </div>
        </Fragment>
    )
}