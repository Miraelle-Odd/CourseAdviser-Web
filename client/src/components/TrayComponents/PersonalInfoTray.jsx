import React from 'react'
import './PersonalInfoTray.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagePlaceHolder from '../../assets/icons/personal_avatar.png'

const PersonalInfoItem = props => {
    return (
        <div
            className={'personal-info-tray-item' + (props.isLast ? ' is-last' : '') + (props.openForm ? ' open-form' : '')}
            onClick={props.openFormFun}
        >
            <span class="field">{props.fieldName}</span>
            <span class="value">{props.fieldValue}</span>
            {
                props.openForm ?
                    <span class="icon">
                        <FontAwesomeIcon icon={['fas', 'chevron-right']}></FontAwesomeIcon>
                    </span>
                    : ""
            }

        </div>
    )
}

const PersonalInfoTray = props => {
    return (
        <div className='personal-info-tray'>
            <div className='tray-string-info'>
                <div className='tray-header'>
                    <span className='title'>{props.title}</span>
                    <span className='subtitle'>{props.subtitle}</span>
                </div>
                <div className={'tray-items' + (props.image? ' no-padding-right' : '')}>
                    {
                        props.items ? props.items.map((item, index) => {
                            return (
                                <PersonalInfoItem
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
                            <img src={imagePlaceHolder} className='image-display'></img>
                            <span className='image-browse'>
                                <FontAwesomeIcon icon={['fas', 'camera']}></FontAwesomeIcon>
                            </span>
                        </div>
                        <span className='image-note'>Ảnh đại diện</span>
                    </div>
                    : ""
            }

        </div>
    )
}

export default PersonalInfoTray;