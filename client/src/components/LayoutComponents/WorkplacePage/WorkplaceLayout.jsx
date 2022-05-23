import React, { useState } from 'react'
import SortComboBox from '../../ComboBoxComponents/SortComboBox';
import './WorkplaceLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất"
    }
]

const WorkplaceLayout = props => {
    const [sortOption, setSortOption] = useState(0)
    const sortHandler = (e) => {
        console.log(e.target.value);
        
        setSortOption(e.target.value)
        //Handle chosen sort option code
    }
    return (
        <div className='workplace-container'>            
            <div className='workplace-header'>
                <div className='workplace-title'>{props.title ? props.title : "Workplace Title"}</div>
                {props.toolbar ?
                    <div className='workplace-toolbar'>
                        <div className='search-container'>
                            <FontAwesomeIcon className='search-icon' icon={['fas', 'search']}></FontAwesomeIcon>
                            <input name="search-input" type="text" className="search" placeholder='Nhập nội dung tìm kiếm...'></input>
                        </div>
                        <SortComboBox
                            onChange={props.sortHandler?props.sortHandler : sortHandler}
                            customClassName="sort margin-right-63"
                            items={props.sortItems?props.sortItems : sortItems}
                            defaultValue={props.sortOption? props.sortOption : sortOption}
                        ></SortComboBox>
                    </div> : ""
                }
            </div>
            <div className={props.toolbar ? 'decoration-position decoration-toolbar' : 'decoration-position decoration-no-toolbar'}></div>
            <div className='workplace-body'>
                {
                    props.renderBody ? props.renderBody : ""
                }
            </div>
        </div>
    )
}

export default WorkplaceLayout;