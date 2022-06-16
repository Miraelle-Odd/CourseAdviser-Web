import React, { useState } from 'react'
import './PersonalInfoTray.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagePlaceHolder from '../../assets/icons/personal_avatar.png'

const PersonalInfoItem = props => {
    return (
        <div
            className={'personal-info-tray-item' + (props.isLast ? ' is-last' : '') + (props.openForm ? ' open-form' : '')}
            onClick={props.openFormFun}
        >
            <span className="field">{props.fieldName}</span>
            <span className="value">{props.fieldValue}</span>
            {
                props.openForm ?
                    <span className="icon">
                        <FontAwesomeIcon icon={['fas', 'chevron-right']}></FontAwesomeIcon>
                    </span>
                    : ""
            }

        </div>
    )
}

const PersonalInfoTray = props => {
    const openImageBrowser = () => {
        document.getElementById('avatar-change-btn_image-browser').click()
    }
    return (
        <div className='personal-info-tray'>
            <div className='tray-string-info'>
                <div className='tray-header'>
                    <span className='title'>{props.title}</span>
                    <span className='subtitle'>{props.subtitle}</span>
                </div>
                <div className={'tray-items' + (props.image ? ' no-padding-right' : '')}>
                    {
                        props.items ? props.items.map((item, index) => {
                            return (
                                <PersonalInfoItem
                                    key={index}
                                    fieldName={item.fieldName}
                                    fieldValue={item.fieldValue}
                                    openForm={item.openForm}
                                    isLast={item.isLast}
                                    openFormFun={item.openFormFun}
                                ></PersonalInfoItem>
                            )
                        }) : ""
                    }
                </div>
            </div>
            {
                props.image ?
                    <div className='image-container'>
                        <div className='image'>
                            <img src={props.avatar ? props.avatar : imagePlaceHolder} className='image-display'></img>
                            <span className={'avatar-change-btn'+ (props.avatarBtnShow != "default"? " hide" : "")} onClick={openImageBrowser}>
                                <FontAwesomeIcon icon={['fas', 'camera']}></FontAwesomeIcon>
                            </span>
                            <span className={'avatar-confirm-btn' + (props.avatarBtnShow != "changed"? " hide" : "")} onClick={props.onAvatarConfirm}>
                                <FontAwesomeIcon icon={['fas', 'check']}></FontAwesomeIcon>
                            </span>
                            <span className={'avatar-cancel-btn'  + (props.avatarBtnShow != "changed"? " hide" : "")} onClick={props.onAvatarCancel}>
                                <FontAwesomeIcon icon={['fas', 'times']}></FontAwesomeIcon>
                            </span>
                            <input id="avatar-change-btn_image-browser" className='image-browse' type="file" accept="image/*"
                                onChange={props.onAvatarChange}
                            ></input>
                        </div>
                        <span className='image-note'>Ảnh đại diện</span>
                    </div>
                    : ""
            }

        </div>
    )
}

export default PersonalInfoTray;