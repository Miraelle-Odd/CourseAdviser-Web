import React, { useEffect, useState } from 'react'
import './CourseForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import noImg from '../../../../assets/icons/post-noimg.png'
import CountdownText from '../../../TrayComponents/CountDownComponents/CountdownText';

const sortItems = [
    {
        value: 0,
        displayText: "Không"
    },
    {
        value: 1,
        displayText: "Có"
    }
]

const openImageBrowser = () => {
    document.getElementById('course-popup-item_image-browser').click()
}
export default function CourseForm(props) {
    return (
        <Fragment>
            <div className='personal-info-contain'>
                <div className='edit-form-close qa-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='personal-info-body'>
                    <div className='qa-form-title-contain'>
                        <p className='qa-form-title'>{props.title}</p>
                        <p className='qa-form-subtitle'>{props.subtitle}</p>
                    </div>
                    <div className='course-popup-main no-space-between'>
                        <div className='personal-info-col-left'>
                            {

                                props.listItemInput.map((item, index) => {
                                    return (< div className='edit-form-item course-popup-item course-info-item'>
                                        <p className='edit-form-item-title'>{item.title}</p>
                                        <div className='edit-form-input-contain'>
                                            <input
                                                className='edit-form-input'
                                                value={item.itemValue}
                                                placeholder={item.inputHint}
                                                readOnly={item.readOnly}
                                                onChange={item.onChange} />
                                        </div>
                                    </div>
                                    )
                                })
                            }

                            <div className='edit-form-item course-popup-item custom-item-margin'>
                                <p className='edit-form-item-title'>Có hỗ trợ chương trình đặc biệt:</p>
                                {
                                    props.isView ?
                                        <div className='fake-sort course-info-select'>{props.isSpecial}</div>
                                        :
                                        <SortComboBox
                                            onChange={props.selectComboBox}
                                            customClassName="sort-position margin-right-63 course-info-select"
                                            items={sortItems}
                                            defaultValue={props.type}>
                                        </SortComboBox>
                                }
                            </div>
                        </div>
                        <div className='personal-info-col-right custom-margin'>
                            <div className='edit-form-item course-popup-item course-info-item'>
                                <p className='edit-form-item-title'>Minh họa:</p>
                                <img className={'course-popup-img' + (props.isView ? "" : " updatable-img")} src={props.img ? props.img : noImg}
                                    onClick={props.isView ? () => { } : openImageBrowser}></img>
                                <input id="course-popup-item_image-browser" className="image-browser" type="file" accept="image/*"
                                    onChange={props.changeImage}
                                ></input>
                            </div>
                            <div className='edit-form-item create-form-item course-info-item'>
                                <p className='edit-form-item-title create-form-item-position'>Mô tả: </p>
                                {
                                    props.isView ?
                                        <div className='qa-form-view-text'> {props.description} </div>
                                        :
                                        <textarea
                                            className='qa-form-input'
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
                            <div className='personal-info-confirm-contain'>
                                {
                                    props.alert == "Update success. Reload page after" ?
                                        <p className='popup-alert-text'>
                                            {props.alert}
                                            <CountdownText></CountdownText>
                                            seconds
                                        </p>
                                        : <p className='popup-alert-text'>{props.alert}</p>
                                }
                                <button className='edit-form-confirm-button' onClick={props.updateHandler}>{props.textConfirm}</button>
                            </div>
                    }

                </div>

            </div>

        </Fragment >
    )
}