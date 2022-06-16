import React from 'react'
import './AboutVisionLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import VisionCard from '../../CardComponents/AboutPage/VisionCard';
import cloud from '../../../assets/icons/About-cloud.png'
import mind from '../../../assets/icons/About-mind.png'
import gear from '../../../assets/icons/About-gear.png'
export default function AboutVisionLayout() {
    return (
        <Fragment>
            <div className="about-vision-layout-content">
                <div className="about-vision-layout-row">
                    <VisionCard
                        img={cloud}
                        title="Tầm nhìn"
                        content="Trung tâm hướng đến việc lấy học viên làm động lực giảng dạy, cố gắng hết mình vì học viên thân yêu">
                    </VisionCard>
                    <VisionCard
                        img={mind}
                        title="Sứ mệnh"
                        content="Truyền đạt cảm hứng, đem lại sự cải thiện rõ rệt trong kỹ năng học thuật cũng như điểm số chứng chỉ của học viên">
                    </VisionCard>
                    <VisionCard
                        img={gear}
                        title="Giá trị cốt lõi"
                        content="Trung tâm chúng tôi luôn được biết đến là tổ chức giáo dục uy tín, chuyên tâm đào tạo học viên">
                    </VisionCard>
                </div>
            </div>
        </Fragment>
    )
}