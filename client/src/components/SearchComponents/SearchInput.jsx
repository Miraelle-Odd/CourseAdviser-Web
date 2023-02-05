import React from 'react'
import './SearchInput.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchInput(props) {
    return (
        <Fragment>
            <div className='search-container search-in-list'>
                <input name="search-input" type="text" className="search search-input-custom" placeholder='Nhập nội dung tìm kiếm...'
                    defaultValue={props.currentSearch == "all" ? "" : props.currentSearch} onKeyDown={props.searchHandler}></input>
                <FontAwesomeIcon className='search-icon search-icon-custom' icon={['fas', 'search']}></FontAwesomeIcon>
            </div>
        </Fragment>
    )
}