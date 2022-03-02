import React from 'react'
import './AboutCenterLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import FacilityCard_Img from '../../CardComponents/AboutPage/FacilityCard_Img';
import LocationLayout from './LocationLayout';



export default function AboutCenterLayout() {
    return (
        <Fragment>
            {/* <div className="about-center-layout-content">
                <div className='about-center-layout-bg-1'>
                    <div className='about-center-layout-title-content-1'>
                        <div className='about-center-layout-border'>
                            <p className='about-center-layout-title'>Trung tâm</p>
                            <p className='about-center-layout-des'>Short Script Short Script Short Script Short Script</p>
                        </div>
                    </div>
                    <div className='about-center-layout-location-content'>
                        <img className='about-center-layout-location-img' src={TKB_HK2}></img>
                        <div className='about-center-layout-location-detail'>

                        </div>
                    </div>
                    <div className='about-center-layout-switch'>
                        <LocationLayout> </LocationLayout>
                    </div>
                    <div className='about-center-layout-title-content-2'>
                        <p className='about-center-layout-title'>Không gian học tập truyền cảm hứng</p>
                        <p className='about-center-layout-des'>Tạo cảm giác tập trung cao độ và bla bla</p>
                    </div>
                </div>
                <div className='about-center-layout-bg-2'>
                    <div className='about-center-layout-left'>
                        <div className='about-center-layout-abow'>
                            <FacilityCard_Img
                                img={TKB_HK2}
                                type="small">
                            </FacilityCard_Img>
                            <FacilityCard_Img
                                img={TKB_HK2}
                                type="small">
                            </FacilityCard_Img>
                        </div>
                        <div className='about-center-layout-below'>
                            <FacilityCard_Img
                                img={TKB_HK2}
                                type="large-hor">
                            </FacilityCard_Img>
                        </div>
                    </div>
                    <div className='about-center-layout-right'>
                        <FacilityCard_Img
                            img={TKB_HK2}
                            type="large-ver">
                        </FacilityCard_Img>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}