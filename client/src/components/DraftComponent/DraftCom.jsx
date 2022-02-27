import React, { useRef, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';

import './DraftCom.css'

import defaultIcon from '../../assets/icons/draft.png'

const DraftCom = props => {
    return (
        <header>
            <NavLink to="/aaa" activeClassName="active">Trang A</NavLink>
            <NavLink to="/bbb" activeClassName="active">Trang B</NavLink>
        </header>
    )
}

export default DraftCom