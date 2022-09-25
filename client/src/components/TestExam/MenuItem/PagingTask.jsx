import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './PagingTask.css'

export default function PagingTask(props) {
    return (
        <div className="paging-task-container select-item-center">
            <div className='paging-task-border select-item-center'>
                <FontAwesomeIcon className='paging-task-icon icon-poiter' icon={['fas', 'fa-chevron-left']}></FontAwesomeIcon>
                <p className='paging-task-text'>TASK 1</p>
                <FontAwesomeIcon className='paging-task-icon icon-poiter' icon={['fas', 'fa-chevron-right']}></FontAwesomeIcon>
            </div>
        </div>
    )
}