import React from 'react'
import './PostCourseBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post_image.png';
export default function PostCourseBtn(props) {
    return (
        <Fragment>
            <div className={props.typeblue===true ? 'post-course-content type-blue post-course-center':'post-course-content post-course-center'}>
                <img className={props.typeblue===true ?  
                props.thumbnail ? 'post-course-thumble thumble-blue' : 'post-course-thumble thumble-blue no-fit': 
                props.thumbnail ? 'post-course-thumble' : 'post-course-thumble no-fit'} 
                src={props.thumbnail ? props.thumbnail : img}></img>
                <div className={props.typeblue===true ? 'post-course-detail type-blue':'post-course-detail'}>
                    <div className='post-course-main'>
                        <p className='post-course-title'>{props.title}</p>
                        <p className='post-course-context'>{props.content}</p>
                    </div> 
                    <div className='post-course-line'></div>
                    <div className='post-course-sub'>
                        <span className='post-course-datetime'>{props.datetime}</span>
                        <span className='post-course-author'>{props.author}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}