import React from 'react'
import './PostItemBtn.css'
import { Fragment } from 'react/cjs/react.production.min';
import img from '../../../assets/icons/post_image.png';
import {Link} from 'react-router-dom';
export default function PostItemBtn(props) {
    return (
        <Fragment><Link to="/temp" className='post-item-link'>
            <div className={props.typeblue === true ? 'post-item-content type-blue post-item-center' : 'post-item-content post-item-center'}>
                    <img className={props.typeblue === true ?
                        props.thumbnail ? 'post-item-thumble thumble-blue' : 'post-item-thumble thumble-blue no-fit' :
                        props.thumbnail ? 'post-item-thumble' : 'post-item-thumble no-fit'}
                        src={props.thumbnail ? props.thumbnail : img}></img>
                    <div className={props.typeblue === true ? 'post-item-detail type-blue' : 'post-item-detail'}>
                        <div className='post-item-main'>
                            <p className='post-item-title'>{props.title}</p>
                            <p className='post-item-context'>{props.content}</p>
                        </div>
                        <div className='post-item-line'></div>
                        <div className='post-item-sub'>
                            <span className='post-item-datetime'>{props.datetime}</span>
                            <span className='post-item-author'>{props.author}</span>
                        </div>
                    </div>
                
            </div></Link>
        </Fragment>
    )
}