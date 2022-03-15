import React from 'react'
import './PostDetailsCard.css'
import placeholder from '../../../assets/icons/post-thumb-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostDetailsCard = props => {
    return (
        <div className='post-details-card-container'>
            <div className='post-details-card-header'>
                <span className='header-title'>{props.title? props.title : 'Post Title'}</span>
                <span className='header-subtitle'>{props.subtitle? props.subtitle : 'Post Subtitle'}</span>
            </div>
            <div className='post-details-side-info'>
                <span>{props.author? props.author: "AUTHOR'S NAME"} -- {props.uploadTime? props.uploadTime : 'DD/MM/YYYY hh:mm:ss'}</span>
            </div>
            <div className='post-details-thumbnail'>
                <img src = {props.thumbnail? props.thumbnail : placeholder}></img>
            </div>
            <div className='post-details-content'>
                {props.content? props.content : 'Post Content'}
            </div>

        </div>
    )
}

export default PostDetailsCard;