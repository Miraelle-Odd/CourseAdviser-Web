import React, { useState } from 'react'
import './SelfEditForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EyeSwitch from '../../../SwitchComponents/PasswordPopup/EyeSwitch';
export default function SelfEditForm(props) {
    const [inputValue, setInputValue] = useState();
    const [cbValue, setCbValue] = useState("female");
    const [toggleEye, setToggleEye] = useState(['fas', 'eye-slash']);
    const [inputType, setInputType] = useState("password");

    let changeVisibilityHandler = () => {
        if (toggleEye[1] === 'eye') {
            setToggleEye(['fas', 'eye-slash']);
            setInputType("password");
        }
        if (toggleEye[1] === 'eye-slash') {
            setToggleEye(['fas', 'eye']);
            setInputType("text");
        }
    };
    return (
        <Fragment>
            <div className='edit-form-contain'>
                <div className='edit-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose}/>
                </div>
                <div className='edit-form-body'>
                    <p className='edit-form-title'>{props.title}</p>
                    {
                        props.listItem.map((item, index) => !item.isGenderSelect ? (
                            <div className='edit-form-item'>
                                <p className='edit-form-item-title'>{item.title}</p>
                                {
                                    !item.isPasswordInput ?
                                        <div className='edit-form-input-contain'>

                                            <input
                                                className='edit-form-input'
                                                value={inputValue}
                                                placeholder={item.inputHint}
                                                type={item.isPasswordInput ? inputType : "text"} />

                                            <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                                        </div>
                                        :
                                        <EyeSwitch
                                            inputValue={inputValue}
                                            inputHint={item.inputHint}>
                                        </EyeSwitch>
                                }
                            </div>
                        ) : (
                            <div className='edit-form-item'>
                                <p className='edit-form-item-title'>Giới tính:</p>
                                <div className='edit-form-gender-contain'>
                                    <input className='edit-form-checkbox'
                                        value={cbValue}
                                        type={"checkbox"} />
                                    <button className={cbValue === 'female' ? 'edit-form-gender-button gender-female gender-selected' : 'edit-form-gender-button gender-female'}
                                        onClick={() => setCbValue('female')}>
                                        <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'venus']} />
                                    </button>
                                    <input className='edit-form-checkbox'
                                        value={cbValue}
                                        type={"checkbox"} />
                                    <button className={cbValue === 'male' ? 'edit-form-gender-button gender-selected' : 'edit-form-gender-button'}
                                        onClick={() => setCbValue('male')}>
                                        <FontAwesomeIcon className='edit-form-gender-icon' icon={['fas', 'mars']} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className='edit-form-confirm-contain'>
                        <button className='edit-form-confirm-button'>{props.confirmText}</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}