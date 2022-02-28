import React from 'react'
import './MethodLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';

import MethodSwitch from '../SwitchComponents/MethodSwitch';

export default function MethodLayout() {

    const [activeButton, setActiveButton] = useState('RIPL Method');

    const clickedButtonHandler = (e) => {
        setActiveButton(e);
    };
    return (
        <Fragment>
            <div className="method-layout-content">
                <div className='method-layout-switch'>
                    <MethodSwitch
                        onClick={() => clickedButtonHandler('RIPL Method')}
                        stat={activeButton === "RIPL Method" ? true : false}
                        name="RIPL Method">
                    </MethodSwitch>
                    <MethodSwitch
                        onClick={() => clickedButtonHandler('SMART Learning')}
                        stat={activeButton === "SMART Learning" ? true : false}
                        name="SMART Learning">
                    </MethodSwitch>                    
                </div>
                <div className="method-layout-line"></div>
            </div>
            
        </Fragment>
    )
}