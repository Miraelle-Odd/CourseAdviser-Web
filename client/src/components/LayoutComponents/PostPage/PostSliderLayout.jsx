import React from 'react'
import './PostSliderLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post_image.png';

export default function PostSliderLayout(props) {
    return (
        <Fragment>
            <div className='post-slider-content'>
                <div className='post-slider'>
                    <div className='post-slider-bg'>
                        <img className='post-slider-img no-fit' src={img}></img>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}