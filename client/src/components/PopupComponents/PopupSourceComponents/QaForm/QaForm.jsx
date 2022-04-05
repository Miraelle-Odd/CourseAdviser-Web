import React, { useState } from 'react'
import './QaForm.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';

const sortItems_Topic = [
    {
        value: 0,
        displayText: "Khóa học"
    },
    {
        value: 1,
        displayText: "Trung tâm"
    }
]
const sortItems_Sub1_0 = [
    {
        value: 0,
        displayText: "IELTS"
    },
    {
        value: 1,
        displayText: "TOEIC"
    },
    {
        value: 2,
        displayText: "Speaking"
    },
    {
        value: 3,
        displayText: "Kids"
    }
]
const sortItems_Sub1_1 = [
    {
        value: 0,
        displayText: "Giới thiệu"
    },
    {
        value: 1,
        displayText: "Lịch sử"
    },
    {
        value: 2,
        displayText: "Giảng dạy"
    },
    {
        value: 3,
        displayText: "Thành tích"
    }
]
const sortItems_Sub2 = [
    {
        value: 0,
        displayText: "Học phí"
    },
    {
        value: 1,
        displayText: "Bảo lưu"
    }
]
const sortItems_Sub2Null = [
    {
        value: 0,
        displayText: "Không"
    }
]
export default function QaForm(props) {
    const [inputValue, setInputValue] = useState();
    const [sub1, setSub1] = useState(sortItems_Sub1_0);
    const [sub2, setSub2] = useState(sortItems_Sub2);

    const sortHandler_Main = (e) => {
        console.log(e.target.value);
        //Handle chosen sort option code
        if (e.target.value == 1) {
            setSub1(sortItems_Sub1_1)
            setSub2(sortItems_Sub2Null)
        } else {
            setSub1(sortItems_Sub1_0)
            setSub2(sortItems_Sub2)
        }

    }
    const sortHandler_Sub = (e) => {
        console.log(e.target.value);
        //Handle chosen sort option code
    }
    return (
        <Fragment>
            <div className='qa-form-contain'>
                <div className='edit-form-close qa-form-close' >
                    <FontAwesomeIcon className='edit-form-close-icon' icon={['fas', 'xmark']} onClick={props.handleFormClose} />
                </div>
                <div className='qa-form-title-contain'>
                    <p className='qa-form-title'>{props.title}</p>
                    <p className='qa-form-subtitle'>{props.subTitle}</p>
                </div>
                <div className='qa-form-body'>
                    <div className='qa-form-left-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề chính</p>
                            <SortComboBox
                                onChange={sortHandler_Main}
                                customClassName="sort-position margin-right-63 sort-qa"
                                items={sortItems_Topic}>
                            </SortComboBox>
                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề phụ 1</p>
                            <SortComboBox
                                onChange={sortHandler_Sub}
                                customClassName="sort-position margin-right-63 sort-qa"
                                items={sub1}>
                            </SortComboBox>
                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Chủ đề phụ 2</p>
                            <SortComboBox
                                onChange={sortHandler_Sub}
                                customClassName="sort-position margin-right-63 sort-qa"
                                items={sub2}>
                            </SortComboBox>
                        </div>
                    </div>
                    <div className='qa-form-right-contain'>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Câu hỏi</p>
                            <textarea
                                className='qa-form-input'
                                placeholder='XXX xxx XXX'>
                            </textarea>
                        </div>
                        <div className='edit-form-item create-form-item'>
                            <p className='edit-form-item-title create-form-item-position'>Trả lời</p>
                            <textarea
                                className='qa-form-input'
                                placeholder='XXX xxx XXX'>
                            </textarea>
                        </div>
                    </div>

                </div>
                <div className='qa-form-confirm-contain'>
                    <button className='edit-form-confirm-button'>{props.confirmText}</button>
                </div>
            </div>
        </Fragment>
    )
}