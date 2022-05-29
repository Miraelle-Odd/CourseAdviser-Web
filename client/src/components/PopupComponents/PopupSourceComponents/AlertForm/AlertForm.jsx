import React, { useState } from 'react'
import './AlertForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactModal from 'react-modal';
import CountdownText from '../../../TrayComponents/CountDownComponents/CountdownText';

export default function AlertForm(props) {
    return (
        <Fragment>
            <div className='alert-form-contain'>
                <div className='alert-form-close' onClick={props.onClose}>
                    <FontAwesomeIcon className='alert-form-icon' icon={['fas', 'xmark']}></FontAwesomeIcon>
                </div>
                <div className='alert-form-body'>
                    <p className='alert-form-title'>{props.title}</p>
                    <p className='alert-form-subtitle'>{props.subTitle}</p>
                    <img className='alert-form-img' src={props.src}></img>
                    {
                        !props.isYesNo ?
                            <button className={props.customStyle} onClick={props.onClose}>Đóng</button>
                            :
                            <div className='add-text'>
                                {
                                    props.alert ?
                                        <p className='popup-alert-text aler-form'>
                                            {props.alert}
                                            <CountdownText></CountdownText>
                                            seconds
                                        </p>
                                        :
                                        <p className='popup-alert-text aler-form'>
                                            {props.alert}
                                        </p>
                                }
                                <div className='alert-form-yesno' >

                                    <button className='alert-form-yes' onClick={props.onYesClick}>Có</button>
                                    <button className='alert-form-no' onClick={props.onClose}>Không</button>
                                </div>
                            </div>

                    }
                </div>
            </div>
        </Fragment>
    )
}