import React, { useRef, useEffect } from 'react'
import {
    NavLink
  } from 'react-router-dom';

import './DraftCom.css'

const DraftCom = props => {
    return (
        <header>
            <NavLink to="/aaa" activeClassName="active">Trang A</NavLink>
            <NavLink to="/bbb" activeClassName="active">Trang B</NavLink>
            <a href="/workplace/employee-management">Workplace</a>
        </header>
    )
}

export default DraftCom