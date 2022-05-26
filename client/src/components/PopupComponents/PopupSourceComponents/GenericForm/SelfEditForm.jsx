import React, { useEffect, useState } from 'react'
import './SelfEditForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EyeSwitch from '../../../SwitchComponents/PasswordPopup/EyeSwitch';
export default function SelfEditForm(props) {
    const [inputValue, setInputValue] = useState();
    const [cbValue, setCbValue] = useState();

    useEffect(() => {
        setCbValue(props.gender)
        
    }, [props.gender])
    return (
        <Fragment>
            <div className='edit-form-contain'>
                <div className='edit-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='edit-form-body'>
                    <p className='edit-form-title'>{props.title}</p>
                    {
                        props.listItem.map((item, index) => !item.isGenderSelect ? (
                            <div className='edit-form-item' key={index}>
                                <p className='edit-form-item-title'>{item.title}</p>
                                {
                                    !item.isPasswordInput ?
                                        <div className='edit-form-input-contain'>
                                            <input
                                                className='edit-form-input'
                                                value={item.itemValue}
                                                placeholder={item.inputHint}
                                                onChange={item.onChange}
                                                type={"text"}/>
                                            <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                                        </div>
                                        :
                                        <EyeSwitch
                                            inputValue={item.inputValue}
                                            inputHint={item.inputHint}
                                            onChange={item.onChange}>
                                        </EyeSwitch>
                                }
                            </div>
                        ) : (
                            <div className='edit-form-item' key={index}>
                                <p className='edit-form-item-title'>Giới tính:</p>
                                <div className='edit-form-gender-contain'>
                                    <input className='edit-form-checkbox'
                                        value={cbValue}
                                        type={"checkbox"}
                                        readOnly={item.readOnly} />
                                    <button className={item.readOnly ? cbValue == 'female' ? "edit-form-gender-button gender-selected gender-female button-disable" : "edit-form-gender-button gender-female button-disable" : cbValue == 'female' ? 'edit-form-gender-button gender-female gender-selected' : 'edit-form-gender-button gender-female'}
                                        onClick={props.changeGender} value={0}>
                                        <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'venus']} />
                                    </button>
                                    <input className='edit-form-checkbox'
                                        value={cbValue}
                                        type={"checkbox"} />
                                    <button className={item.readOnly ? cbValue == 'male' ? "edit-form-gender-button gender-selected button-disable" : 'edit-form-gender-button button-disable' : cbValue == 'male' ? "edit-form-gender-button gender-selected" : 'edit-form-gender-button'}
                                        onClick={props.changeGender} value={1}>
                                        <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'mars']} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className='edit-form-confirm-contain'>
                        <button className='edit-form-confirm-button' onClick={props.confirmHandler}>{props.confirmText}</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}