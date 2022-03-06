import React from 'react'
import './PostSpecialLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from '../../../assets/icons/TKB_HK2.PNG';
import test from '../../../assets/icons/course-ielts.png';
import icon_event from "../../../assets/icons/post-star.png";
import icon_org from "../../../assets/icons/post-org.png";
import icon_post from "../../../assets/icons/post-piggy.png";
import icon_blue from "../../../assets/icons/post-blue.png";
import { Link } from 'react-router-dom';
import PostCardBtn from '../../ButtonComponents/PostPage/PostCardBtn';

export default function PostSpecialLayout(props) {
    if (props.type == "event") {
        return (
            <Fragment>
                <div className='post-special-bg-org'>
                    <div className="post-special-content">
                        <div className='post-special-card'>
                            <PostCardBtn
                                img={props.img}
                                title={props.title}
                                context={props.context}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostCardBtn>
                            <PostCardBtn
                                img={props.img}
                                title={props.title}
                                context={props.context}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostCardBtn>
                        </div>
                        <div className='post-special-info'>
                            <p className='post-special-title'>SPECIAL EVENTS</p>
                            <p className='post-special-text'>{props.description}</p>
                            <Link to="/temp" className='post-special-link'>
                                <div className='post-special-seeall'>
                                    <img className='no-fit' src={icon_event}></img>
                                    <p className='post-special-context'>See all special events</p>
                                    <img className='no-fit' src={icon_org}></img>
                                </div>
                            </Link>
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
                            <p className='post-special-text'>{props.description}</p>
                            <Link to="/temp" className='post-special-link'>
                                <div className='post-special-seeall'>
                                    <img className='no-fit' src={icon_post}></img>
                                    <p className='post-special-context blue-context'>See all academic posts</p>
                                    <img className='no-fit' src={icon_blue}></img>
                                </div>
                            </Link>
                        </div>
                        <div className='post-special-card'>
                            <PostCardBtn
                                img={props.img}
                                title={props.title}
                                context={props.context}
                                datetime={props.datetime}
                                author={props.author}
                                bluecard={true}>
                            </PostCardBtn>
                            <PostCardBtn
                                img={props.img}
                                title={props.title}
                                context={props.context}
                                datetime={props.datetime}
                                author={props.author}
                                bluecard={true}>
                            </PostCardBtn>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}