import React from 'react'
import './PostCard.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post_image.png';
import icon_1 from '../../../assets/icons/post_calendar_1.png'
import icon_2 from '../../../assets/icons/post_calendar_2.png'

export default function PostCard(props) {
    return (
        <Fragment>
            <div className="post-card-content">
                <div className='post-card-main'>
                    <div className='post-card-border'>
                        <img className={props.img ? 'post-card-img' : "post-card-img noimg"} src={props.img ? props.img : img}></img>
                    </div>

                    <div className='post-card-detail post-card-center'>
                        <p className={props.bluecard===true ? 'post-card-title blue-title' : 'post-card-title'}>{props.title}</p>
                        <p className='post-card-text'>{props.context}</p>
                        <div className='post-card-footer'>
                            <img className='post-card-icon' src={props.bluecard===true ? icon_2 : icon_1}></img>
                            <p className={props.bluecard===true ? 'post-card-datetime blue-datetime' : 'post-card-datetime'}>{props.datetime}</p>
                        </div>
                    </div>
                </div>
                <div className={props.bluecard===true ? 'post-card-header post-card-center blue-header' : 'post-card-header post-card-center'}>
                    <p className='post-card-name'>{props.author}</p>
                </div>
            </div>
        </Fragment>
    )
}