import React from 'react'
import './SortComboBox.css'

const SortComboBox = props => {
    return (
        <select name="sort-input" className={props.customClassName? props.customClassName : "sort"} onChange={props.onChange}>
            {
                props.items? props.items.map((item, index) => {
                    return (
                        <option value={item.value}>{item.displayText}</option>
                    )
                })
                :
                ""
            }

        </select>
    )
}
export default SortComboBox;