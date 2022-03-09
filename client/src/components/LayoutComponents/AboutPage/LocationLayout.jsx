import React from 'react'
import './LocationLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import LocationSwitch from '../../SwitchComponents/AboutPage/LocationSwitch';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import course from "../../../assets/icons/course-ielts.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function LocationLayout() {

    const [activeButton, setActiveButton] = useState('Chi Nhánh 1');

    const clickedButtonHandler = (e) => {
        setActiveButton(e);
    };
    return (
        <Fragment>
            <div className="location-switch-content">
                <div className='location-switch-layout'>
                    <img className='location-switch-content-img' src={activeButton === "Chi Nhánh 1" ? TKB_HK2 : course}></img>
                    <div className='location-switch-content-detail'>
                        <div className='location-switch-centent-left location-switch-center'>
                            <p className='location-switch-left-title'>
                                {activeButton === "Chi Nhánh 1" ? "Chi Nhánh 1" : "Chi Nhánh 2"}
                            </p>
                            <div className='location-switch-left-border location-switch-center'>
                                <FontAwesomeIcon className='location-switch-left-icon' icon={['fas', 'location-dot']}></FontAwesomeIcon>
                            </div>
                            <p className='location-switch-left-address'>
                                Địa chỉ
                            </p>
                            <p className='location-switch-left-text'>
                                {activeButton === "Chi Nhánh 1" ? "XX, AAA BBB, phường CCC CCC, quận KKK, TP. SSS" : "NN, JJJ LLL, phường TTT TTT, quận III, TP.WWW"}
                            </p>
                        </div>
                        <div className='location-switch-centent-right location-switch-center'>
                            <p className='location-switch-right-text'>
                                {activeButton === "Chi Nhánh 1" ? "Description blah blah Description blah blah Description blah blah Description blah blah Description blah blah Description blah blah" 
                                : "Test switch content"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='location-switch-button'>
                    <LocationSwitch
                        onClick={() => clickedButtonHandler('Chi Nhánh 1')}
                        stat={activeButton === "Chi Nhánh 1" ? true : false}
                        name="Chi Nhánh 1">
                    </LocationSwitch>
                    <LocationSwitch
                        onClick={() => clickedButtonHandler('Chi Nhánh 2')}
                        stat={activeButton === "Chi Nhánh 2" ? true : false}
                        name="Chi Nhánh 2">
                    </LocationSwitch>
                </div>

            </div>
        </Fragment>
    )
}