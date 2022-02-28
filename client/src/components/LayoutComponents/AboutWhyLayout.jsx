import React from 'react'
import './AboutWhyLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import WhyCard_Rou from '../CardComponents/WhyCard_Rou';
import ielts_img from '../../assets/icons/course_ielts.png'
import TKB_HK2 from "../../assets/icons/TKB_HK2.PNG"

export default function AboutWhyLayout() {
    return (
        <Fragment>
            <div className="about-why-layout-content ">
                <div className="about-why-layout-title">
                    <div className="about-why-layout-line"></div>
                    <p className="about-why-layout-detail">Why should you choose us ?</p>
                </div>
                
                <div className="about-why-layout-row row-1">
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                </div>
                <div className="about-why-layout-row">
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={ielts_img}
                        side_img={TKB_HK2}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rou>
                </div>
            </div>
        </Fragment>
    )
}