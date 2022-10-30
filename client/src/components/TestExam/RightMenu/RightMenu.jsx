import React, { useEffect, useState } from 'react'
import PagingTask from '../MenuItem/PagingTask'
import SelectItem from '../MenuItem/SelectItem'
import TimeRemain from '../MenuItem/TimeRemain'
import './RightMenu.css'


export default function RightMenu(props) {
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
            <TimeRemain></TimeRemain>
            <PagingTask current={props.current} onPrev={props.onPrev} onNext={props.onNext}></PagingTask>
        </div>

    )
}