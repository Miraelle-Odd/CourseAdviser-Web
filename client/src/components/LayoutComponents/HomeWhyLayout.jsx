import React from 'react'
import './HomeWhyLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import person from "../../assets/icons/street-view.png"
import group from "../../assets/icons/users.png"
import graduation_cap from '../../assets/icons/graduation-cap.png'
import WhyCard_Rec from '../CardComponents/WhyCard_Rec';

export default function HomeWhyLayout() {
    return (
        <Fragment>
            <div className="home-why-layout-content">
                <div className="home-why-layout-title">
                    <div className="home-why-layout-line"></div>
                    <p className="home-why-layout-detail">Why should you choose us ?</p>
                </div>

                <div className="home-why-layout-row">
                    <WhyCard_Rec
                        icon={graduation_cap}
                        title="Cam kết chất lượng đầu ra"
                        content="Học viên được phép học lại khóa học miễn phí nếu không đạt chuẩn đầu ra theo cam kết từ hợp đồng đào tạo của trung tâm">
                    </WhyCard_Rec>
                    <WhyCard_Rec
                        icon={person}
                        title="Personalized Study Routes"
                        content="Chuyên gia ngôn ngữ tư vấn trực tiếp, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân">
                    </WhyCard_Rec>
                    <WhyCard_Rec
                        icon={group}
                        title="Lớp học ít người"
                        content="Lớp học quy mô nhỏ cùng với các lớp 1 kèm 1, đảm bảo học viên được tương tác và theo sát tận tình trong suốt quá trình học">
                    </WhyCard_Rec>
                </div>
            </div>
        </Fragment>
    )
}