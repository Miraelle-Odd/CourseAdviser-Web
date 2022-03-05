import React from 'react'
import './PostSpecialLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import PostCard from '../../CardComponents/PostPage/PostCard';
import TKB_HK2 from '../../../assets/icons/TKB_HK2.PNG';
import icon_event from "../../../assets/icons/post-star.png";
import icon_org from "../../../assets/icons/post-org.png";
import icon_post from "../../../assets/icons/post-piggy.png";
import icon_blue from "../../../assets/icons/post-blue.png";

export default function PostSpecialLayout(props) {
    if (props.type == "event") {
        return (
            <Fragment>
                <div className='post-special-bg-org'>
                    <div className="post-special-content">
                        <div className='post-special-card'>
                            <PostCard
                                img={TKB_HK2}
                                title="Title only 1 line so let use ellipse"
                                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                                datetime="DD-MM-YYYY - hh:mm:ss"
                                author="Author Name">
                            </PostCard>
                            <PostCard
                                img={TKB_HK2}
                                title="Title only 1 line so let use ellipse"
                                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                                datetime="DD-MM-YYYY - hh:mm:ss"
                                author="Author Name">
                            </PostCard>
                        </div>
                        <div className='post-special-info'>
                            <p className='post-special-title'>SPECIAL EVENTS</p>
                            <p className='post-special-text'>Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd</p>
                            <div className='post-special-seeall'>
                                <img className='no-fit' src={icon_event}></img>
                                <p className='post-special-context'>See all special events</p>
                                <img className='no-fit' src={icon_org}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
    else if (props.type == "post") {
        return (
            <Fragment>
                <div className='post-special-bg-blue'>
                    <div className="post-special-content">
                        <div className='post-special-info post-type'>
                            <p className='post-special-title blue-title'>ACADEMIC POSTS</p>
                            <p className='post-special-text'>Description or introduction blah blah. Cac bai viet hay nhat blah blah dang de tham khao. Chem gio tam 5 den 6 dong la dep. dkajdksajdksadald dsdsdsdsd sdsdsdsdsds dsdsdsd</p>
                            <div className='post-special-seeall'>
                                <img className='no-fit' src={icon_post}></img>
                                <p className='post-special-context blue-context'>See all academic posts</p>
                                <img className='no-fit' src={icon_blue}></img>
                            </div>
                        </div>
                        <div className='post-special-card'>
                            <PostCard
                                img={TKB_HK2}
                                title="Title only 1 line so let use ellipse"
                                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                                datetime="DD-MM-YYYY - hh:mm:ss"
                                author="Author Name"
                                bluecard={true}>
                            </PostCard>
                            <PostCard
                                img={TKB_HK2}
                                title="Title only 1 line so let use ellipse"
                                context="Subtitle cds sdsd dsds dsdsd max 3 lines ddd ddddd dddd dddd ddd dd dd dd ee rrrr ttt dsa"
                                datetime="DD-MM-YYYY - hh:mm:ss"
                                author="Author Name"
                                bluecard={true}>
                            </PostCard>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}