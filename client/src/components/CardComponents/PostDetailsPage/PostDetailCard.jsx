import React from 'react'
import './PostDetailsCard.css'
import placeholder from '../../../assets/icons/post-thumb-placeholder.png'
import moment from 'moment'

const PostDetailsCard = props => {
    var time = moment(props.uploadTime).format("YYYY-MM-DD hh-mm A");
    return (
        <div className='post-details-card-container'>
            <div className='post-details-card-header'>
                <span className='header-title'>{props.title? props.title : 'Post Title'}</span>
                <span className='header-subtitle'>{props.subtitle? props.subtitle : 'Post Subtitle'}</span>
            </div>
            <div className='post-details-side-info'>
                <span>{props.author? props.author: "AUTHOR'S NAME"} -- {time? time : 'DD/MM/YYYY hh:mm:ss'}</span>
            </div>
            <div className='post-details-thumbnail'>
                <img className='post-details-img' src = {props.thumbnail? props.thumbnail : placeholder}></img>
            </div>
            <div className='post-details-content'>
                {props.content? props.content : 'Post Content'}
            </div>

        </div>
    )
}

export default PostDetailsCard;