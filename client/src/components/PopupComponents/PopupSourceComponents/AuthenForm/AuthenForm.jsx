import React, { useState } from 'react'
import './AuthenForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function AuthenForm(props) {
    const [inputValue, setInputValue] = useState();
    const [inputPassword, setInputPassword] = useState();
    const [cbRemember, setCbRemember] = useState(false);
    const [toggleEye, setToggleEye] = useState(['fas', 'eye-slash']);
    const [inputType, setInputType] = useState("password");
    const [cbChecked, setCbChecked] = useState(['fas', 'checked']);

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
    let changeCheckboxStatus = () => {
        if (cbRemember === false) {
            setCbChecked(['fas', 'checked']);
            setCbRemember(true);
            props.onRemember()

        }
        if (cbRemember === true) {
            setCbChecked(null);
            setCbRemember(false);
            props.onNotRemember()
        }
        
       
    }


    return (
        <Fragment>
            <div className='authen-form-contain'>
                <div className='authen-form-exit' >
                    <FontAwesomeIcon className='authen-form-icon exit-icon-login' icon={['fas', 'xmark']} onClick={props.handleFormClose}/>
                </div>
                <div className='authen-form-header-contain'>
                    <p className={props.titleStyle}>{props.title}</p>
                    <div className='authen-form-line'></div>
                    <p className='authen-form-header-context'>{props.subtilte}</p>
                </div>
                <div className={props.inputContainStyle}>
                    <span className='error-display'>{props.error}</span>
                    <div className='authen-form-input-border authen-form-center'>
                        <FontAwesomeIcon className='authen-form-icon' icon={props.hintIcon} />
                        <input className='authen-form-input'
                            value={props.inputValue ? props.inputValue : inputValue}
                            placeholder={props.hintInput}
                            onChange={props.onInputChange} />
                    </div>
                    {
                        props.isLoginForm ?
                            <div className='authen-form-input-border authen-form-center'>
                                <FontAwesomeIcon className='authen-form-icon' icon={['fas', 'key']} />
                                <input className='authen-form-input'
                                    value={props.inputPassword? props.inputPassword : inputPassword}
                                    placeholder="Mật khẩu"
                                    type={inputType} 
                                    onChange={props.onPwChange}/>
                                <button className="authen-form-right-eye" onClick={changeVisibilityHandler}>
                                    <FontAwesomeIcon className='authen-form-icon' icon={toggleEye} />
                                </button>
                            </div> : ""
                    }
                </div>
                {
                    props.isLoginForm ?
                        <div className='authen-form-checkbox-contain'>
                            <div className='authen-form-custom'>
                                <input className='authen-form-checkbox'
                                    checked={cbRemember}
                                    type={"checkbox"} 
                                />
                                <div className='checkbox-custom authen-form-center' onClick={changeCheckboxStatus}>
                                    <FontAwesomeIcon className='authen-form-checkbox-checked' icon={cbRemember === true ? ['fas', 'check'] : ''} />
                                </div>
                            </div>
                            <span className='authen-form-checkbox-text'>Remember me</span>
                        </div> : ""
                }

                <div className={props.buttonContainStyle}>
                    <button className='authen-form-button' onClick={props.onConfirm}>{props.textConfirm}</button>
                </div>
                <div className='authen-form-line'></div>
                {
                    props.isLoginForm ?
                        <div className='authen-form-footer-contain authen-form-center'>
                            <span className='authen-form-footer-context'>Quên mật khẩu?</span>
                            <button className='authen-form-footer-button' onClick={props.handleForgotFormOpen}>GO
                            </button>
                        </div> : ""
                }
            </div>
        </Fragment>
    )
}