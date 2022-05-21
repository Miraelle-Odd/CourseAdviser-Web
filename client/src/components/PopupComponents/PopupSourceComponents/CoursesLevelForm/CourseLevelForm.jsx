import React, { useEffect, useState } from 'react'
import './CourseLevelForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import noImg from '../../../../assets/icons/post-noimg.png'


export default function CourseLevelForm(props) {
    return (
        <Fragment>
            <div className='personal-info-contain'>
                <div className='edit-form-close qa-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='personal-info-body course-level-body'>
                    <div className='qa-form-title-contain'>
                        <p className='qa-form-title'>{props.title}</p>
                        <p className='qa-form-subtitle'>{props.subtitle}</p>
                    </div>
                    <div className='course-popup-main'>
                        <div className='personal-info-col-left'>

                            <div className='edit-form-item course-popup-item course-info-item'>
                                <p className='edit-form-item-title course-level-title'>Tên cấp học:</p>
                                <div className='edit-form-input-contain'>
                                    <input
                                        className='edit-form-input'
                                        value={props.levelName}
                                        placeholder="Nhập tên cấp học mới..."
                                        readOnly={props.isView}
                                        onChange={props.levelOnChange}
                                    />
                                </div>
                            </div>

                            {

                                props.listItemInput.map((item, index) => {
                                    return (
                                        <div className='course-level-main'>
                                            <p className='edit-form-item-title course-level-title'>{item.title}</p>
                                            <div className='flex-contain'>
                                                <div className='course-level-child'>
                                                    < div className='edit-form-item course-level-item'>

                                                        <div className='edit-form-input-contain'>
                                                            <input
                                                                className='edit-form-input'
                                                                value={item.itemValue1}
                                                                placeholder={item.inputHint1}
                                                                readOnly={item.readOnly}
                                                                onChange={item.onChange1}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='course-level-child'>
                                                    < div className='edit-form-item course-level-item'>
                                                        <div className='edit-form-input-contain'>
                                                            <input
                                                                className='edit-form-input'
                                                                value={item.itemValue2}
                                                                placeholder={item.inputHint2}
                                                                readOnly={item.readOnly}
                                                                onChange={item.onChange2}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='personal-info-col-right course-level-margin'>
                            <div className='edit-form-item course-popup-item course-level-combobox'>
                                <p className='edit-form-item-title'>Có hỗ trợ chương trình đặc biệt:</p>
                                {
                                    props.isView ?
                                        <div className='fake-sort course-info-select'>{props.comboBoxValue}</div>
                                        :
                                        <SortComboBox
                                            onChange={props.selectComboBox}
                                            customClassName="sort-position margin-right-63 course-info-select"
                                            items={props.sortItems}
                                            defaultValue={props.type}>
                                        </SortComboBox>
                                }
                            </div>
                            <div className='edit-form-item create-form-item course-level-combobox'>
                                <p className='edit-form-item-title create-form-item-position'>Mô tả: </p>
                                {
                                    props.isView ?
                                        <div className='qa-form-view-text course-level-textarea'> {props.description} </div>
                                        :
                                        <textarea
                                            className='qa-form-input course-level-textarea'
                                            placeholder='XXX xxx XXX'
                                            value={props.description}
                                            onChange={props.inputDescription}>
                                        </textarea>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        props.isView ? ""
                            :
                            <div className='personal-info-confirm-contain custom-confirm'>
                                <button className='edit-form-confirm-button' onClick={props.updateHandler}>{props.textConfirm}</button>
                            </div>
                    }
                </div>
            </div>
        </Fragment >
    )
}