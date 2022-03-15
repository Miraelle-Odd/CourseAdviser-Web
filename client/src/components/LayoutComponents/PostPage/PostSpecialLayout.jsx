import React from 'react'
import './PostSpecialLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import PostCardBtn from '../../ButtonComponents/PostPage/PostCardBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function PostSpecialLayout(props) {
    if (props.type == "origin") {
        return (
            <Fragment>
                <div className='post-special-bg-org'>
                    <div className="post-special-content">
                        <div className='post-special-card'>
                            {props.btn.map((item, index) => {
                                return (
                                    <PostCardBtn
                                        id={item.id}
                                        category={props.category}
                                        img={item.img}
                                        title={item.title}
                                        context={item.context}
                                        datetime={item.datetime}
                                        author={item.author}>
                                    </PostCardBtn>
                                )

                            })}
                        </div>
                        <div className='post-special-info'>
                            <p className='post-special-title'>{props.title}</p>
                            <p className='post-special-text'>{props.description}</p>
                            {props.link ? <Link to={props.link} className='post-special-link'>
                                <div className='post-special-seeall'>
                                    <FontAwesomeIcon className='orange-context' icon={props.icon}></FontAwesomeIcon>
                                    <p className='post-special-context orange-context'>See all {props.title}</p>
                                    <FontAwesomeIcon className='orange-context' icon={['fas', 'chevron-right']}></FontAwesomeIcon>
                                </div>
                            </Link> : ""}
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
    else if (props.type == "blue") {
        return (
            <Fragment>
                <div className='post-special-bg-blue'>
                    <div className="post-special-content">
                        <div className='post-special-info post-type'>
                            <p className='post-special-title blue-title'>{props.title}</p>
                            <p className='post-special-text'>{props.description}</p>
                            {props.link ? <Link to={props.link} className='post-special-link'>
                                <div className='post-special-seeall'>
                                    <FontAwesomeIcon className='blue-context' icon={props.icon}></FontAwesomeIcon>
                                    <p className='post-special-context blue-context'>See all {props.title}</p>
                                    <FontAwesomeIcon className='blue-context' icon={['fas', 'chevron-right']}></FontAwesomeIcon>
                                </div>
                            </Link> : ""}
                        </div>
                        <div className='post-special-card'>
                            {props.btn.map((item, index) => {
                                return (
                                    <PostCardBtn
                                        id={item.id}
                                        category={props.category}
                                        bluecard={true}
                                        img={item.img}
                                        title={item.title}
                                        context={item.context}
                                        datetime={item.datetime}
                                        author={item.author}>
                                    </PostCardBtn>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}