import React, { useEffect, useState } from 'react'
import './QaForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';


export default function QaForm(props) {
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
                    <div className='qa-form-left-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề chính</p>
                            {
                                props.isView ?
                                    <div className='qa-form-view'>{props.sortItems_Topic}</div>
                                    :
                                    <SortComboBox
                                        onChange={props.sortHandler_Main}
                                        customClassName="sort-position margin-right-63 sort-qa"
                                        items={props.sortItems_Topic}
                                        defaultValue={props.typeMain}>
                                    </SortComboBox>
                            }

                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề phụ 1</p>
                            {
                                props.isView ?
                                    <div className='qa-form-view'>{props.sortItems_Sub1}</div>
                                    :
                                    <SortComboBox
                                        onChange={props.sortHandler_Sub1}
                                        customClassName="sort-position margin-right-63 sort-qa"
                                        items={props.sub1}
                                        defaultValue={props.typeSub1}>
                                    </SortComboBox>
                            }

                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề phụ 2</p>
                            {
                                props.isView ?
                                    <div className='qa-form-view'>{props.sortItems_Sub2}</div>
                                    :
                                    <SortComboBox
                                        onChange={props.sortHandler_Sub2}
                                        customClassName="sort-position margin-right-63 sort-qa"
                                        items={props.sub2}
                                        defaultValue={props.typeSub2}>
                                    </SortComboBox>
                            }
                        </div>
                    </div>
                    <div className='qa-form-right-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Câu hỏi</p>
                            {
                                props.isView ?
                                    <div className='qa-form-view-text'> {props.question} </div>
                                    :
                                    <textarea
                                        className='qa-form-input'
                                        placeholder='XXX xxx XXX'
                                        value={props.question}
                                        onChange={props.inputQuestion}>
                                    </textarea>
                            }

                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Trả lời</p>
                            {
                                props.isView ?
                                    <div className='qa-form-view-text'> {props.answer} </div>
                                    :
                                    <textarea
                                        className='qa-form-input'
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
                        <div className='qa-form-confirm-contain' onClick={props.handleConfirm}>
                            <button className='edit-form-confirm-button'>{props.confirmText}</button>
                        </div>
                }

            </div>
        </Fragment>
    )
}