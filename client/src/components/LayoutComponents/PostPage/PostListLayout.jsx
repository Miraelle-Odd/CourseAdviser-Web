import React from 'react'
import './PostListLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import TKB_HK2 from '../../../assets/icons/TKB_HK2.PNG'
import PostItemBtn from '../../ButtonComponents/PostPage/PostItemBtn';
import ReactPaginate from 'react-paginate';
import piggy from '../../../assets/icons/post-piggy.png';

export default function PostListLayout(props) {
    return (
        <Fragment>
            <div className={props.typeblue === true ? 'post-list-content for-pg-blue' : 'post-list-content for-pg-org'}>
                <div className='post-list-header post-list-center'>
                    <span className={props.typeblue === true ? 'post-list-title for-pg-blue' : 'post-list-title for-pg-org'}>Let's learn together !</span>
                    <div className='post-list-line'></div>
                </div>
                {
                    props.typeblue === true ?
                        <div className='post-list-card post-list-center'>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}
                                typeblue={true}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}
                                typeblue={true}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}
                                typeblue={true}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}
                                typeblue={true}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}
                                typeblue={true}>
                            </PostItemBtn>
                        </div>
                        :
                        <div className='post-list-card post-list-center'>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostItemBtn>
                            <PostItemBtn
                                img={props.img}
                                title={props.title}
                                content={props.content}
                                datetime={props.datetime}
                                author={props.author}>
                            </PostItemBtn>
                        </div>
                }


                {/* <div className="post-list-pagination">
                    <ReactPaginate
                        breakLabel="..."
                        // nextLabel={piggy}
                        pageRangeDisplayed={5}
                        pageCount={10}
                        // previousLabel={piggy}
                        renderOnZeroPageCount={null}
                        activeClassName="active"
                        forcePage={0}
                    />
                </div> */}

            </div>
        </Fragment>
    )
}