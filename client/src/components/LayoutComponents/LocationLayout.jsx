import React from 'react'
import './LocationLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';

import LocationSwitch from '../SwitchComponents/LocationSwitch.jsx';

export default function LocationLayout() {

    const [activeButton, setActiveButton] = useState('Chi Nhánh 1');

    const clickedButtonHandler = (e) => {
        setActiveButton(e);
    };
    return (
        <Fragment>
            <div className="location-switch-content">
                <LocationSwitch
                    onClick={() => clickedButtonHandler('Chi Nhánh 1')}
                    stat={activeButton === "Chi Nhánh 1" ? true : false}
                    name="Chi Nhánh 1"
                >
                </LocationSwitch>
                <LocationSwitch
                    onClick={() => clickedButtonHandler('Chi Nhánh 2')}
                    stat={activeButton === "Chi Nhánh 2" ? true : false}
                    name="Chi Nhánh 2"
                >
                </LocationSwitch>
            </div>
        </Fragment>
    )
}