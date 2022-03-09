import React from 'react'
import './PostCardBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

export default function PostCardBtn(props) {
    return (
        <Fragment>
            <div className="post-card-content">
                <Link to="/temp" className='post-card-link'>
                    <div className='post-card-main'>
                        <div className='post-card-border'>
                            <img className={props.img ? 'post-card-img' : "post-card-img noimg"} src={props.img ? props.img : img}></img>
                        </div>

                        <div className='post-card-detail post-card-center'>
                            <p className={props.bluecard === true ? 'post-card-title blue-title' : 'post-card-title'}>{props.title}</p>
                            <p className='post-card-text'>{props.context}</p>
                            <div className='post-card-footer'>
                                <FontAwesomeIcon className={props.bluecard === true? 'post-card-icon-blue':'post-card-icon-orange'} icon={['fas', 'calendar']}></FontAwesomeIcon>
                                <span className={props.bluecard === true ? 'post-card-datetime blue-datetime' : 'post-card-datetime'}>{props.datetime}</span>
                            </div>
                        </div>
                    </div>
                    <div className={props.bluecard === true ? 'post-card-header post-card-center blue-header' : 'post-card-header post-card-center'}>
                        <p className='post-card-name'>{props.author}</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}