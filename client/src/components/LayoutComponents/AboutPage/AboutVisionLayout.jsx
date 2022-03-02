import React from 'react'
import './AboutVisionLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import VisionCard from '../../CardComponents/AboutPage/VisionCard';


export default function AboutVisionLayout() {
    return (
        <Fragment>
            <div className="about-vision-layout-content">
                <div className="about-vision-layout-row">
                    <VisionCard
                        img={TKB_HK2}
                        title="Tầm nhìn"
                        content="This is Vision. bla bla max 3 lines fakjsbadbámnd đaina,dam">
                    </VisionCard>
                    <VisionCard
                        img={TKB_HK2}
                        title="Sứ mệnh"
                        content="This is Vision. bla bla max 3 lines fakj sbadb ámnd đaina,dam">
                    </VisionCard>
                    <VisionCard
                        img={TKB_HK2}
                        title="Giá trị cốt lõi"
                        content="This is Vision. bla bla max 3 lines fakjsba dbámnd đaina, dam test nội dung ba dòng là như thế nào nhưng chưa đủ để sang dòng thứ tư, nani max-lines ko chạy">
                    </VisionCard>
                </div>
            </div>
        </Fragment>
    )
}