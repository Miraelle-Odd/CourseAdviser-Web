import React, { useState } from 'react'
import './Login.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Login({ setIsShowLogin, handleForgotOpen}) {
    const [inputUsername, setInputUsername] = useState();
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
        }
        if (cbRemember === true) {
            setCbChecked(null);
            setCbRemember(false);
        }
    }


    return (
        <Fragment>
            <div className='login-contain'>
                <div className='login-exit' onClick={setIsShowLogin}>
                    <FontAwesomeIcon className='login-icon exit-icon-login' icon={['fas', 'xmark']} />
                </div>
                <div className='login-header-contain'>
                    <p className='login-header-title'>Welcome!</p>
                    <div className='login-line'></div>
                    <p className='login-header-context'>Log in to continue</p>
                </div>
                <div className='login-input-contain'>
                    <div className='login-input-border login-center'>
                        <FontAwesomeIcon className='login-icon' icon={['fas', 'user']} />
                        <input className='login-input'
                            value={inputUsername}
                            placeholder="Username" />
                    </div>
                    <div className='login-input-border login-center'>
                        <FontAwesomeIcon className='login-icon' icon={['fas', 'key']} />
                        <input className='login-input'
                            value={inputPassword}
                            placeholder="Password"
                            type={inputType} />
                        <button className="login-right-eye" onClick={changeVisibilityHandler}>
                            <FontAwesomeIcon className='login-icon' icon={toggleEye} />
                        </button>
                    </div>
                </div>
                <div className='login-checkbox-contain'>
                    <div className='login-custom'>
                        <input className='login-checkbox'
                            value={cbRemember}
                            type={"checkbox"} />
                        <div className='checkbox-custom login-center' onClick={changeCheckboxStatus}>
                            <FontAwesomeIcon className='login-checkbox-checked' icon={cbRemember === true ? ['fas', 'check'] : ''} />
                        </div>
                    </div>
                    <span className='login-checkbox-text'>Remember me</span>
                </div>
                <div className='login-button-contain'>
                    <button className='login-button'>Log In</button>
                </div>
                <div className='login-line'></div>
                <div className='login-footer-contain login-center'>
                    <span className='login-footer-context'>Forgot Password?</span>
                    <button className='login-footer-button' onClick={handleForgotOpen}>GO
                    </button>
                </div>
            </div>
        </Fragment>
    )
}