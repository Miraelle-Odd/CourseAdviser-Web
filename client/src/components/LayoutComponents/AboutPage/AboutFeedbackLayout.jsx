import React, { useEffect, useState } from 'react'
import './AboutFeedbackLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from "../../../assets/icons/TKB_HK2.PNG"
import FeedbackCard from '../../CardComponents/AboutPage/FeedbackCard';
import { Carousel } from 'react-responsive-carousel';



const SliderItem = (props) => {
    return (
        <div className="about-fb-layout-row">
            {
                props.feedbackPair.map((item, index) => {
                    return (
                        <div className="flex" key={index}>
                            <FeedbackCard
                                img={item.exst_img}
                                name={item.exst_name}
                                place={"- " + item.exst_achieve}
                                text={'"' + item.exst_quote + '"' }>
                            </FeedbackCard>
                            {index % 2 == 0 ? <div className="about-fb-layout-space"></div> : ""}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default function AboutFeedbackLayout(props) {
    var feedbacks = []
    for (var i = 0; i < props.feedbacks.length; i = i + 2) {
        feedbacks.push(props.feedbacks.slice(i, i + 2))
    }

    return (
        <Fragment>
            <div className="about-fb-layout-content">
                <div className="about-fb-layout-title about-fb-layout-center">
                    <p className="about-fb-layout-detail">Chia sẻ từ học viên</p>
                </div>
                <div className="feedback-slider">
                    <Carousel
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={3000}
                    >
                        {feedbacks.map((item, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    feedbackPair={item}
                                ></SliderItem>
                            )
                        })}
                    </Carousel>
                </div>

            </div>
        </Fragment>
    )
}