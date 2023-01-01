import React from 'react'
import './PostSliderLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post-noimg.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/vi';

const SliderItem = (props) => {
    // moment.locale('fr')
    return (
        <div className='slider-item'>
            <img src={props.img ? props.img : img} className='image'></img>
            <Link className='info-layer' to={props.link ? props.link : "#"}>
                <span className='title'>{props.title ? props.title : "KHÔNG TIÊU ĐỀ"}</span>
                <span className='date'>
                    Đăng vào {props.date ? moment(props.date).format("LL") : " Month DD, YYYY "} bởi
                    <span className='author'>{props.author ? props.author : "ẩn danh"}</span>
                </span>
            </Link>
        </div>
    )
}


export default function PostSliderLayout(props) {
    return (
        <Fragment>
            <div className='post-slider-content'>
                <div className='post-slider'>
                    {
                        props.items ?
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                autoFocus={true}
                                autoPlay={true}
                                infiniteLoop={true}
                                interval={2000}
                                transitionTime={800}>
                                {
                                    props.items.map((item, index) => {
                                        return (
                                            <SliderItem
                                                img={item.post_img}
                                                title={item.post_title}
                                                date={item.updatedAt}
                                                author={item.name}
                                                link={item.link}
                                            ></SliderItem>
                                        )

                                    })

                                }
                            </Carousel> 
                            : null
                    }

                </div>
            </div>
        </Fragment>
    )
}