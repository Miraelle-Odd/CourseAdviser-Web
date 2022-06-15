import React from 'react'
import './AboutCenterLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import area1 from "../../../assets/icons/About-area1.jpg"
import area2 from "../../../assets/icons/About-area2.jpg"
import area3 from "../../../assets/icons/About-area3.jpg"
import area4 from "../../../assets/icons/About-area4.jpg"
import FacilityCard_Img from '../../CardComponents/AboutPage/FacilityCard_Img';
import LocationLayout from './LocationLayout';



export default function AboutCenterLayout() {
    return (
        <Fragment>
            <div className="about-center-layout-content">
                <div className='about-center-layout-bg-1'>
                    <div className='about-center-layout-title-content-1'>
                        <div className='about-center-layout-border'>
                            <p className='about-center-layout-title-1'>Trung tâm</p>
                            <p className='about-center-layout-des-1'>Short Script Short Script Short Script Short Script</p>
                        </div>
                        <div className='about-center-layout-switch'>
                            <LocationLayout> </LocationLayout>
                        </div>
                    </div>

                    <div className='about-center-layout-title-content-2'>
                        <p className='about-center-layout-title-2'>Không gian học tập truyền cảm hứng</p>
                        <p className='about-center-layout-des-2'>Tạo cảm giác tập trung cao độ và môi trường học thân thiện</p>
                    </div>
                </div>
                <div className='about-center-layout-bg-2'>
                    <div className='about-center-detail'>
                        <div className='about-center-layout-left'>
                            <div className='about-center-layout-abow'>
                                <FacilityCard_Img
                                    img={area1}
                                    type="small">
                                </FacilityCard_Img>
                                <FacilityCard_Img
                                    img={area2}
                                    type="small">
                                </FacilityCard_Img>
                            </div>
                            <div className='about-center-layout-below'>
                                <FacilityCard_Img
                                    img={area3}
                                    type="large-hor">
                                </FacilityCard_Img>
                            </div>
                        </div>
                        <div className='about-center-layout-right'>
                            <FacilityCard_Img
                                img={area4}
                                type="large-ver">
                            </FacilityCard_Img>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}