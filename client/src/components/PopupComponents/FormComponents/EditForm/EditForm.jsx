import React, { useState } from 'react'
import './EditForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostItemBtn from '../../../ButtonComponents/PostPage/PostItemBtn';


export default function EditForm(props) {
    const [inputValue, setInputValue] = useState();
    const [cbValue, setCbValue] = useState("female");
    const [selectGenderFemale, setSelectGenderFemale] = useState(true);
    const [selectGenderMale, setSelectGenderMale] = useState(false);
    return (
        <Fragment>
            <div className='edit-form-contain'>
                <div className='edit-form-close'>
                    <FontAwesomeIcon className='edit-form-icon' icon={['fas', 'xmark']} />
                </div>
                <div className='edit-form-body'>
                    <p className='edit-form-title'>{props.title}</p>
                    {props.listItem.map((item, index) => !item.isGenderSelect ? (
                        <div className='edit-form-item'>
                            <p className='edit-form-item-title'>{item.title}</p>
                            <div className='edit-form-input-contain'>
                                <input
                                    className='edit-form-input'
                                    value={inputValue}
                                    placeholder="Hint" />
                                <FontAwesomeIcon className='edit-form-input-icon' icon={item.icon} />
                            </div>
                        </div>
                    ) : (
                        <div className='edit-form-item'>
                            <p className='edit-form-item-title'>Giới tính:</p>
                            <div>
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
                    ))}
                    <div className='edit-form-confirm-contain'>
                        <button className='authen-form-confirm-button'>{props.confirmText}</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}