import React, { useState } from 'react'
import './ForgotPassword.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ForgotPassword({setIsShowForgot}) {
    const [inputEmail, setInputEmail] = useState();

    return (
        <Fragment>
            <div className='fgPassword-contain'>
                <div className='fgPassword-exit' onClick={setIsShowForgot}>
                    <FontAwesomeIcon className='fgPassword-icon exit-icon-fgPassword' icon={['fas', 'xmark']} />
                </div>
                <div className='fgPassword-header-contain'>
                    <p className='fgPassword-header-title'>Forgot Password?</p>
                    <div className='fgPassword-line'></div>
                    <p className='fgPassword-header-context'>Please enter your validated email</p>
                </div>
                <div className='fgPassword-input-contain'>
                    <div className='fgPassword-input-border fgPassword-center'>
                        <FontAwesomeIcon className='fgPassword-icon' icon={['fas', 'paper-plane']} />
                        <input className='fgPassword-input'
                            value={inputEmail}
                            placeholder="Validated Email" />
                    </div>
                </div>

                <div className='fgPassword-button-contain'>
                    <button className='fgPassword-button'>Confirm</button>
                </div>
                <div className='fgPassword-line'></div>

            </div>
        </Fragment>
    )
}