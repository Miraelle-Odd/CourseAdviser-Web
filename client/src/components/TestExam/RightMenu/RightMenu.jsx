import React from 'react'
import PagingTask from '../MenuItem/PagingTask'
import SelectItem from '../MenuItem/SelectItem'
import TimeRemain from '../MenuItem/TimeRemain'
import './RightMenu.css'


export default function RightMenu(props) {
    return (
        <div className="right-menu-container">
            <div className="right-menu-answer-sheet">
                <div className='right-menu-title select-item-center'>
                    <p className='right-menu-title-text text-first'>A</p>
                    <p className='right-menu-title-text'>B</p>
                    <p className='right-menu-title-text'>C</p>
                    <p className='right-menu-title-text'>D</p>
                </div>
                <div className='right-menu-line'>
                </div>
                <div className='right-menu-select-area right-menu-center'>
                    <p className='right-menu-placeholder'></p>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                    <SelectItem></SelectItem>
                </div>
                
            </div>
            <TimeRemain></TimeRemain>
            <PagingTask></PagingTask>
        </div>

    )
}