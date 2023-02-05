import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FilterSelect(props) {
    return (
        <Fragment>
            <div className={props.customCss ? props.customCss : "workplace-list-categories"}>
                {
                    props.items.map((item, index) => {
                        return (
                            <button onClick={props.onCategoryChange} className={"workplace-lc css-button" + (props.type === item.value ? " css-active" : "")} value={item.value} key={index}>
                                {
                                    item.awesomeIcon ?
                                        <FontAwesomeIcon className="icon" icon={item.awesomeIcon}></FontAwesomeIcon> :
                                        item.icon ?
                                            <img className="icon img-icon" src={item.icon}></img> :
                                            ""

                                }
                                <span>{item.display}</span>
                            </button>
                        )
                    }
                    )
                }
            </div>
        </Fragment>
    )
}