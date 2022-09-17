import React from 'react'
import './RequestForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import CountdownText from '../../../TrayComponents/CountDownComponents/CountdownText';


export default function RequestForm(props) {
    return (
        <Fragment>
            <div className='qa-form-contain'>
                <div className='edit-form-close qa-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='qa-form-title-contain'>
                    <p className='qa-form-title'>{props.title}</p>
                    <p className='qa-form-subtitle'>{props.subTitle}</p>
                </div>
                <div className='qa-form-body'>
                    <div className='request-form-left-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Nội dung yêu cầu</p>
                            <div className='request-form-view-text'> {props.question} </div>
                        </div>
                    </div>
                    <div className='request-form-right-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Ghi chú</p>
                            {
                                props.isView ?
                                    <div className='request-form-view-text'> {props.answer} </div>
                                    :
                                    <textarea
                                        className='request-form-input'
                                        placeholder='XXX xxx XXX'
                                        value={props.answer}
                                        onChange={props.inputAnswer}>
                                    </textarea>
                            }
                        </div>
                    </div>
                </div>
                {
                    props.isView ? ""
                        :
                        <div className='qa-form-confirm-contain'>
                            {
                                props.alert == "Update success. Reload page after" ?
                                    <p className='popup-alert-text'>
                                        {props.alert}
                                        <CountdownText></CountdownText>
                                        seconds
                                    </p>
                                    : <p className='popup-alert-text'>{props.alert}</p>
                            }
                            <button className='edit-form-confirm-button' onClick={props.handleConfirm}>{props.confirmText}</button>
                        </div>
                }

            </div>
        </Fragment>
    )
}