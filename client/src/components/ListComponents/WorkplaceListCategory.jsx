import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./WorkplaceListCategory.css"
import { NavLink } from "react-router-dom";

const WorkplaceListCategory = props => {
    return (
        <div className="workplace-list-categories">
            {
                props.items.map((item, index) => {
                    return (
                        <NavLink to={item.link}  className="workplace-lc">
                            {
                                item.awesomeIcon ?
                                    <FontAwesomeIcon className="icon" icon={item.awesomeIcon}></FontAwesomeIcon> :
                                    item.icon ?
                                        <img className="icon img-icon" src={item.icon}></img> :
                                        ""

                            }
                            <span>{item.display}</span>
                        </NavLink>
                    )
                }
                )
            }
        </div>
    )
}

export default WorkplaceListCategory