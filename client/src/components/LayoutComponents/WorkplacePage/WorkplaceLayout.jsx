import React from 'react'
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
    },
    {
        value: 2,
        displayText: "Họ tên - A đến Z"
    },
    {
        value: 3,
        displayText: "Họ tên - Z đến A"
    },
    {
        value: 4,
        displayText: "Email - A đến Z"
    },
    {
        value: 5,
        displayText: "Email - Z đến A"
    }
]

const sortHandler = (e) => {
    console.log(e.target.value);
    //Handle chosen sort option code
}
const WorkplaceLayout = props => {
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
                            onChange={sortHandler}
                            customClassName="sort margin-right-63"
                            items={sortItems}
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