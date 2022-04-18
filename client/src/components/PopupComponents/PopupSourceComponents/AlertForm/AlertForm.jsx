import React, { useState } from 'react'
import './AlertForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactModal from 'react-modal';

export default function AlertForm(props) {
    // const [open, setOpen] = useState(props.isOpen)
    return (
        <Fragment>
            <ReactModal
                className='alert-form-contain'
                isOpen = {props.isOpen}
                overlayClassName="alert-form-overlay"
            >
                <div className='alert-form-close' onClick = {props.onClose}>
                    <FontAwesomeIcon className='alert-form-icon' icon={['fas', 'xmark']}></FontAwesomeIcon>
                </div>
                <div className='alert-form-body'>
                    <p className='alert-form-title'>{props.title}</p>
                    <p className='alert-form-subtitle'>{props.subTitle}</p>
                    <img className='alert-form-img' src={props.src}></img>
                    {
                        !props.isYesNo ?
                            <button className={props.customStyle} onClick = {props.onClose}>Đóng</button>
                            :
                            <div className='alert-form-yesno'>
                                <button className='alert-form-yes'>Có</button>
                                <button className='alert-form-no'>Không</button>
                            </div>
                    }
                </div>
            </ReactModal>
        </Fragment>
    )
}