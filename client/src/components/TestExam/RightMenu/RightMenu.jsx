import React, { useEffect, useState } from 'react'
import PagingTask from '../MenuItem/PagingTask'
import SelectItem from '../MenuItem/SelectItem'
import TimeRemain from '../MenuItem/TimeRemain'
import './RightMenu.css'
import { ExamTask, ExamType } from '../../../pages/Exam/Task.enum'

export default function RightMenu(props) {
    const [type, setType] = useState('listening')
    useEffect(() => {
        if(props.type == ExamType.Reading) {
            setType('reading')
        }
    },[])

    return (
        <div className="right-menu-container">
            <div className="right-menu-answer-sheet">
                <div className='right-menu-title'>
                    <p className='right-menu-title-text'>A</p>
                    <p className='right-menu-title-text'>B</p>
                    <p className='right-menu-title-text'>C</p>
                    <p className='right-menu-title-text'>D</p>
                </div>
                <div className='right-menu-line'>
                </div>
                <div className='right-menu-select-area'>
                    {
                        props.indexList?.map((item, index) => {
                            return (
                                <SelectItem
                                    key={index}
                                    no={item.item_no}
                                ></SelectItem>
                            )
                        })
                    }
                </div>

            </div>
            <TimeRemain type={type} endTimeHandle={props.endTimeHandle}></TimeRemain>
            <PagingTask current={props.current} onPrev={props.onPrev} onNext={props.onNext}></PagingTask>
        </div>

    )
}