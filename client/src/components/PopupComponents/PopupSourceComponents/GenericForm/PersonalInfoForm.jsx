import React, { useEffect, useState } from 'react'
import './PersonalInfoForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import personal_avatar from '../../../../assets/icons/personal_avatar.png'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';

export default function PersonalInfoForm(props) {
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
    const [inputValue, setInputValue] = useState();
    const [cbValue, setCbValue] = useState();

    const openImageBrowser = () => {
        document.getElementById('personal-info-avatar-right_image-browser').click()
    }

    useEffect(() => {
        setCbValue(props.gender)
    }, [props.gender])
    return (
        <Fragment>
            <div className='personal-info-contain'>
                <div className='edit-form-close qa-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='personal-info-body'>
                    <div className='personal-info-header'>
                        <div className='personal-info-header-left'>
                            <p className='personal-info-title'>{props.title}</p>
                            <p className='personal-info-text'>{props.subtitle}</p>
                        </div>
                        <div className='personal-info-avatar-right'>
                            {
                                props.isView ? 
                                <img className="personal-info-avatar" src={props.avatar ? props.avatar : personal_avatar}></img>
                                :
                                    <div>
                                        <input id="personal-info-avatar-right_image-browser" className="image-browser" type="file" accept="image/*"
                                            onChange={props.changeAvatar}
                                        ></input>
                                        <img className="personal-info-avatar browsable" src={props.avatar ? props.avatar : personal_avatar}
                                            onClick={openImageBrowser}
                                        ></img>
                                    </div>
                            }                            
                        </div>
                    </div>
                    <div className='personal-info-main'>
                        <div className='personal-info-col-left'>

                            {props.listItemLeft.map((item, index) => !item.isPositionSelect ? (
                                <div className='edit-form-item personal-info-item' key={index}>
                                    <p className='edit-form-item-title'>{item.title}</p>
                                    <div className='edit-form-input-contain'>
                                        <input
                                            className='edit-form-input'
                                            value={item.itemValue}
                                            placeholder={item.inputHint}
                                            readOnly={item.readOnly}
                                            onChange={item.onChange} />
                                        <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                                    </div>
                                </div>
                            ) : (
                                <div className='edit-form-item personal-info-item' key={index}>
                                    <p className='edit-form-item-title'>Loại tài khoản</p>
                                    {
                                        item.readOnly ?
                                            <div className='edit-form-position-view'>{item.position}</div>
                                            :
                                            <SortComboBox
                                                onChange={props.test}
                                                customClassName="sort-position margin-right-63 personal-info-item"
                                                items={sortItems}
                                                defaultValue={props.type}>
                                            </SortComboBox>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className='personal-info-col-right'>
                            {props.listItemRight.map((item, index) => !item.isGenderSelect ? (
                                <div className='edit-form-item personal-info-item' key={index}>
                                    <p className='edit-form-item-title'>{item.title}</p>
                                    <div className='edit-form-input-contain'>
                                        <input
                                            className='edit-form-input'
                                            value={item.itemValue}
                                            placeholder={item.inputHint}
                                            readOnly={item.readOnly}
                                            onChange={item.onChange} />
                                        <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                                    </div>
                                </div>
                            ) : (
                                <div className='edit-form-item' key={index}>
                                    <p className='edit-form-item-title'>Giới tính:</p>
                                    <div className='edit-form-gender-contain'>
                                        <input className='edit-form-checkbox'
                                            value={cbValue}
                                            type={"checkbox"}
                                            readOnly={item.readOnly} />
                                        <button className={item.readOnly ? cbValue === 'female' ? "edit-form-gender-button gender-selected gender-female button-disable" : "edit-form-gender-button gender-female button-disable" : cbValue === 'female' ? 'edit-form-gender-button gender-female gender-selected' : 'edit-form-gender-button gender-female'}
                                            onClick={props.changeGender} value={0}>
                                            <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'venus']} />
                                        </button>
                                        <input className='edit-form-checkbox'
                                            value={cbValue}
                                            type={"checkbox"} />
                                        <button className={item.readOnly ? cbValue === 'male' ? "edit-form-gender-button gender-selected button-disable" : 'edit-form-gender-button button-disable' : cbValue === 'male' ? "edit-form-gender-button gender-selected" : 'edit-form-gender-button'}
                                            onClick={props.changeGender} value={1}>
                                            <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'mars']} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {
                        props.isView ?
                            ""
                            :
                            <div className='personal-info-confirm-contain'>
                                <button className='edit-form-confirm-button' onClick={props.updateHandler}>Cập nhật</button>
                            </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}