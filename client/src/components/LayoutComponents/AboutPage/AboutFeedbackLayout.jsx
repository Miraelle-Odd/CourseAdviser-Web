import React from 'react'
import './AboutFeedbackLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import FeedbackCard from '../../CardComponents/AboutPage/FeedbackCard';


export default function AboutFeedbackLayout() {
    return (
        <Fragment>
            <div className="about-fb-layout-content">
                <div className="about-fb-layout-title about-fb-layout-center">
                    <p className="about-fb-layout-detail">Chia sẻ từ học viên</p>
                </div>

                <div className="about-fb-layout-row">
                    <FeedbackCard
                        img={TKB_HK2}
                        name="Student's Name"
                        place="- Workplace/School"
                        text="`I love this center so much that I can learn English at any other ones, I dont't wanna get graduated and just have to stay hear forever. Mual Mual`">
                    </FeedbackCard>
                    <div className="about-fb-layout-space"></div>
                    <FeedbackCard
                        img={TKB_HK2}
                        name="Student's Name"
                        place="- Workplace/School"
                        text="`I love this center so much that I can learn English at any other ones, I dont't wanna get graduated and just have to stay hear forever. Mual Mual`">
                    </FeedbackCard>
                </div>

                <div className="about-fb-layout-indicator">



                    {/* Need to imple Indi */}




                </div>
            </div>
        </Fragment>
    )
}