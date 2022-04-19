import React, { useState } from 'react'
import './EyeSwitch.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EyeSwitch(props) {
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
            <div className='edit-form-input-contain'>
                <input
                    className='edit-form-input'
                    value={props.inputValue}
                    placeholder={props.inputHint}
                    type={inputType}
                    onChange={props.onChange} />
                <button className="edit-form-right-eye" onClick={changeVisibilityHandler}>
                    <FontAwesomeIcon className='edit-form-input-icon' icon={toggleEye} />
                </button>
            </div>
        </Fragment>
    )
}