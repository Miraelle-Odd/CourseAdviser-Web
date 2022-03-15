import React from 'react'
import './PostRightMenu.css'
import placeholder from '../../assets/icons/post-thumb-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'

const PostRightMenu = props => {
    let {postType} = useParams();
    return (
        <div className='post-menu-container'>
            <div className='post-menu-header'>Mới nhất</div>
            <div className='post-menu-list'>
                {
                    props.items.map((item, index) => {
                        return (
                            <Link to={"/main-post/" + postType + "/post-details/" + item.postId} className='list-item-container'>
                                <img className='item-thumbnail' src={item.thumbnail ? item.thumbnail : placeholder}></img>
                                <div className='item-info'>
                                    <div className='item-title'>
                                        <span>{item.title ? item.title : 'Post Title'}</span>
                                        <span className='author'>- {item.author ? item.author : 'Author'}</span>
                                    </div>
                                    <span className='item-subtitle'>{item.subtitle ? item.subtitle : 'Subtitle'}</span>
                                    <span className='item-upload-time'>{item.uploadTime ? item.uploadTime : 'DD/MM/YYYY - hh:mm:ss'}</span>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
        </div>



    )
}

export default PostRightMenu;