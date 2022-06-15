import React from 'react'
import './AboutWhyLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { useState } from 'react';
import area1 from "../../../assets/icons/About-area1.jpg"
import area2 from "../../../assets/icons/About-area2.jpg"
import area3 from "../../../assets/icons/About-area3.jpg"
import area4 from "../../../assets/icons/About-area4.jpg"
import TKB_HK2 from "../../../assets/icons/About-center1.jpg"
import course from "../../../assets/icons/About-center2.jpg"
import ielts_img from '../../../assets/icons/course-ielts.png'
import WhyCard_Rou from '../../CardComponents/AboutPage/WhyCard_Rou';

export default function AboutWhyLayout() {
    return (
        <Fragment>
            <div className="about-why-layout-content ">
                <div className="about-why-layout-title">
                    <div className="about-why-layout-line"></div>
                    <p className="about-why-layout-detail">Tạo sao nên chọn trung tâm ?</p>
                </div>
                
                <div className="about-why-layout-row row-1">
                    <WhyCard_Rou
                        main_img={TKB_HK2}
                        icon={['fas', 'street-view']}
                        title="Đổi mới sáng tạo"
                        content="Trung tâm chúng tôi áp dụng những phương pháp dạy và học sáng tạo nhất">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={area4}
                        icon={['fas', 'street-view']}
                        title="Trách nhiệm kỷ luật"
                        content="Điều hành kỷ luật nghiêm minh, đảm bảo giữ đúng cảm kết với học viên">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={area1}
                        icon={['fas', 'street-view']}
                        title="Giảng dạy tận tâm"
                        content="Các giảng viên là những chuyên gia trong việc truyền đạt kiến thức">
                    </WhyCard_Rou>
                </div>
                <div className="about-why-layout-row">
                    <WhyCard_Rou
                        main_img={course}
                        icon={['fas', 'street-view']}
                        title="Kết nối yêu thương"
                        content="Học viên được phân cấp đồng đều, tạo môi trường lớp học cầu tiến">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={area2}
                        icon={['fas', 'street-view']}
                        title="Truyền đạt cảm hứng"
                        content="Không chỉ là giảng chạy, mà còn là truyền đạt vẻ đẹp của ngôn ngữ">
                    </WhyCard_Rou>
                    <WhyCard_Rou
                        main_img={area3}
                        icon={['fas', 'street-view']}
                        title="Môi trường thân thiện"
                        content="Môi trường học với học viên, giảng viên đa quốc gia, tạo sự tự tin khi giao tiếp">
                    </WhyCard_Rou>
                </div>
            </div>
        </Fragment>
    )
}