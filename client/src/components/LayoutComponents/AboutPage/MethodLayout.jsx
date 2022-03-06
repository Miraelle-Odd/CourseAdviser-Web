import React from 'react'
import './MethodLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import student from '../../../assets/icons/about-student.png'
import RIPL from '../../../assets/icons/about-RIPL.png'
import shadow from '../../../assets/icons/shadow.png'

import MethodSwitch from '../../SwitchComponents/AboutPage/MethodSwitch';

export default function MethodLayout() {

    const [activeButton, setActiveButton] = useState('RIPL Method');

    const clickedButtonHandler = (e) => {
        setActiveButton(e);
    };
    return (
        <Fragment>
            <div className="method-layout-content">
                <div className='method-layout-header'>
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
                <div className='method-layout-black-bg'>
                    <div className='method-layout-white-bg'>
                        <img className='method-layout-main-img' src={RIPL}></img>
                    </div>

                </div>
                <div className='method-layout-left-content'>
                    <div className='method-layout-rectangle'></div>
                    <img className='method-layout-shadow' src={shadow}></img>
                    <img className='method-layout-side-img' src={student}></img>
                </div>
            </div>

        </Fragment>
    )
}