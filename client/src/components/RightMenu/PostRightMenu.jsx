import React from 'react'
import './PostRightMenu.css'
import placeholder from '../../assets/icons/post-thumb-placeholder.png'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const PostRightMenu = props => {
    let {postType} = useParams();
    return (
        <div className='post-menu-container'>
            <div className='post-menu-header'>Mới nhất</div>
            <div className='post-menu-list'>
                {
                    props.items.map((item, index) => {
                        var time = moment(item.updatedAt).format("YYYY-MM-DD hh-mm A");
                        return (
                            <a href={"/main-post/" + item.category + "/post-details/" + item.post_id} className='list-item-container'>
                                <img className='item-thumbnail' src={item.post_img ? item.post_img : placeholder}></img>
                                <div className='item-info'>
                                    <div className='item-title'>
                                        <span>{item.post_title ? item.post_title : 'Post Title'}</span>
                                        <span className='author'>- {item.name ? item.name : 'Author'}</span>
                                    </div>
                                    <span className='item-subtitle'>{item.post_type ? item.post_type : 'Subtitle'}</span>
                                    <span className='item-upload-time'>{time ? time : 'DD/MM/YYYY - hh:mm:ss'}</span>
                                </div>
                            </a>
                        )

                    })
                }
            </div>
        </div>



    )
}

export default PostRightMenu;