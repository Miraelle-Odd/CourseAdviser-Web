import React, { useState } from 'react'
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
    const [cbValue, setCbValue] = useState(props.gender);

    const sortHandler = (e) => {
        console.log(e.target.value);
        //Handle chosen sort option code
    }
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
                            <img className="personal-info-avatar" src={props.avatar ? props.avatar : personal_avatar}></img>
                        </div>
                    </div>
                    <div className='personal-info-main'>
                        <div className='personal-info-col-left'>

                            {props.listItemLeft.map((item, index) => !item.isPositionSelect ? (
                                <div className='edit-form-item personal-info-item'>
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
                                <div className='edit-form-item personal-info-item'>
                                    <p className='edit-form-item-title'>Loại tài khoản</p>
                                    {
                                        item.readOnly ?
                                            <div className='edit-form-position-view'>{item.position}</div>
                                            :
                                            <SortComboBox
                                                onChange={sortHandler}
                                                customClassName="sort-position margin-right-63 personal-info-item"
                                                items={sortItems}
                                            ></SortComboBox>
                                    }

                                </div>
                            ))}
                        </div>
                        <div className='personal-info-col-right'>
                            {props.listItemRight.map((item, index) => !item.isGenderSelect ? (
                                <div className='edit-form-item personal-info-item'>
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
                                <div className='edit-form-item'>
                                    <p className='edit-form-item-title'>Giới tính:</p>
                                    <div className='edit-form-gender-contain'>
                                        <input className='edit-form-checkbox'
                                            value={cbValue}
                                            type={"checkbox"}
                                            readOnly={item.readOnly} />
                                        <button className={item.readOnly ? cbValue === 'female' ? "edit-form-gender-button gender-selected gender-female button-disable" : "edit-form-gender-button gender-female button-disable" : cbValue === 'female' ? 'edit-form-gender-button gender-female gender-selected' : 'edit-form-gender-button gender-female'}
                                            onClick={() => setCbValue('female')}>
                                            <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'venus']} />
                                        </button>
                                        <input className='edit-form-checkbox'
                                            value={cbValue}
                                            type={"checkbox"} />
                                        <button className={item.readOnly ? cbValue === 'male' ? "edit-form-gender-button gender-selected button-disable" : 'edit-form-gender-button button-disable' : cbValue === 'male' ? "edit-form-gender-button gender-selected" : 'edit-form-gender-button'}
                                            onClick={() => setCbValue('male')}>
                                            <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'mars']} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='personal-info-confirm-contain'>
                        <button className='edit-form-confirm-button'>Cập nhật</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}